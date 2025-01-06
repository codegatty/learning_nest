import { Injectable,NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
private dummyData=[
        {"id": '1', "name": "User_1", "email": "user1@example.com", "userType": "INTERN", "age": 33},
        {"id": '2', "name": "User_2", "email": "user2@example.com", "userType": "ADMIN", "age": 31},
        {"id": '3', "name": "User_3", "email": "user3@example.com", "userType": "ENGINEER", "age": 20},
        {"id": '4', "name": "User_4", "email": "user4@example.com", "userType": "INTERN", "age": 22},
        {"id": '5', "name": "User_5", "email": "user5@example.com", "userType": "ENGINEER", "age": 28},
        {"id": '6', "name": "User_6", "email": "user6@example.com", "userType": "ADMIN", "age": 29},
        {"id": '7', "name": "User_7", "email": "user7@example.com", "userType": "ADMIN", "age": 24},
        {"id": '8', "name": "User_8", "email": "user8@example.com", "userType": "ENGINEER", "age": 32},
        {"id": '9', "name": "User_9", "email": "user9@example.com", "userType": "INTERN", "age": 32},
        {"id": '10', "name": "User_10", "email": "user10@example.com", "userType": "ENGINEER", "age": 32}
    ]

findAll(role?:'INTERN'|'ENGINEER'|'ADMIN'){
if(role){
    const users= this.dummyData.filter(user => user.userType === role);
    if(users.length === 0){
        throw new NotFoundException("No users found with the specified role !")
    }
    return users
}else
    return this.dummyData;
}
findOne(id:string){
        const user=this.dummyData.find(user => user.id === id);
        if(!user){
throw new NotFoundException("User not found !")
        }
        return user;
}
createUser(createUserDto:CreateUserDto){
    this.dummyData.push(createUserDto)
    return createUserDto
}
updateUser(id:string,updateUserDto:UpdateUserDto){
 this.dummyData=this.dummyData.map(eUser => eUser.id === id ? { ...eUser, ...updateUserDto } : eUser);
 return this.findOne(id);
}
deleteUser(id:string){
    const deletedUser=this.findOne(id)
    this.dummyData=this.dummyData.filter(eUser => eUser.id !== id);
    return deletedUser
}
}
