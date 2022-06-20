import {IsEnum, IsString} from "class-validator";
import {RolesEnums} from "../../enums";
import { EnumToString } from '../../helpers/enumsToString'

export class CreatedAdminDto {

    @IsString()
    readonly name: string;

    @IsString()
    readonly lastName: string;

}