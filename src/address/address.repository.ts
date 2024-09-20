import { Inject, Injectable } from "@nestjs/common";
import { Like, Repository } from "typeorm";
import AddressEntity from "./entities/address.entity";
import { AddressCreateDto } from "./dto/address-create.dto";
import { AddressUpdateDto } from "./dto/address-update.dto";
import { AddressSearchDto } from "./dto/address.search.dto";

@Injectable()
export class AddressRepository {

	constructor(
		@Inject('ADDRESS_REPOSITORY')
		private _repository: Repository<AddressEntity>
	) { }

	public async insertAddress(entity: AddressCreateDto) {
		return await this._repository.save(entity);
	}

	public async selectManyAddress(queries: AddressSearchDto) {
		return await this._repository.find({
			where: {
				district: queries.district ? Like(`%${queries.district}%`) : undefined,
				number: queries.number ? queries.number : undefined,
				state: queries.state ? Like(`%${queries.state}%`) : undefined,
				street: queries.street ? Like(`%${queries.street}%`) : undefined
			}
		});
	}
}
