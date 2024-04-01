export class Avenger{

    private id:number;
    private name:string;
    private heroName:string;
    private skill:string;
    private score:number;
    private isDead:boolean;


    constructor(id:number,name:string, heroName:string, skill:string, score:number, isDead:boolean){
        
        this.id=id;
        this.name=name;
        this.heroName=heroName;
        this.skill=skill;
        this.score=score;
        this.isDead=isDead;
    }
}