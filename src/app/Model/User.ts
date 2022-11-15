export class User{
    public userId: Number;
	public email: String;
	public firstName: String;
	public lastName: String;
	public password: String;
    public username: String;
    public role: String;

    constructor(userId: Number, username: String ,email: String,firstName: String, lastName: String, password: String, role: String){
        this.userId = userId;
        this.email =email;
        this.firstName = firstName;
        this.lastName =lastName;
        this.password = password;
        this.username = username;
        this.role = role;
    }
	
}