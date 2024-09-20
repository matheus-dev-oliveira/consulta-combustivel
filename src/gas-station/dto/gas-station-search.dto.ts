import { OmitType, PartialType } from "@nestjs/swagger";
import GasStationEntity from "../entities/gas-station.entity";

export class GasStationSearchDto extends PartialType(OmitType(GasStationEntity, ["id"])) { }
