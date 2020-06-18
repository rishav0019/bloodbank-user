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
export class DonerService {
  private donerCollection: AngularFirestoreCollection<any>;
  doctorDocument: AngularFirestoreDocument<any>;
  doners: Observable<any[]>;
  doner: Observable<any>;

  constructor(private afs: AngularFirestore) {
    this.donerCollection = this.afs.collection("users");
  }

  getDoner(): Observable<any[]> {
    var catogeryRef = this.afs.collection<any>("users");

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
  // getDoctorById(id: string): Observable<Doctor> {
  //   var doctorDocument: AngularFirestoreDocument<Doctor>;
  //   doctorDocument = this.afs.doc(`doctors/${id}`);
  //   return doctorDocument.valueChanges();
  // }
  // setDoctor(doctor: Doctor) {
  //   if (!doctor.id) {
  //     doctor.id = this.afs.createId();
  //   }
  //   doctor.creationDate = new Date();

  //   return this.doctorCollection.doc(doctor.id).set(doctor, { merge: true });
  // }
}
