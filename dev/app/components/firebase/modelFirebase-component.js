import { FirebaseProvider } from '../../providers/firebase/firebase-provider'
//import { autoCompleteComponent } from '../autocomplete/autocomplete-component'

export class modelFbComponent{
  constructor (app, fb, user){
    this.app = app;
    this.fb = fb;
    this.user = user;
    //this.autoComplete = new autoCompleteComponent(app, fb, user);
  }

  // liste des sujets
  getSubjectRef(){
    return this.fb.firebaseRead('subjects');
  }
  // Chercher les sujets par numéro
  findSubject(numero){
    return this.getSubjectRef()
               .orderByChild("numero")
               .equalTo(numero);
  }

  // retourne un nouveau numero de patient
  createSubject(){
    // Créer un numéro aléatoire entre 100 000 et 999 999
    let numero = 100000 + parseInt(Math.random()*100000);

    this.findSubject(numero)
        .once("value", snapshot => {
            let found = false;
            snapshot.forEach( s =>{
                found = true;
            });

            if ( found ){
              this.createSubjectNumber();
            } else {
              this.fb.firebasePush(
                'subjects',
                {
                  owner : this.user.uid,
                  numero
                });
            }
        });
  }

  // Pour l'autoComplete
  findAllSubjects() {
     return this.fb.firebaseRead("subjects").once('value');
  }

  // retourne une liste standardisée pour materialize autocomplete
  getSubjectsForAutoComplete(){
    return this.findAllSubjects().then (res => {
        let auto = {};
        let result = res.val();

        for ( let key in result) {
          auto[result[key].numero] = null;
        }
        return auto;
    });


  }

}
