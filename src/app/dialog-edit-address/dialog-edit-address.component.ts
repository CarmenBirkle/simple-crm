import { Component, Input } from '@angular/core';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss'],
})
export class DialogEditAddressComponent {
  loading: boolean = false;
  user!: User;
  userId!: string;

  saveUser() {}
}
