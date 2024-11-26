import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { OrderStatus } from "../order.enum";
import { User } from "src/users/entities/user.entity";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
	id: number;

	@Column()
	status: OrderStatus;

	@Column({ type: 'json' })
	orderData: any;

	@Column({ type: 'json' })
	deliveryData: any;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

    @ManyToOne(() => User, user=> user.orders)
    user:User;
}
