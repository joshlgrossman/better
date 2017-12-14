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
          ...user.toObject(),
          token
        };
      }
    } catch {
      return null;
    }
  }

  async register(username, password) {
    try {
      const user = await User.model.create({ username, password });
      const token = await sign(user.username, jwtSecret);

      return {
        ...user.toObject(),
        token
      };
    } catch {
      return null;
    }
  }

  async list() {
    try {
      const user = await User.model.find();

      return user.toObject();
    } catch {
      return [];
    }
  }

  async get(username) {
    try {
      const user = await User.model.findOne({ username });

      return user.toObject();
    } catch {
      return null;
    }
  }
}
