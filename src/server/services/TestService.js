import { injectable } from 'inversify';

@injectable()
export class TestService {
  test() {
    console.log('this is a test');
  }
}
