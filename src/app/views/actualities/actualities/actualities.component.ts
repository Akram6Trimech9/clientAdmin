import { Component, OnInit } from '@angular/core';
import { ActualittyService } from 'src/app/services/actualitty.service';

@Component({
  selector: 'app-actualities',
  templateUrl: './actualities.component.html',
  styleUrl: './actualities.component.scss'
})
export class ActualitiesComponent implements OnInit{

 acutalities : any[] =[]
  constructor( private actualityService : ActualittyService){

  }
  ngOnInit(): void {
    this.actualityService.getAllActualities().subscribe(res =>{
       this.acutalities = res
        this.acutalities.forEach(item => { 
           const url = "http://localhost:3000/"
           const link = item.file
           item.file= url+link
        })
    })
  }

}
