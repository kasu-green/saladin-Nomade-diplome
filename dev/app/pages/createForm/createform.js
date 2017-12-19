import { autoCompleteComponent } from '../../components/autocomplete/autocomplete-component'
import { datePickerComponent } from '../../components/datepicker/datepicker-component'
import { modelFbComponent } from '../../components/firebase/modelFirebase-component'
import { CreateFormHTML } from './createform-html'
import { FirebaseProvider } from '../../providers/firebase/firebase-provider'



export class CreateForm {
  constructor(app, fb, user) {
    this.app = app;
    this.fbModel = new modelFbComponent(app, fb, user);
    this.autoComplete = new autoCompleteComponent(app);
    this.datePicker = new datePickerComponent(app);
    this.fb = fb;
    this.user = user;
    this.initUI();
    this.loadEventUI();
  }


  initUI(){
    let html = CreateFormHTML()
    this.app.innerHTML = html;
    this.fbModel.getSubjectsForAutoComplete().then (response => {
      this.autoComplete.configure('div.switch', response, 'afterend');
    });
    this.datePicker.configure('div.switch', 'afterend');
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

    document.querySelectorAll('.picker__holder').addEventListener('click', element => {
      console.log(element.target);
      let debut = document.querySelector('input[name="datePicker-start"]').value;
      let fin = document.querySelector('input[name="datePicker-end"]').value;
      console.log('debut : ' +debut);
      console.log('fin : ' +fin);
    })
  }

  createSubjectNumber () {
      this.fbModel.createSubject();
    //   console.log(snapshot.key);
    //   debugger;
    //   if (numero == snapshot.val().numero) {
    //     console.log("c'est le même");
    //   } else {
    //     this.fb.firebasePush('subjects', {owner : this.user.uid, numero});
    //   }
    // })

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
    this.fb.path = 'subjects'

    this.fb.firebaseRead("subjects").once('value').then(res=>{
      console.log(res.val())
    });

  }

}
