import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import { sequelize } from './database/db.js';
import { countries } from './routes/index.js';

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/', countries);

const PORT = process.env.PORT || 3000;

const main = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: false });
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

main();
