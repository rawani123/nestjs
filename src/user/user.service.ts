import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../schemas/user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: { name: string; email: string; password: string }): Promise<User> {
    createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
    const createdUser = await new this.userModel(createUserDto).save();
    return createdUser;
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }
}
