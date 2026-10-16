import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class RegisterDto {
  @ApiProperty({
    description: 'Nome completo do usuário',
    example: 'João Silva',
    maxLength: 100,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @ApiProperty({
    description: 'Endereço de e-mail válido para cadastro',
    example: 'joao.silva@exemplo.com',
    maxLength: 150,
    format: 'email',
  })
  @IsEmail()
  @MaxLength(150)
  email: string;

  @ApiProperty({
    description: 'Senha de acesso à conta',
    example: 'SenhaSegura123!',
    minLength: 8,
    maxLength: 72,
  })
  @IsString()
  @MinLength(8)
  @MaxLength(72)
  password: string;
}
