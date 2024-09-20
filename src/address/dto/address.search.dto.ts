import { OmitType, PartialType } from "@nestjs/swagger";
import AddressEntity from "../entities/address.entity";

export class AddressSearchDto extends PartialType(OmitType(AddressEntity, ["id"])) { }
