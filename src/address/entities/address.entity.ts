import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('address')
export default class AddressEntity {

	@Column()
	@PrimaryGeneratedColumn('uuid')
	@ApiProperty({ type: String })
	id: string;

	@Column({ name: 'number' })
	@ApiProperty({ type: Number })
	number: number;

	@Column({ name: 'state' })
	@ApiProperty({ type: String })
	state: string

	@Column({ name: 'district' })
	@ApiProperty({ type: String })
	district: string

	@Column({ name: 'street' })
	@ApiProperty({ type: String })
	street: string
}
