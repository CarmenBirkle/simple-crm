import { Component } from '@angular/core';
import { User } from 'src/models/user.class';
import { Firestore } from '@angular/fire/firestore';
import { doc, updateDoc } from 'firebase/firestore';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss'],
})
export class DialogEditUserComponent {
  loading: boolean = false;
  user!: User;
  userId!: string;
  birthDate!: Date;

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
