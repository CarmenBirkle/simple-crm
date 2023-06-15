import { Component, Input } from '@angular/core';
import { User } from 'src/models/user.class';
import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss'],
})
export class DialogEditAddressComponent {
  loading: boolean = false;
  user!: User;
  userId!: string;

  constructor(private firestore: Firestore) {}


  async saveUser() {
    this.loading = true;
    const userDoc = doc(this.firestore, 'users', this.userId);
    updateDoc(userDoc, this.user.toJson()).then(() => {
      this.loading = false;
      // this.dialogRef.close();
    });
  }
}
