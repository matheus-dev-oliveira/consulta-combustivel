import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { GasStationModule } from './gas-station/gas-station.module';
import { AddressModule } from './address/address.module';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    DatabaseModule,
    GasStationModule,
    AddressModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
