import { getCountriesPagination } from '../services/countries.js';

const getCountries = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 0;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search || '';

    const response = await getCountriesPagination(page, limit, search);

    return res.json(response);
  } catch (error) {
    return res.json({ message: error.message });
  }
};

export { getCountries };
