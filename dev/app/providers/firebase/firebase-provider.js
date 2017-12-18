import * as firebase from "firebase";

import { CONFIG } from './config'

export class FirebaseProvider {
  constructor() {
    this.path = ''
    // init fb
    firebase.initializeApp(CONFIG);
    // init fb.auth()
    this.auth = firebase.auth();
    this.database = firebase.database();
    //console.log(firebase.database())
  }

  // Auth() methode
  createEmailAccount(email, password){
    this.auth
            .createUserWithEmailAndPassword(email, password)
            .then(response => console.log(response))
            .catch((error)=> {
                // Handle Errors here.
                let errorCode = error.code;
                let errorMessage = error.message;
                alert(errorMessage)
            });
  }
  logInEmailAccount(email, password){
    this.auth
            .signInWithEmailAndPassword(email, password)
            .then(response => console.log(response))
            .catch((error)=> {
                // Handle Errors here.
                let errorCode = error.code;
                let errorMessage = error.message;
                alert(errorMessage)
            });
  }

  // database() Methodes
  firebaseRead(path){
    return this.database.ref(path)
  }

  firebasePush(path, datas){
    this.database.ref(path)
            //.child(uid)
            .push(datas)
  }

//   // add to FB collection with .push()
// firebasePush(dataValue){
//   database.ref('list')
//           .push({
//             name: dataValue
//           })
// }

  firebaseUpdate(key,datas){
    this.database.ref(this.path)
            .child(key)
            .update(datas)
  }

  firebaseSet(key,datas){
    this.database.ref(this.path)
            .child(key)
            .set(datas)
  }


}
