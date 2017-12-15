import { CreateFormHTML } from './createform-html'

export class CreateForm {
  constructor(app, fb) {
    this.app = app;
    // this.email = user.email;
    // this.userid = user.uid;
    this.fb = fb;
    this.initUI();
    // this.loadEventUI();
  //  this.readDatabase();
  //  this.firebaseReadRemoved();
  }

  initUI(){
    let html = CreateFormHTML({
      title:this.title
    })
    this.app.innerHTML = html;
  }

}
