import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service.js';
import { RegisterDto } from './dto/register.dto.js';
import { LoginDto } from './dto/login.dto.js';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiOperation({ summary: 'Cadastrar usuário' })
  @ApiResponse({
    status: 201,
    description: 'Usuário cadastrado com sucesso',
  })
  @ApiResponse({
    status: 409,
    description: 'E-mail já cadastrado',
  })
  @ApiResponse({
    status: 400,
    description: 'Dados inválidos',
  })
  register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Autenticar usuário e gerar token JWT' })
  @ApiResponse({
    status: 200,
    description: 'Login realizado com sucesso; retorna o token JWT',
    schema: {
      example: {
        access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
        token_type: 'Bearer',
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'E-mail ou senha inválidos',
  })
  @ApiResponse({
    status: 400,
    description: 'Dados inválidos',
  })
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }
}
