import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RdvService } from 'src/app/services/rdv.service';

@Component({
  selector: 'app-rdv',
  templateUrl: './rdv.component.html',
  styleUrls: ['./rdv.component.scss']
})
export class RdvComponent implements OnInit {
  rdvs: any[] = [];
  selectedRdv: any;

  constructor(private rdvService: RdvService , private router :Router) {}

  ngOnInit(): void {
    this.getAllRdv();
  }

  getAllRdv() {
    this.rdvService.getAllRdv().subscribe(res => {
      this.rdvs = res;
    });
  }
  detailRdv(id:any){
    this.router.navigateByUrl(`/dash/rdv/${id}`)
  }
  acceptRdv(rdv: any) {
    this.rdvService.acceptRdv(rdv._id).subscribe(
      () => {
        rdv.status = 'accepted';
        this.getAllRdv();
      },
      error => {
        console.error('Error accepting appointment:', error);
      }
    );
  }

  refuseRdv(rdv: any) {
    this.rdvService.refuseRdv(rdv._id).subscribe(
      () => {
        rdv.status = 'refused';
        this.getAllRdv();
      },
      error => {
        console.error('Error refusing appointment:', error);
      }
    );
  }
  
}