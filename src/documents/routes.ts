import express from 'express';
import { listDocuments } from './controllers/document.controller';

const router: express.Router = express.Router();

router.get('/', listDocuments);

export default router;
