import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import {v1 as uuid} from "uuid";
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  // private users = [];

  constructor(@InjectRepository(User) private usersRepo: Repository<User>) {

  }

  create(createUserDto: CreateUserDto) {
    const user = {
      ...createUserDto
    }
    this.usersRepo.save(user);
    return user;
  }

  findAll() {
    return this.usersRepo.find();
  }

  findOne(id: number) {
    return this.usersRepo.findOne({
      where: { id },
      relations: ['ratings','ratings.product'], // Include related ratings
    });
  }


  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
