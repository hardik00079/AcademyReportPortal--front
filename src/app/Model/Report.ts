export class Report{
    public id: String;
	public name: String;
	public dateCreated: String;
	public description: String;
    public visable: boolean;


    constructor(id: String, name: String ,description: String,dateCreated: String, visable: boolean){
        this.id = id;
        this.name = name;
        this.description = description;
        this.dateCreated =dateCreated;
        this.visable = visable;
        
    }
	
}