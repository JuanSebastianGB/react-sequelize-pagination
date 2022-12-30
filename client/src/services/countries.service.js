const fetchCountries = async (page, search) => {
  const url = `http://localhost:5000/countries?page=${page}&&search=${search}`;
  const result = await fetch(url).then(data => data.json());
  return result;
};

const fetcher = url => fetch(url).then(res => res.json());

const buildUrl = (page, search) =>
  `http://localhost:5000/countries?page=${page}&search=${search}`;
// `http://localhost:5000/countries`;

export { fetchCountries, fetcher, buildUrl };
