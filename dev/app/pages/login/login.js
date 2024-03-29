import { LoginHTML } from './login-html'

export class LogIn {
  constructor(app, fb) {
    this.app = app;
    this.fb = fb;
    this.initUI();
    this.submit();
    this.loadEvent();
  }

  initUI(){
    let html = LoginHTML({
      title:this.title
    })
    this.app.innerHTML = html;
  }

  submit() {
    document.querySelector("button[type='submit']").addEventListener('click', event => {
      event.preventDefault();

      let email = document.querySelector("input[type='email']").value;
      let password = document.querySelector("input[type='password']").value;

      if (email <= 0) {
        console.log("il n'y a pas d'email");
        return;
      }
      if (password <= 0) {
        console.log("il n'y a pas de mot de passe");
        return;
      }

      console.log(email, password);
      // new userPage(this.app, email, password);
      ([...document.getElementById('switchForm').classList].includes('create'))
        ? this.fb.createEmailAccount(email, password)
        : this.fb.logInEmailAccount(email, password);
    })
  }
  loadEvent() {
    // switchForm
    document.getElementById('switchForm').addEventListener('click', event=> {
     switch ([...document.getElementById('switchForm').classList].includes('create')) {
       case false:
         document.getElementById('switchForm').classList.toggle('create')
         document.getElementById('switchForm').innerHTML = `
             Si vous possédez un compte,<br>
             <span class="underline">cliquez-ici</span>`
         document.forms[0].querySelector("button[type='submit']").innerHTML = 'Créer un compte'
         break;
       case true:
         document.getElementById('switchForm').classList.toggle('create')
         document.getElementById('switchForm').innerHTML = `
             Si vous ne possédez pas de compte,<br>
             <span class="underline">cliquez-ici</span>`
         document.forms[0].querySelector("button[type='submit']").innerHTML = 'Se connecter'
         break;
       default:
     }
    })
  }
}
