import { Body, Controller, Delete, Get,Param, Patch, Post, Query,ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
@Controller('users')
export class UsersController {
constructor(private readonly userService: UsersService) {}  //dependency Injection 
@Get()// GET /users or /users?role=value 
findAll(@Query('role') role?:'INTERN'|'ENGINEER'|'ADMIN'){
    return this.userService.findAll(role)
}
@Get(':id')// GET /users/:id
findOne(@Param('id') id:string){
    return this.userService.findOne(id)
}
@Post()// POST /users
createUser(@Body(ValidationPipe) createUserDto:CreateUserDto){
   return this.userService.createUser(createUserDto)
}
@Patch(':id') // PATCH /users/:id
updateUser(@Param('id') id:string,@Body(ValidationPipe) updateUserDto:UpdateUserDto){
    return this.userService.updateUser(id,updateUserDto) 
}
@Delete(':id') // DELETE /users/:id
deleteUser(@Param('id') id:string){
    return this.userService.deleteUser(id)
}
}
