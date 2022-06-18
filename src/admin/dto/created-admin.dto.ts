import {IsString} from "class-validator";

export class CreatedAdminDto {

    @IsString()
    readonly name: string;

    @IsString()
    readonly lastName: string;

    @IsString()
    readonly rol: string;
}