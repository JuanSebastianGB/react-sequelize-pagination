import express from 'express';
import { getCountries } from '../controllers/countries.js';
const router = express.Router();

router.get('/countries', getCountries);

export default router;
