import { Injectable } from '@nestjs/common';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Rating } from './entities/rating.entity';
import { Repository } from 'typeorm';
import { UsersService } from 'src/users/users.service';
import { ProductsService } from 'src/products/products.service';

@Injectable()
export class RatingsService {
  constructor(
    @InjectRepository(Rating)
    private readonly ratingRepository: Repository<Rating>,
    private readonly userService: UsersService,
    private readonly productService: ProductsService,
  ){ }

  async create(createRatingDto: CreateRatingDto) {
    const user = await this.userService.findOne(createRatingDto.userId);
    if(user == null) {
      throw new Error("User not found");
    }

    const product = await this.productService.findOne(createRatingDto.productId);
    if(product == null) {
      throw new Error("Product is not found");
    }

    if(createRatingDto.rating > 10) {
      throw new Error("Rating is invalid");
    }

    const rating = this.ratingRepository.create({
      rating: createRatingDto.rating,
      review: createRatingDto.review,
      user,
      product
    });

    return this.ratingRepository.save(rating).catch(error => console.log(error));
  }

  findAll() {
    return `This action returns all ratings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rating`;
  }

  update(id: number, updateRatingDto: UpdateRatingDto) {
    return `This action updates a #${id} rating`;
  }

  remove(id: number) {
    return `This action removes a #${id} rating`;
  }
}
