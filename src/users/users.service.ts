import { Injectable } from '@nestjs/common';
type TUser={
    id:string,
    name:string,
    email:string,
    userType:'INTERN'|'ENGINEER'|'ADMIN',
    age:number
}

type TUpdateUser={
    name?:string,
    email?:string,
    userType?:'INTERN'|'ENGINEER'|'ADMIN',
    age?:number
}
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
if(role)
    return this.dummyData.filter(user => user.userType === role);
else
    return this.dummyData;
}

findOne(id:string){
        return this.dummyData.find(user => user.id === id);
}

createUser(user:TUser){
    this.dummyData.push(user);
    return user;
}

updateUser(id:string,user:TUpdateUser){
 this.dummyData=this.dummyData.map(eUser => eUser.id === id ? { ...eUser, ...user } : eUser);
 return this.findOne(id);
}

deleteUser(id:string){
    const deletedUser=this.findOne(id)
    this.dummyData=this.dummyData.filter(eUser => eUser.id !== id);
    return deletedUser
}

}
