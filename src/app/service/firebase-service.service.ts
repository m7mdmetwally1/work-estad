import { Injectable, inject } from '@angular/core';

import { environment } from '../../environments/environments';
import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  CollectionReference,
  DocumentReference,
} from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseServiceService {
  constructor() {}

  private firestore: Firestore = inject(Firestore);
  users$: Observable<any[]> = of([]);

  usersCollection: CollectionReference = collection(this.firestore, 'users');

  addUserProfile(username: string, number: string) {
    if (!username) return;

    addDoc(this.usersCollection, { username, number }).then(
      (documentReference: DocumentReference) => {}
    );
  }

  readingData() {
    return (this.users$ = collectionData(
      this.usersCollection
    ) as Observable<any>);
  }
}
