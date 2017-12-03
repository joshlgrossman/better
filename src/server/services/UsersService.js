import { injectable } from 'inversify';

import { User } from '../models/User';

@injectable()
export class UsersService {
  async login(username, password) {
    try {
      const user = await User.model.findOne({ username });
      return (await user.authenticate(password)) ? user : null;
    } catch {
      return null;
    }
  }

  async register(username, password) {
    try {
      const newUser = new User.model({ username, password });
      await newUser.save();
      return newUser;
    } catch {
      return null;
    }
  }

  async list() {
    try {
      return await User.model.find({});
    } catch {
      return null;
    }
  }

  async get(username) {
    try {
      return await User.model.find({ username });
    } catch {
      return null;
    }
  }
}
