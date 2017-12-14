export class LogIn {
  constructor(app, fb) {
    this.app = app;
    this.fb = fb;
    this.initUI();
    this.submit();
    this.loadEvent();
  }

  initUI() {
    this.app.innerHTML = `
    <header>
      <h1>Hello World!!!!!!</h1>
    </header>

    <form id="loginForm">
      <input class="email" type="email" placeholder="email">
      <input class="password" type="password" placeholder="password">
      <button class="submit" type="submit">Log In</button>
      <p id="switchForm">Click here to create new account</p>
    </form>
    `
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
     console.log([...document.getElementById('switchForm').classList].includes('create'))
     switch ([...document.getElementById('switchForm').classList].includes('create')) {
       case false:
         document.getElementById('switchForm').classList.toggle('create')
         document.getElementById('switchForm').innerHTML = 'Click here to login with existing account'
         document.forms[0].querySelector("button[type='submit']").innerHTML = 'Create an account'
         break;
       case true:
         document.getElementById('switchForm').classList.toggle('create')
         document.getElementById('switchForm').innerHTML = 'Click here to create new account'
         document.forms[0].querySelector("button[type='submit']").innerHTML = 'Log In'
         break;
       default:
     }
    })
  }
}
