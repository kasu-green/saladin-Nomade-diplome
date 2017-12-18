import { FirebaseProvider } from '../../providers/firebase/firebase-provider'


export class modelFbComponent{
  constructor (app, fb, user){
    this.app = app;
    this.fb = fb;
    this.user = user;
  }

  // retourne un nouveau numero de patient
  createSubject(){
    // Créer un numéro aléatoire entre 100 000 et 999 999
    let numero = 100000 + parseInt(Math.random()*1000000);

    this.fb.firebaseRead('subjects')
           .orderByChild("numero")
           .equalTo(numero)
           .once("value", snapshot => {
                let found = false;
                snapshot.forEach( s =>{
                    found = true;
                });

                if ( found ){
                  this.createSubjectNumber();
                } else {
                  this.fb.firebasePush('subjects', {owner : this.user.uid, numero});
                }
            });
  }

  findSubject(numero){
  }

}
