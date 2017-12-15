import { promisify } from 'util';
import * as jwt from 'jsonwebtoken';

import { jwtSecret } from '../config';

const verify = promisify(jwt.verify);

export async function authorizationChecker(action, roles = []) {
  const token = action.request.headers.authorization;

  try {
    const verified = await verify(token, jwtSecret);
    //TODO: need additional logic here!
    return true;
  } catch {
    return false;
  }
}
