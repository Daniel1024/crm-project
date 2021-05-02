import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UserRegistrationDto } from './dtos';
// import { User as UserEntity } from './entities/user.entity';
import { Role } from '@common/enums';
import { JwtAuthGuard } from '@auth/guards/jwt-auth.guard';

@Controller('user')
export class UserController {

  constructor(
    private readonly userService: UserService,
  ) { }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getMany() {
    const data = await this.userService.getMany();
    return { data };
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getOne(
    @Param('id') id: number,
  ) {
    const data = await this.userService.getOne(id);
    return { data };
  }

  @Post('register')
  async publicRegistration(
    @Body() dto: UserRegistrationDto,
  ) {
    const data = await this.userService.createOne({
      ...dto,
      roles: [Role.AUTHOR],
    });

    return {
      message: 'User registered',
      data,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createOne(@Body() dto: CreateUserDto) {
    const data = await this.userService.createOne(dto);
    return { message: 'User created', data };
  }

  /*@UseGuards(JwtAuthGuard)
  @Put(':id')
  async editOne(
    @Param('id') id: number,
    @Body() dto: CreateUserDto
  ) {
    let data: UserEntity;
    const { roles, ...rest } = dto;
    data = await this.userService.editOne(id, rest, user);
    return { message: 'User edited', data };
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteOne(
    @Param('id') id: number,
    @User() user: UserEntity,
  ) {
    await this.userService.deleteOne(id, user);
    return { message: 'User deleted' };
  }*/
}
