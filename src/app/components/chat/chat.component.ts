import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [AngularFireAuth,AngularFireDatabase],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit {

  authState: Observable<any>;
  newMessage: string = '';
  messages: Observable<any[]>;

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase
  ) {
    this.authState = this.afAuth.authState;
  }

  ngOnInit(): void {
    this.messages = this.db.list('messages').valueChanges();
  }

  async sendMessage() {
    const user = await this.afAuth.currentUser;
    if (user) {
      const message = {
        username: user.displayName,
        text: this.newMessage
      };
      this.db.list('messages').push(message);
      this.newMessage = '';
    }
  }

}


