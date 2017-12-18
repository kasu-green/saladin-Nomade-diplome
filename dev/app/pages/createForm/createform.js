import { autoCompleteComponent } from '../../components/autocomplete/autocomplete-component'
import { CreateFormHTML } from './createform-html'
import { FirebaseProvider } from '../../providers/firebase/firebase-provider'
import { modelFbComponent } from '../../components/firebase/modelFirebase-component'


export class CreateForm {
  constructor(app, fb, user) {
    this.app = app;
    // this.email = user.email;
    // this.userid = user.uid;
    this.fb = fb;
    this.user = user;
    this.initUI();
    this.loadEventUI();
    this.model = new modelFbComponent(app, fb, user);
    this.autoComplete = new autoCompleteComponent(app, fb, user);

    this.reloadData();
  }

  reloadData(){
    this.fb.firebaseRead("subjects").once('value').then(res=>{
      let result = res.val();
      let auto = {};
      for ( let key in result) {
        auto[key] = null;
      }
      this.autoComplete.configure('div.switch', auto, 'afterend');
    });
  }

  initUI(){
    let html = CreateFormHTML()
    this.app.innerHTML = html;
  }

  loadEventUI() {
    // Switch(checkbox) pour ajouter un nouveau sujet
    document.getElementById('newSubject').addEventListener('change', e=> {
      let test = e.target.checked;
      let searchBar = document.getElementById('autocomplete-input');
      if (test == true) {
        this.createSubjectNumber();
      } else {
        this.searchSubjectNumber();
      }
    })
  }

  createSubjectNumber () {
      this.model.createSubject();

    //   console.log(snapshot.key);
    //   debugger;
    //   if (numero == snapshot.val().numero) {
    //     console.log("c'est le même");
    //   } else {
    //     this.fb.firebasePush('subjects', {owner : this.user.uid, numero});
    //   }
    // })

    //

    // this.fb.path = 'subjects'
    // this.fb.firebaseRead('subjects/'+numero).once('value').then(res=>{
    //
    //   console.log(res.val());
    //   if( res.val() == null ){
    //     //Le numero n'existe pas
    //     this.fb.firebasePush(this.key, { owner : this.user.uid, numero });
    //   } else {
    //
    //     this.createSubjectNumber();
    //     debugger;
    //   }
    // });
  }

  searchSubjectNumber() {
    console.log("c'est nul :( ");
    this.fb.path = 'subjects'

    this.fb.firebaseRead("subjects").once('value').then(res=>{
      console.log(res.val())
    });



  }

}
