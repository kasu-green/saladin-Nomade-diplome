import { autoCompleteComponent } from '../../components/autocomplete/autocomplete-component'
import { modelFbComponent } from '../../components/firebase/modelFirebase-component'
import { CreateSurveyHTML } from './createsurvey-html'
import { CreateForm } from '../createForm/createform'

export class CreateSurvey {
  constructor(app, fb, user, dateList) {
    this.app = app;
    this.dateList = [];
    this.fbModel = new modelFbComponent(app, fb, user);
    this.autoComplete = new autoCompleteComponent(app);
    //this.datePicker = new datePickerComponent(app);
    this.fb = fb;
    this.user = user;
    this.initUI();
    this.loadEventUI();
  }

  initUI(){
    let html = CreateSurveyHTML()
    this.app.innerHTML = html;
    this.fbModel.getFoodForAutoComplete('boeuf').then (response => {
      debugger;
      this.autoComplete.configure('#searchForm', response, 'beforeend');
    });

  }

  loadEventUI() {
    // Retour en arrière
    document.getElementById('navigate_back').addEventListener('click', e => {
      let btn = e.target.id;
      //debugger;
      if ( btn == 'navigate_back' ) {
        new CreateForm(this.app, this.fb, this.user, this.dateList);
      }
    })

  }


}
