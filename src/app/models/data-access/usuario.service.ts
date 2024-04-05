import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Usuario } from '../Usuario';

@Injectable({
  providedIn: 'root',
})

export class UserService {
  private _firestore = inject(Firestore);
  private _collection = collection(this._firestore, 'cromos');

  getUsuarios() {
    return collectionData(this._collection) as Observable<Usuario[]>;
  }
}
