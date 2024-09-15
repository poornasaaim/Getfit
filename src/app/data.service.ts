import { Injectable } from '@angular/core';
import { Det } from './det';
import {AngularFirestore} from '@angular/fire/compat/firestore'


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs:AngularFirestore) { }
  addProduct(product:Det){
    product.id = this.afs.createId();
    
    this.afs.collection('/Details/').add(product);
  }

  getAllcarts(){
    return this.afs.collection('/bmi').snapshotChanges();  
  }
  addcart(product:Det){
    this.afs.collection('/details/').add(product);
  }
}
