import { ApiProperty } from "@nestjs/swagger";
import AddressEntity from "src/address/entities/address.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity("gas_station")
export default class GasStationEntity {

	@Column()
	@PrimaryGeneratedColumn('uuid')
	@ApiProperty({ type: String })
	id: string;
	
	@Column({ name: 'trade_name' })
	@ApiProperty({ type: String })
	tradeName: string;
	
	@Column({ name: 'business_name', unique: true })
	@ApiProperty({ type: String })
	businessName: string;
	
	@Column()
	@ApiProperty({ type: String })
	telephone: string;
	
	@Column({ name: 'open_hours' })
	@ApiProperty({ 	type: String })
	openHours: string;

	@OneToOne(() => AddressEntity)
	@JoinColumn()
	address: AddressEntity
}
