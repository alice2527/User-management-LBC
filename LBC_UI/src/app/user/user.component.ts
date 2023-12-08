import { Component } from '@angular/core';
import {User} from "../model/user.model";
import {MatDialog} from "@angular/material/dialog";
import {UserDetailsComponent} from "../user-details/user-details.component";

import { UpdateUserComponent } from '../update-user/update-user.component';
import { NewUserComponent } from '../new-user/new-user.component';
import {UserService} from "../Service/user-service.service";
import Swal from "sweetalert2";
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  userList: User[]=[]
  constructor(private userService:UserService,public dialog: MatDialog) {
    this.getList();
  }
  private getList() {

    this.userService.getAll().subscribe(
      (message: User[]) => {

        console.log("Received message:", message);
        this.userList=message;
        if(this.userList.length===0){
          this.noUser()
        }
      },
      (error) => {
        console.log("Error:", error);
      }
    );
  }
  noUser():void {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      showCancelButton: true, // Text for the custom button
    });
  }
  openUserDetails(id: number) {
    this.userService.getByID(id).subscribe(user => {
      const dialogRef = this.dialog.open(UserDetailsComponent, {
        width: '400px',
        data: user // Pass the retrieved user object here
      });
    });
  }
  newUser() {

      const dialogRef = this.dialog.open(NewUserComponent, {
        width: '400px',
      });
    dialogRef.afterClosed().subscribe(result => {
      // After the dialog closes, refresh the user list
      this.getList();
    });
  }

  deleteUser(userId: number, event: Event) {
    event.stopPropagation();
    this.userService.deleteByID(userId);
    this.getList()
  }

  updateUser(userId: number, event: Event) {
    event.stopPropagation();
    
      const dialogRef = this.dialog.open(UpdateUserComponent, {
        width: '400px',
        data: userId // Pass the retrieved user object here
      });
    dialogRef.afterClosed().subscribe(result => {
      // After the dialog closes, refresh the user list
      this.getList();
    });
  }
}
