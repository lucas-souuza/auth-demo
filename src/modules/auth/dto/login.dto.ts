import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    description: 'E-mail utilizado no cadastro',
    example: 'usuario@email.com',
    maxLength: 150,
  })
  @IsEmail()
  @MaxLength(150)
  email: string;

  @ApiProperty({
    description: 'Senha cadastrada pelo usuário',
    example: 'MinhaSenha123',
    minLength: 1,
    maxLength: 72,
  })
  @IsString()
  @MinLength(1)
  @MaxLength(72)
  password: string;
}
