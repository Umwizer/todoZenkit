import express, { Router } from 'express';
import dotenv from 'dotenv';
const app = express();
dotenv.config();
import router from './routes/tasks.routes.js';
import configuration from './configs/server.js';
import mongoose from 'mongoose';
import cors from 'cors';
import taskModel from './models/tasks.models.js';

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));
app.use(cors());

mongoose
  .connect(configuration.mongoURI)
  .then(() => {
    app.use('/api', router);
    app.listen(PORT, () => {
      console.log('listening on port ' + PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
