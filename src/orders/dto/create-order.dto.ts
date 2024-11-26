import { User } from "src/users/entities/user.entity";
import { OrderStatus } from "../order.enum";

export class CreateOrderDto {
    status: OrderStatus;
	orderData: any;
	deliveryData: any;
	createdAt: Date;
	updatedAt: Date;
	userId: number;
	user: User;
}
