import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';
import { UsersService } from 'src/users/users.service';
import { OrderStatus } from './order.enum';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    private readonly userService: UsersService,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    const user = await this.userService.findOne(createOrderDto.userId);
    if(!user) {
      throw new Error("User not found");
    }

    const order = this.orderRepository.create({
      status: createOrderDto.status || OrderStatus.PENDING,
      orderData: createOrderDto.orderData,
      deliveryData: createOrderDto.deliveryData,
      user: user,
    });

    return await this.orderRepository.save(order).catch(error => {
      console.log(error);
    })
  }

  findAll() {
    return this.orderRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
