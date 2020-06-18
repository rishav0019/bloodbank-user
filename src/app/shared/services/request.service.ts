import { Injectable } from "@angular/core";
import {
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  AngularFirestore,
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class RequestService {
  private donerCollection: AngularFirestoreCollection<any>;
  doctorDocument: AngularFirestoreDocument<any>;
  doners: Observable<any[]>;
  doner: Observable<any>;

  constructor(private afs: AngularFirestore) {
    this.donerCollection = this.afs.collection("bloodRequests");
  }

  getRequests(): Observable<any[]> {
    var catogeryRef = this.afs.collection<any>("bloodRequests");

    return (this.doners = catogeryRef.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as any;
          data.id = a.payload.doc.id;
          return data;
        })
      )
    ));
  }
}
