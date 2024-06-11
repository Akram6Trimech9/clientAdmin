import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActualittyService } from 'src/app/services/actualitty.service';

@Component({
  selector: 'app-actualities',
  templateUrl: './actualities.component.html',
  styleUrl: './actualities.component.scss'
})
export class ActualitiesComponent implements OnInit{

 acutalities !: any[] 
  constructor( private actualityService : ActualittyService , private router : Router){

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
  deleteActuality(id: string): void {
    this.actualityService.deleteActuality(id).subscribe(
      () => {
        this.acutalities = this.acutalities.filter((item) => item._id !== id);
      },
      (error) => {
        console.error('Error deleting actuality:', error);
      }
    );
  }
  updateActuality(id:any){ 
     this.router.navigate([`/dash/update-actuality/${id}`])
  }
}
