export class autoCompleteComponent {
  constructor(app,selector,position) {
    this.app = app;
    this.selector = selector;
    this.data = {};
    this.position= position;
    this.initUI();
    this.autoComplete();
  }

  configure(data){
    this.data = data;
    this.autoComplete();
  }

  initUI(){
    this.app.querySelector(this.selector).insertAdjacentHTML(this.position, `
      <div id="autoComplete" class="input-field col s12">
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
