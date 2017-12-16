import { CreateFormHTML } from './createform-html'
import { FirebaseProvider } from '../../providers/firebase/firebase-provider'

export class CreateForm {
  constructor(app, fb,user) {
    this.app = app;
    // this.email = user.email;
    // this.userid = user.uid;
    this.fb = fb;
    this.user = user;
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
      let searchBar = document.getElementById('subjectSearch');
      if (test == true) {
        searchBar.classList.remove('active');
        this.createSubjectNumber();
      } else {
        searchBar.classList.add('active');
        this.searchSubjectNumber();
      }
    })
  }

  createSubjectNumber () {
    console.log('ça marche !');
    // Créer un numéro aléatoire entre 100 000 et 999 999
    let numero = 100000 + parseInt(Math.random()*1000000);

    this.fb.path = 'subjects'
    this.fb.firebaseRead("subjects/"+numero).once('value').then(res=>{
      if( res.val() == null ){
        //Le numero n'existe pas
        this.fb.firebaseSet(numero, {owner : this.user.uid });
      } else {
        this.createSubjectNumber();
      }
    });
  }

  searchSubjectNumber() {
    console.log("c'est nul :( ");
    this.fb.path = 'subjects'

    this.fb.firebaseRead("subjects").once('value').then(res=>{
      console.log(res.val())
    });


  }

}
