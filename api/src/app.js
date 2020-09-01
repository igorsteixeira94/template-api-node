import express from 'express';
import routes from './routes';
import cors from 'cors';
import 'dotenv/config';

class App {
  constructor() {
    this.express = express();
    this.express.use(cors());
    this.middleware();
    this.routes();
  }

  middleware() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use(routes);
  }
}

export default new App().express;
