import { Rating } from "src/ratings/entities/rating.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
	id: number;

	@Column({ length: 100 })
	name: string;

	@Column('text')
	description: string;

	@Column('decimal', { precision: 10, scale: 2 })
	price: number;

    @OneToMany(() => Rating, rating => rating.product)
    ratings: Rating[];
}
