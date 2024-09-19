import { Inject, Injectable } from "@nestjs/common";
import { Like, Repository } from "typeorm";
import GasStationEntity from "./entities/gas-station.entity";
import { GasStationCreateDto } from "./dto/gas-station-create.dto";

@Injectable()
export class GasStationRepository {

	constructor(
		@Inject('GAS_STATION_REPOSITORY')
		private _repository: Repository<GasStationEntity>
	) { }

	public async insertGasStation(entity: GasStationCreateDto) {
		return await this._repository.save(entity);
	}

	public async selectManyGasStation(queries: any) {
		return await this._repository.find({
			where: {
				businessName: queries.businessName ? Like(`%${queries.businessName}%`) : undefined,
				tradeName: queries.tradeName ? Like(`%${queries.tradeName}%`) : undefined,
				telephone: queries.telephone ? Like(`%${queries.telephone}%`) : undefined,
				openHours: queries.openHours ? Like(`%${queries.openHours}%`) : undefined,
			}
		});
	}

}