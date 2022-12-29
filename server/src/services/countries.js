import { Op } from 'sequelize';
import { Country } from '../models/country.js';

/**
 * It returns the total number of pages and the result of the query.
 * @param page - the page number
 * @param limit - the number of rows to return
 * @param search - the search term
 * @returns An object with two properties: totalPages and result.
 */
export const getCountriesPagination = async (page, limit, search) => {
  const offset = page * limit;

  const [totalRows, result] = await Promise.all([
    Country.count({
      where: {
        [Op.or]: [
          {
            Continent: { [Op.like]: `%${search}%` },
          },
          {
            Name: { [Op.like]: `%${search}%` },
          },
          {
            Code: { [Op.like]: `%${search}%` },
          },
        ],
      },
    }),
    Country.findAll({
      where: {
        [Op.or]: [
          {
            Continent: { [Op.like]: `%${search}%` },
          },
          {
            Name: { [Op.like]: `%${search}%` },
          },
          {
            Code: { [Op.like]: `%${search}%` },
          },
        ],
      },
      offset,
      limit,
      order: [['Name', 'ASC']],
    }),
  ]);
  const totalPages = Math.ceil(totalRows / limit);

  return { totalRows, totalPages, page, limit, result };
};
