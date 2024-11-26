import { Order } from "src/orders/entities/order.entity";
import { Rating } from "src/ratings/entities/rating.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 50})
  firstName: string;

  @Column({length: 50})
  lastName: string;

  @Column({length: 64})
  password: string;

  @Column({length: 50, unique: true})
  username: string;

  @OneToMany(() => Order, order => order.user)
  orders:Order[];

  @OneToMany(() => Rating, rating => rating.user)
  ratings: Rating[];
}
