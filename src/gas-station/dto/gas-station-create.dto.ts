import { ApiHideProperty, OmitType } from "@nestjs/swagger";
import GasStationEntity from "../entities/gas-station.entity";
import { randomUUID } from "crypto";

export class GasStationCreateDto extends OmitType(GasStationEntity, ["id"]) {

	/** Não é necessário informar o ID, pois ele sera gerado automaticamente. */
	@ApiHideProperty()
	id: GasStationEntity['id'];

	constructor() {
		super();
		this.id = randomUUID();
	}
}
