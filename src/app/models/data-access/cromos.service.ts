import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Cromo } from '../Cromo';
import { addDoc } from 'firebase/firestore';
import { CromoInterface } from '../CromoInterface';

@Injectable({
  providedIn: 'root',
})
export class CromosService {
  private _firestore = inject(Firestore);
  private _collection = collection(this._firestore, 'cromos');

  getCromos() {
    return collectionData(this._collection) as Observable<Cromo[]>;
  }

  crearCromos(cromo: CromoInterface) {
    return addDoc(this._collection, cromo);
  }
}
