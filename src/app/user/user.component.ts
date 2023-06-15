import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from 'src/models/user.class';
import { Firestore, collection, onSnapshot } from '@angular/fire/firestore';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  user: User = new User(); // kann ggf. wieder raus
  allUsers: any = [];
  constructor(public dialog: MatDialog, private firestore: Firestore) {}

  ngOnInit(): void {
    this.readData();
  }

  readData() {
    let changes;
    const collectionRef = collection(this.firestore, 'users');
    onSnapshot(collectionRef, (snapshot) => {
      changes = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      this.allUsers = changes;
        console.log('changes', changes);
    });
  
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }
}
