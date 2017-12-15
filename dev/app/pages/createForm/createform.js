import { CreateFormHTML } from './createform-html'
import { FirebaseProvider } from '../../providers/firebase/firebase-provider'

export class CreateForm {
  constructor(app, fb) {
    this.app = app;
    this.email = user.email;
    this.userid = user.uid;
    this.fb = fb;
    this.initUI();
    this.loadEventUI();
  //  this.readDatabase();
  //  this.firebaseReadRemoved();
  }

  initUI(){
    let html = CreateFormHTML({
      title:this.title
    })
    this.app.innerHTML = html;
  }

  loadEventUI() {
    document.getElementById('newSubject').addEventListener('change', e=> {
      let test = e.target.checked;
      if (test == true) {
        this.createSubjectNumber();
      } else {
        this.searchSubjectNumber();
      }
    })
  }

  createSubjectNumber () {
    console.log('ça marche !');
    // Créer un numéro aléatoire entre 100 000 et 999 999
    let numero = 100000 + parseInt(Math.random()*1000000);
    console.log(numero);

    this.fb.path = 'subjects'
    this.fb.firebasePush(this.useruid, {
      numéro
    })



  }

  searchSubjectNumber() {
    console.log("c'est nul :( ");
  }

}
