import { Logger } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export function ApiLog(req: Request, res: Response, next: NextFunction) {
  const logger = new Logger('API CALL');

  logger.log(`${req.method} - ${req.path} :: ${JSON.stringify(req.query)}`);

  next();
}
