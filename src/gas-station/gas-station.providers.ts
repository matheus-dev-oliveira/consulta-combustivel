import { DataSource } from 'typeorm';
import GasStationEntity from './entities/gas-station.entity';

export const gasProviderProviders = [
	{
		provide: 'GAS_STATION_REPOSITORY',
		useFactory: (dataSource: DataSource) => dataSource.getRepository(GasStationEntity),
		inject: ['DATA_SOURCE'],
	},
];