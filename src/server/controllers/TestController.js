import { Controller, Get } from 'routing-controllers';

@Controller()
export class TestController {
  @Get('/test')
  getAll() {
    return 'hello world';
  }
}
