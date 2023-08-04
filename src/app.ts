import './helpers/datadogTracer.init'; // dd-trace must be initialised before any other modules is imported
import serverless from 'serverless-http';
import app from './express';

export const handler = serverless(app());
