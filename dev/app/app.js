// Création des classes
// import { firebaseProvider } from './providers/firebase/firebase-provider';
import { LogIn } from './pages/login/login';
// import { userPage } from './pages/users/userpage';

class myApp {
  constructor() {
    this.app = document.querySelector('myApp');
    //this.fb = new FirebaseProvider();
    this.start();
  }

  start() {
    //detect if user is connected...
    // this.fb.auth.onAuthStateChanged( user => {
    //   // if connected => new UserPage(this.app)
    //   if (user) {
    //     new userPage(this.app, this.fb, user);
    //     // alert ('TODO')
    //   }
    //   // if NOT connected => new HomePage(this.app)
    //   else {
    //     new HomePage(this.app, this.fb);
    //   }
    // })

  }
}


// Afficher les classes
new myApp();

//new HomePage()
