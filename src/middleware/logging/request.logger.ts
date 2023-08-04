import logger from '../../helpers/logger/logger';

export const requestLogger = (req, res, next) => {
  logger.info({
    url: req.url,
    method: req.method,
    userAgent: req.headers?.['user-agent'],
  });
  next();
};
