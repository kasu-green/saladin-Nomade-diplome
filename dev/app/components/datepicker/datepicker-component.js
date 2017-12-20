export class datePickerComponent {
  constructor(app) {
    this.app = app;
  }

  configure(selector, position, callback){
    this.selector = selector;
    this.position = position;
    this.callback = callback;
    this.initUI();
    this.datePicker();
  }

  initUI(){
    this.app.querySelector(this.selector).insertAdjacentHTML(this.position, `
      <div id="datepicker">
        <label>Enquête alimentaire</label>
        <div class="datepicker-box flex just-between align-end">
          <input id="datePicker-start" name="datePicker-start" type="text" class="datepicker" placeholder="Début">
          <input id="datePicker-end" name="datePicker-end" type="text" class="datepicker" placeholder="Fin">
        </div>
      </div>
    `)
  }

  // showDays() {
  //   this.app.querySelector(this.selector).insertAdjacentHTML(this.position, `
  //     <div id="datepicker">
  //       <label>jour</label>
  //       <div class="datepicker-box flex just-between align-end">
  //         <input id="datePicker-start" name="datePicker-start" type="text" class="datepicker" placeholder="Début">
  //         <input id="datePicker-end" name="datePicker-end" type="text" class="datepicker" placeholder="Fin">
  //       </div>
  //     </div>
  //   `)
  // }

  datePicker() {
    let options ={
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 5, // Creates a dropdown of 15 years to control year,
      monthsFull: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
      weekdaysShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
      formatSubmit: 'yyyy-mm-dd',
      clear: 'effacer',
      today: 'aujourd\'hui',
      onClose: this.callback,
      closeOnSelect: true, // Close upon selecting a date,
      hiddenName: true
    };
    $('#datePicker-start').pickadate(options);
    $('#datePicker-end').pickadate(options);
  }

}
