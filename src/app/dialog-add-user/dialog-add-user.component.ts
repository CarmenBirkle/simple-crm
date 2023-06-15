
import { User } from 'src/models/user.class';

import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import {
  Firestore,
  collection,
  collectionData,
  setDoc,
  doc,
  getDoc,
  getDocs,
} from '@angular/fire/firestore';
import { addDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss'],
})
export class DialogAddUserComponent {
  user: User = new User();
  birthDate: Date = new Date();
  loading: boolean = false;

  constructor(private firestore: Firestore) {}

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log('saveUser');
    console.log(this.user);
    this.loading=true;
 

    const usersCollection = collection(this.firestore, 'users');
    addDoc(usersCollection, this.user.toJson()).then(async (result) => {
      const docSnap = await getDoc(result);
      this.loading = false;
    });
  }
}
