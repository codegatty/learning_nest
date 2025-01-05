import { Body, Controller, Delete, Get,Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
@Get()// GET /users or /users?role=value 
findAll(@Query('role') role?:'INTERN'|'ENGINEER'|'ADMIN'){
    return `${role??'all users'}`;
}

@Get(':id')// GET /users/:id
findOne(@Param('id') id:string){
    return id;
}

@Post()// POST /users
createUser(@Body() user:{}){
    return user;
}

@Patch(':id') // PATCH /users/:id
updateUser(@Param('id') id:string,@Body() user:{}){
    return {id,...user}
}

@Delete(':id') // DELETE /users/:id
deleteUser(@Param('id') id:string){
    return {id}
}

}
