import { Controller, Get } from 'routing-controllers';
import { injectable, inject } from 'inversify';

import { TestService } from '../services/TestService';

@Controller()
@injectable()
export class TestController {
  constructor(@inject(TestService) testService) {
    this.testService = testService;
  }

  @Get('/test')
  getAll() {
    this.testService.test();
    return 'hello world';
  }
}
