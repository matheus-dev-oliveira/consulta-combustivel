import { Module } from '@nestjs/common';
import { Repository } from 'typeorm';
import { GasStationService } from './gas-station.service';
import { GasStationController } from './gas-station.controller';
import { DatabaseModule } from '../database/database.module';
import { gasProviderProviders } from './gas-station.providers';
import GasStationEntity from './entities/gas-station.entity';
import { GasStationRepository } from './gas-station.repository';

@Module({
  imports: [DatabaseModule, Repository],
  controllers: [GasStationController],
  providers: [
    ...gasProviderProviders,
    GasStationEntity,
    GasStationService,
    GasStationRepository
  ],
})

export class GasStationModule { }
