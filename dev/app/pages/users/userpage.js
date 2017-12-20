import { autoCompleteComponent } from '../../components/autocomplete/autocomplete-component'
import { UserPageHTML } from './userpage-html'
import { CreateForm } from '../createForm/createform'
import { modelFbComponent } from '../../components/firebase/modelFirebase-component'

export class userPage {
  constructor(app, fb, user) {
    this.autoComplete = new autoCompleteComponent(app);
    this.fbModel = new modelFbComponent(app, fb, user);
    this.app = app;
    this.user = user;
    this.email = user.email;
    this.userid = user.uid;
    this.fb = fb;
    this.initUI();
    this.loadEventUI();
  }

  initUI(){
    let html = UserPageHTML({
      title:this.title
    })
    this.app.innerHTML = html;
    this.fbModel.getSubjectsForAutoComplete().then (response => {
      this.autoComplete.configure('#userSearchForm', response, 'afterbegin');
    });
    // Lire la liste des sujets et l'afficher
    this.fb.firebaseRead('subjects').on('value', snapshot => {
      let element = document.querySelector('ul#listSubjects');

      // si on n'est pas dans la page, l'event reste bindé, du coup on ignore simplement si on ne trouve pas le Node
      if(element == null){
        return;
      }
      element.innerHTML = '';
      // then add all new elements to UL
      snapshot.forEach(item=> {
        element.innerHTML += `
          <li  id="${item.key}" class="collection-item">
            <div>
              ${item.val().numero}
              <a href="#" class="secondary-content">
                <i class="material-icons">delete</i>
                <i class="material-icons">navigate_next</i>
              </a>
            </div>
          </li>
        `
      })
    })
  }

  loadEventUI(){
    // event logout
    document.getElementById('logout').addEventListener('click', e=> {
      this.fb.auth.signOut()
    })
    // Ajout d'un nouveau patient
    document.getElementById('addSubject').addEventListener('click', _=> {
      new CreateForm(this.app, this.fb, this.user);
    })

    document.forms[0].addEventListener('submit', e => {
      e.preventDefault();
      let title = document.getElementById('title').value;
      let link = document.getElementById('link').value;
      this.fb.path = 'userLinks';
      this.fb.firebasePush(this.userid, {
        title,
        link
      });
      // On vide les champs de saisie du formulaire
      document.getElementById('title').value = '';
      document.getElementById('link').value = '';
    })
  }
    // Effacer un élément de la liste
    // document.getElementById('linksList').addEventListener('click', e => {
    //   if (e.target.nodeName != 'BUTTON') {
    //     return
    //   }
    //   if (e.target.className == 'del') {
    //     let li = event.target.closest('li');
    //     console.log(li);
    //     firebaseReadRemoved(li);
    //   } else {
    //     //bouton save/edit
    //     console.log(e.target);
    //   }
    //
    //   //this.firebaseReadRemoved();
    // })
  // }

  // databaseInnerHTML(snapshot) {
  //   let ul = document.querySelector('ul#linksList')
  //   // then add all new elements to UL
  //   ul.innerHTML += `
  //     <li id="${snapshot.key}">
  //       <input type="text" value="${snapshot.val().title}">
  //       <input type="text" value="${snapshot.val().link}">
  //       <button class="toogleEdit">edit</button>
  //       <button class="del">x</button>
  //     </li>
  //   `
  // }

  // readDatabase(){
  //  this.fb.firebaseRead('userLinks')
  //         .child(this.userid)
  //         .on('child_added', snapshot =>{
  //           this.databaseInnerHTML(snapshot);
  //         })
  // }

  // firebaseReadRemoved(li){
  //   this.fb.firebaseRead('userLinks')
  //         .child(this.userid)
  //         .set(null);
  // }
}
