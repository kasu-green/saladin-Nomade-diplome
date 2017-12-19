export class datePickerComponent {
  constructor(app) {
    this.app = app;
  }

  configure(selector, position){
    this.selector = selector;
    this.position = position;
    this.initUI();
    this.datePicker();
  }

  initUI(){
    this.app.querySelector(this.selector).insertAdjacentHTML(this.position, `
      <div class="flex just-between align-end">
        <div class="datepicker-start">
          <label id="datePicker-start">Enquête alimentaire</label>
          <input id="datePicker-start" type="text" class="datepicker" placeholder="Début">
        </div>
        <input id="datePicker-end" type="text" class="datepicker" placeholder="Fin">
      </div>
    `)
  }

  datePicker() {
    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15, // Creates a dropdown of 15 years to control year,
      today: 'Today',
      clear: 'Clear',
      close: 'Ok',
      closeOnSelect: false // Close upon selecting a date,
    });
  }

}
