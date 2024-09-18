import { PartialType } from '@nestjs/swagger';
import { CreateGasStationDto } from './create-gas-station.dto';

export class UpdateGasStationDto extends PartialType(CreateGasStationDto) {}
