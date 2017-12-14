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
    <header class="flex align-center">
      <img src="../src/img/salad.png" alt="logo Saladin">
      <h2>Se Connecter</h2>
    </header>

    <section class="cover flex flex-column align-center just-center">

      <h1>Bienvenu sur Saladin !</h1>
      <form id="loginForm" class="flex flex-column">
        <input class="email" type="email" placeholder="email">
        <input class="password" type="password" placeholder="password">
        <button class="submit" type="submit">Se connecter</button>
        <p id="switchForm">
          Si vous ne possédez pas de compte,<br>
          <span class="underline">cliquez-ici</span>
        </p>
      </form>

    </section>
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
