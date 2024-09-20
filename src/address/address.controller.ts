import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressCreateDto } from './dto/address-create.dto';
import { AddressUpdateDto } from './dto/address-update.dto';
import { ApiTags } from '@nestjs/swagger';
import { AddressSearchDto } from './dto/address.search.dto';

@Controller('address')
@ApiTags('Endereço')
export class AddressController {
  constructor(
    private readonly _service: AddressService
  ) { }

  @Post()
  public async create(
    @Body() createAddressDto: AddressCreateDto
  ) {
    return this._service.createAddress(createAddressDto);
  }
  
  @Get('/search')
  public async getManyUsers(
		@Query() queries?: AddressSearchDto
  ) {
    return await this._service.searchManyAddress(queries);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAddressDto: AddressUpdateDto
  ) {
    return this._service.update(+id, updateAddressDto);
  }
}
