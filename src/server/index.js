import 'reflect-metadata';
import { createExpressServer, useContainer } from 'routing-controllers';
import { join } from 'path';
import { Container } from 'inversify';
import { static } from 'express';
import { values, flow, flatten } from 'lodash';
import { each, map } from 'lodash/fp';
import * as mongoose from 'mongoose';

import * as controllers from './controllers';
import * as services from './services';
import * as assemblers from './assemblers';
import * as config from './config';

const container = new Container();
flow(map(values), flatten, each(i => container.bind(i).toSelf()))([controllers, services, assemblers]);

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoDb, { useMongoClient: true });

useContainer(container);
createExpressServer({ controllers: values(controllers) })
  .use('/', static(join(__dirname, '../../dist/client')))
  .listen(8080);
