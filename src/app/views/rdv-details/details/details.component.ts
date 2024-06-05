import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Import ActivatedRoute
import { RdvService } from 'src/app/services/rdv.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']  
})
export class DetailsComponent implements OnInit {
  
  rdv: any;
  id!: string;  

  constructor(private route: ActivatedRoute, private rdvService: RdvService,private router : Router) {}  

  ngOnInit(): void {
     this.route.params.subscribe(params => {
      this.id = params['id'];  
       this.rdvService.getOneRdv(this.id).subscribe(res => {
        this.rdv = res;
        console.log(res)
      });
    });
  }
  deleteRdv(){
    this.rdvService.deleteRdv(this.id).subscribe(res => {
      this.rdv = res;
       this.router.navigate(['/dash/rdvs'])
    });
  }
}
