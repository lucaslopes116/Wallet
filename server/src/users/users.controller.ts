import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { UsersService, User } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: User): User {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(): User[] {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): User | undefined {
    return this.usersService.findOne(Number(id));
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserDto: User,
  ): User | undefined {
    return this.usersService.update(Number(id), updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): boolean {
    return this.usersService.remove(Number(id));
  }
}
