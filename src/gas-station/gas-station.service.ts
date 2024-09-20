import { Injectable } from '@nestjs/common';
import { GasStationCreateDto } from './dto/gas-station-create.dto';
import { UpdateGasStationDto } from './dto/update-gas-station.dto';
import { GasStationRepository } from './gas-station.repository';
import { GasStationSearchDto } from './dto/gas-station-search.dto';

@Injectable()
export class GasStationService {

  constructor(
    private readonly _repository: GasStationRepository
  ) { }

  public async createGasStation(dto: GasStationCreateDto) {
    return await this._repository.insertGasStation(dto);
  }

  public async searchManyGasStation(queries?: GasStationSearchDto) {
    return await this._repository.selectManyGasStation(queries);
  }

  findOne(id: number) {
    return `This action returns a #${id} gasStation`;
  }

  update(id: number, updateGasStationDto: UpdateGasStationDto) {
    return `This action updates a #${id} gasStation`;
  }
}
