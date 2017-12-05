import { injectable } from 'inversify';
import { promisify } from 'util';
import * as jwt from 'jsonwebtoken';

import { jwtSecret } from '../config';
import { User } from '../models';

const sign = promisify(jwt.sign);

@injectable()
export class UsersService {
  async login(username, password) {
    try {
      const user = await User.model.findOne({ username });

      if (await user.authenticate(password)) {
        const token = await sign(user.username, jwtSecret);

        return {
          ...user,
          token
        };
      }
    } catch {}

    return null;
  }

  async register(username, password) {
    try {
      const user = await User.model.create({ username, password });
      const token = await sign(user.username, jwtSecret);

      return {
        ...user,
        token
      };
    } catch {
      return null;
    }
  }

  async list() {
    try {
      return await User.model.find();
    } catch {
      return [];
    }
  }

  async get(username) {
    try {
      return await User.model.findOne({ username });
    } catch {
      return null;
    }
  }
}
