import { Component } from '@angular/core';
import {
  MatDialog
} from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  user: User = new User(); // kann ggf. wieder raus
  constructor(public dialog: MatDialog) {}

  

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }
}
