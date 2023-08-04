import { Response } from 'express';

export const listDocuments = async (_req, res: Response) => {
  const items = [{'a':1}];
  res.status(200).send(items);
};
