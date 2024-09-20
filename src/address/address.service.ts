import { Injectable } from '@nestjs/common';
import { AddressCreateDto } from './dto/address-create.dto';
import { AddressUpdateDto } from './dto/address-update.dto';
import { AddressRepository } from './address.repository';
import { GasStationSearchDto } from '../gas-station/dto/gas-station-search.dto';
import { AddressSearchDto } from './dto/address.search.dto';

@Injectable()
export class AddressService {

  constructor(
    private readonly _repository: AddressRepository
  ) { }

  public async createAddress(createDto: AddressCreateDto) {
    return await this._repository.insertAddress(createDto);
  }

  public async searchManyAddress(queries?: AddressSearchDto) {
    return await this._repository.selectManyAddress(queries);
  }

  update(id: number, updateAddressDto: AddressUpdateDto) {
    return `This action updates a #${id} address`;
  }
}
