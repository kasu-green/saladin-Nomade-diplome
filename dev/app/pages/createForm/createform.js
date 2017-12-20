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
    this.datePicker.configure('div.switch', 'afterend', this.datePickerCallback);
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

  datePickerCallback(e,b,c){
    let debut = document.querySelector('input[name="datePicker-start"]').value;
    let fin = document.querySelector('input[name="datePicker-end"]').value;
    let dateDebut  = moment(debut, "YYYY-MM-DD");
    let dateFin = moment(fin, "YYYY-MM-DD");
    let numdays = dateFin.diff(dateDebut, "days");

    console.log('debut' +debut,'fin' + fin, 'date debut' +dateDebut, 'Date Fin' +dateFin);

    // if ( numdays ) {

    let dateList = new Array();

    for(let i = 0; i < numdays+1; i++){
      let newDate = moment(dateDebut,'YYYY-MM-DD').add(i, 'days').format("ddd D MMM YY");
      dateList.push (newDate);
    }
    console.log(dateList);



  }

  createSubjectNumber () {
      this.fbModel.createSubject();
  }

  searchSubjectNumber() {
    this.fb.path = 'subjects'

    this.fb.firebaseRead("subjects").once('value').then(res=>{
      console.log(res.val())
    });

  }

}
