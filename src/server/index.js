import 'reflect-metadata';
import { createExpressServer, useContainer } from 'routing-controllers';
import { join } from 'path';
import { Container } from 'inversify';
import { static } from 'express';
import { values, flow, flatten } from 'lodash';
import { each, map } from 'lodash/fp';

import * as controllers from './controllers';
import * as services from './services';

const container = new Container();
flow(map(values), flatten, each(i => container.bind(i).toSelf()))([
  controllers, 
  services
]);

useContainer(container);
createExpressServer({ controllers: values(controllers) })
  .use('/', static(join(__dirname, '../../dist/client')))
  .listen(8080);
