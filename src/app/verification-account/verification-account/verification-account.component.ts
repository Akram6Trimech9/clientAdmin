import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-verification-account',
  templateUrl: './verification-account.component.html',
  styleUrls: ['./verification-account.component.scss']
})
export class VerificationAccountComponent implements OnInit {
  token!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
     this.route.params.subscribe(params => {
      this.token = params['token'];
     });
  }
}
