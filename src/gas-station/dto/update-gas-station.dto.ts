import { PartialType } from '@nestjs/swagger';
import { GasStationCreateDto } from './gas-station-create.dto';

export class UpdateGasStationDto extends PartialType(GasStationCreateDto) {}
