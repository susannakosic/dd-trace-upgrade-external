import express from 'express';
import documentsRouter from './documents/routes';

export default function () {
  const app: express.Application = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use('/documents', documentsRouter);

  return app;
}
