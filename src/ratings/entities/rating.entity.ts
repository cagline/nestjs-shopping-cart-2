import { Product } from "src/products/entities/product.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";

@Entity()
export class Rating {
    @PrimaryColumn()
	userId: number;

	@PrimaryColumn()
	productId: number;

	@Column('int')
	rating: number; // Rating value, e.g., 1 to 5

	@Column('text', { nullable: true })
	review: string; // Optional review text

    @ManyToOne(() => User, (user) => user.ratings)
    user: User;

    @ManyToOne(() => Product, product => product.ratings)
    product: Product;
}
