import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("gas_station")
export class GasStation {

	@Column()
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	name: string;
}
