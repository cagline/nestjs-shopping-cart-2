import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import {v1 as uuid} from "uuid";

@Injectable()
export class UsersService {
  private users = [];

  create(createUserDto: CreateUserDto) {
    const user = {
      id: uuid(),
      ...createUserDto
    }
    this.users.push(user);
    return user;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find(user=> user.id = id);
  }


  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
