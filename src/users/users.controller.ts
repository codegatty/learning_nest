import { Body, Controller, Delete, Get,Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

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
createUser(@Body() user:{}){
    return this.createUser(user)
}

@Patch(':id') // PATCH /users/:id
updateUser(@Param('id') id:string,@Body() user:{}){
    return this.userService.updateUser(id,user) 
}

@Delete(':id') // DELETE /users/:id
deleteUser(@Param('id') id:string){
    return this.userService.deleteUser(id)
}

}
