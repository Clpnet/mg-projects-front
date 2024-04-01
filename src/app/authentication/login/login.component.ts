import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Avenger } from 'src/app/models/Avenger';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  private _http:HttpClient
  private apiUrlList:string;
  public list:any;
  private _router:ActivatedRoute;
  public hidden:boolean=true;

  displayedColumns: string[] = ['id', 'name', 'heroName', 'skill','score','isDead'];

  constructor(route: ActivatedRoute, http:HttpClient ) { 
    this._router = route;
    this._http= http;
    this.apiUrlList="http://localhost:9001/avengers";
    
}
  ngOnInit(): void {

  }
  
  CargarDatos():void{

    this.hidden=false;
    this._http.get(this.apiUrlList).subscribe(result =>{
      this.list= result;
    });

}
}



