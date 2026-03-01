import { IsEmail, MinLength, minLength } from 'class-validator';

export class SignUpDto {
  @IsEmail()
  email: string;

  @MinLength(8)
  password: string;
}
