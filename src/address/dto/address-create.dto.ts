import { ApiHideProperty, OmitType } from "@nestjs/swagger";
import AddressEntity from "../entities/address.entity";
import { randomUUID } from "crypto";

export class AddressCreateDto extends OmitType(AddressEntity, ["id"]) {

	/** Não é necessário informar o ID, pois ele sera gerado automaticamente. */
	@ApiHideProperty()
	id: AddressEntity['id'];

	constructor() {
		super();
		this.id = randomUUID();
	}
}
