import { IsString,IsNotEmpty,IsNumber,IsEnum,IsEmail} from 'class-validator'
export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    id: string;
    @IsNotEmpty()
    @IsString()
    name: string;
    @IsNotEmpty()
    @IsEmail()
    email: string;
    @IsNotEmpty()
    @IsEnum(['INTERN', 'ENGINEER', 'ADMIN'],{message:'needs to be specified roles'})
    userType: 'INTERN' | 'ENGINEER' | 'ADMIN';
    @IsNotEmpty()
    @IsNumber()
    age: number;
}
