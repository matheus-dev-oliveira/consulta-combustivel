import { Module } from '@nestjs/common';
import { Repository } from 'typeorm';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { addressProviders } from './address.providers';
import AddressEntity from './entities/address.entity';
import { AddressRepository } from './address.repository';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule, Repository],
  controllers: [AddressController],
  providers: [
    ...addressProviders,
    AddressEntity,
    AddressService,
    AddressRepository
  ],
})
export class AddressModule {}
