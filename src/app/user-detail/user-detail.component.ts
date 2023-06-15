import { Component, OnDestroy, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { doc, onSnapshot } from 'firebase/firestore';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit, OnDestroy {
  userId: string = '';
  user: User = new User();
  private unsubscribe!: () => void;

  constructor(
    private route: ActivatedRoute,
    private firestore: Firestore,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => (this.userId = params['id']));
    this.getUser();
    console.log(this.userId);
  }

  getUser() {
    const docRef = doc(this.firestore, 'users', this.userId);
    console.log(docRef);
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      this.user = new User(docSnap.data());
      //TODO entfernen
       console.log(this.user);
    });
   
  }

  ngOnDestroy() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }
}
