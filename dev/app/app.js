// Création des classes
import { FirebaseProvider } from './providers/firebase/firebase-provider';
import { LogIn } from './pages/login/login';
import { userPage } from './pages/users/userpage';

class myApp {
  constructor() {
    this.app = document.querySelector('myApp');
    this.fb = new FirebaseProvider();
    this.start();
  }

  start() {
    // detect if user is connected...
    this.fb.auth.onAuthStateChanged(user=> {
      // if connected => new UserPage(this.app)
      if (user) { // user = professionel
        new userPage(this.app, this.fb, user);
      }
      // if (user == personnel) {}
      // if NOT connected => new HomePage(this.app)
      else {
        new LogIn(this.app, this.fb);
      }
    })

  }
}

new myApp();
