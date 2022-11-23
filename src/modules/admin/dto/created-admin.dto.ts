import {
  IsDefined,
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreatedAdminDto {
  @IsDefined()
  @MinLength(3)
  @MaxLength(20)
  @IsString()
  readonly name: string;

  @IsDefined()
  @MinLength(3)
  @MaxLength(20)
  @IsString()
  readonly lastName: string;

  @IsDefined()
  @MinLength(3)
  @MaxLength(20)
  @IsEmail()
  readonly email: string;

  @IsDefined()
  @MinLength(8)
  @MaxLength(20)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, {
    message: 'Password too weak',
  })
  password: string;
}
