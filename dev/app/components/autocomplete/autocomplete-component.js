export class autoCompleteComponent {
  constructor(app, fb, user) {
    this.app = app;
    // this.email = user.email;
    // this.userid = user.uid;
    this.fb = fb;
    this.user = user;
    this.initUI();
    //this.loadEventUI();
    this.autoComplete();
  }

  initUI(){
    this.searchSubjectNumberHTML();
  }

  searchSubjectNumberHTML() {
    this.app.querySelector('div.switch').insertAdjacentHTML('afterend', `
      <div class="input-field col s12">
        <input type="text" id="autocomplete-input" class="autocomplete">
        <label for="autocomplete-input">Rechercher</label>
      <div class="input-field col s12">
    `)
  }

  autoComplete() {
    this.fb.firebaseRead("subjects").once('value').then(res=>{
      let result = res.val();
      let auto = {};
      for ( let key in result) {
        auto[key] = null;
      }
      $('input.autocomplete').autocomplete({
        data : auto,
        limit : 20, // The max amount of results that can be shown at once. Default: Infinity.
        onAutocomplete: function(val) {
          // Callback function when value is autcompleted.
        },
        minLength : 1, // The minimum length of the input for the autocomplete to start. Default: 1.
      });
    });
  }
}
