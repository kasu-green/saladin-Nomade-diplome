export class autoCompleteComponent {
  constructor(app, fb, user) {
    this.app = app;
    // this.email = user.email;
    // this.userid = user.uid;
    this.fb = fb;
    this.user = user;
  //  this.initUI();
    //this.loadEventUI();
  //  this.autoComplete();
  }

  configure(selector, data, position){
    this.selector = selector;
    this.position = position;
    this.data = data;
    this.initUI();
    this.autoComplete();
  }

  initUI(){
    this.app.querySelector(this.selector).insertAdjacentHTML(this.position, `
      <div class="input-field col s12">
        <input type="text" id="autocomplete-input" autocomplete="off" class="autocomplete">
        <label for="autocomplete-input">Rechercher</label>
      <div class="input-field col s12">
    `)
  }

  autoComplete() {
    $('input.autocomplete').autocomplete({
      data : this.data,
      limit : 20, // The max amount of results that can be shown at once. Default: Infinity.
      onAutocomplete: function(val) {
        // Callback function when value is autcompleted.
      },
      minLength : 1, // The minimum length of the input for the autocomplete to start. Default: 1.
    });
  }

}
