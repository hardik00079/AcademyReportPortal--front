import { User } from "./User";

export class AcademyAdmin extends User{
    
    constructor(userId: Number, email: String, username: String,firstName: String, lastName: String, password: String, role: String){
        super(userId,username,email,firstName,lastName,password,role);
    }
}