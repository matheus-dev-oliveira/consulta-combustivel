import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { GasStationService } from './gas-station.service';
import { GasStationCreateDto } from './dto/gas-station-create.dto';
import { UpdateGasStationDto } from './dto/update-gas-station.dto';
import { ApiTags } from '@nestjs/swagger';
import { GasStationSearchDto } from './dto/gas-station-search.dto';

@Controller('gas-station')
@ApiTags('Posto de Combustível')
export class GasStationController {
  constructor(
    private readonly _service: GasStationService
  ) { }

  @Post()
  public create(
    @Body() gasStationCreateDto: GasStationCreateDto
  ) {
    return this._service.createGasStation(gasStationCreateDto);
  }

  @Get('/search')
  public async getManyUsers(
		@Query() queries?: GasStationSearchDto
  ) {
    return await this._service.searchManyGasStation(queries);
  }

  @Get(':id')
  public findOne(
    @Param('id') id: string
  ) {
    return this._service.findOne(+id);
  }

  @Patch(':id')
  public update(
    @Param('id') id: string,
    @Body() updateGasStationDto: UpdateGasStationDto
  ) {
    return this._service.update(+id, updateGasStationDto);
  }
}
