import 'reflect-metadata';
import { createExpressServer } from 'routing-controllers';
import { static } from 'express';
import * as path from 'path';

import * as controllers from './controllers';

createExpressServer({ controllers: Object.values(controllers) })
  .use('/', static(path.join(__dirname, '../../dist/client')))
  .listen(8080);
