import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../../services/users.service'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  users : any[] = []
  constructor( private userService : UsersService){

  }
  ngOnInit(): void {
       this.userService.getAllUsers().subscribe(res=>{
         this.users = res
         console.log(this.users)
       })
 }
 getAllUsers(){ 
    
 }
 deleteUser(id: string): void {
  this.userService.deleteAUser(id).subscribe(
    () => {
       this.users = this.users.filter(user => user._id !== id);
    },
    (error) => {
       console.error('Error deleting user:', error);
    }
  );
}
}
