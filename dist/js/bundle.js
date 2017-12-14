(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Création des classes
// import { firebaseProvider } from './providers/firebase/firebase-provider';


var _login = require('./pages/login/login');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import { userPage } from './pages/users/userpage';

var myApp = function () {
  function myApp() {
    _classCallCheck(this, myApp);

    this.app = document.querySelector('myApp');
    //this.fb = new FirebaseProvider();
    this.start();
  }

  _createClass(myApp, [{
    key: 'start',
    value: function start() {
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
  }]);

  return myApp;
}();

// Afficher les classes


new myApp();

//new HomePage()

},{"./pages/login/login":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HomePage = exports.HomePage = function () {
  function HomePage(app, fb) {
    _classCallCheck(this, HomePage);

    this.app = app;
    this.fb = fb;
    this.initUI();
    this.submit();
    this.loadEvent();
  }

  _createClass(HomePage, [{
    key: "initUI",
    value: function initUI() {
      this.app.innerHTML = "\n    <header>\n      <h1>Hello World!!!!!!</h1>\n    </header>\n\n    <form id=\"loginForm\">\n      <input class=\"email\" type=\"email\" placeholder=\"email\">\n      <input class=\"password\" type=\"password\" placeholder=\"password\">\n      <button class=\"submit\" type=\"submit\">Log In</button>\n      <p id=\"switchForm\">Click here to create new account</p>\n    </form>\n    ";
    }
  }, {
    key: "submit",
    value: function submit() {
      var _this = this;

      document.querySelector("button[type='submit']").addEventListener('click', function (event) {
        event.preventDefault();

        var email = document.querySelector("input[type='email']").value;
        var password = document.querySelector("input[type='password']").value;

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
        [].concat(_toConsumableArray(document.getElementById('switchForm').classList)).includes('create') ? _this.fb.createEmailAccount(email, password) : _this.fb.logInEmailAccount(email, password);
      });
    }
  }, {
    key: "loadEvent",
    value: function loadEvent() {
      // switchForm
      document.getElementById('switchForm').addEventListener('click', function (event) {
        console.log([].concat(_toConsumableArray(document.getElementById('switchForm').classList)).includes('create'));
        switch ([].concat(_toConsumableArray(document.getElementById('switchForm').classList)).includes('create')) {
          case false:
            document.getElementById('switchForm').classList.toggle('create');
            document.getElementById('switchForm').innerHTML = 'Click here to login with existing account';
            document.forms[0].querySelector("button[type='submit']").innerHTML = 'Create an account';
            break;
          case true:
            document.getElementById('switchForm').classList.toggle('create');
            document.getElementById('switchForm').innerHTML = 'Click here to create new account';
            document.forms[0].querySelector("button[type='submit']").innerHTML = 'Log In';
            break;
          default:
        }
      });
    }
  }]);

  return HomePage;
}();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXZcXGFwcFxcYXBwLmpzIiwiZGV2XFxhcHBcXHBhZ2VzXFxsb2dpblxcbG9naW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztxakJDQUE7QUFDQTs7O0FBQ0E7Ozs7QUFDQTs7SUFFTSxLO0FBQ0osbUJBQWM7QUFBQTs7QUFDWixTQUFLLEdBQUwsR0FBVyxTQUFTLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBWDtBQUNBO0FBQ0EsU0FBSyxLQUFMO0FBQ0Q7Ozs7NEJBRU87QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUQ7Ozs7OztBQUlIOzs7QUFDQSxJQUFJLEtBQUo7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztJQ2pDYSxRLFdBQUEsUTtBQUNYLG9CQUFZLEdBQVosRUFBaUIsRUFBakIsRUFBcUI7QUFBQTs7QUFDbkIsU0FBSyxHQUFMLEdBQVcsR0FBWDtBQUNBLFNBQUssRUFBTCxHQUFVLEVBQVY7QUFDQSxTQUFLLE1BQUw7QUFDQSxTQUFLLE1BQUw7QUFDQSxTQUFLLFNBQUw7QUFDRDs7Ozs2QkFFUTtBQUNQLFdBQUssR0FBTCxDQUFTLFNBQVQ7QUFZRDs7OzZCQUNRO0FBQUE7O0FBQ1AsZUFBUyxhQUFULENBQXVCLHVCQUF2QixFQUFnRCxnQkFBaEQsQ0FBaUUsT0FBakUsRUFBMEUsaUJBQVM7QUFDakYsY0FBTSxjQUFOOztBQUVBLFlBQUksUUFBUSxTQUFTLGFBQVQsQ0FBdUIscUJBQXZCLEVBQThDLEtBQTFEO0FBQ0EsWUFBSSxXQUFXLFNBQVMsYUFBVCxDQUF1Qix3QkFBdkIsRUFBaUQsS0FBaEU7O0FBRUEsWUFBSSxTQUFTLENBQWIsRUFBZ0I7QUFDZCxrQkFBUSxHQUFSLENBQVksc0JBQVo7QUFDQTtBQUNEO0FBQ0QsWUFBSSxZQUFZLENBQWhCLEVBQW1CO0FBQ2pCLGtCQUFRLEdBQVIsQ0FBWSw4QkFBWjtBQUNBO0FBQ0Q7O0FBRUQsZ0JBQVEsR0FBUixDQUFZLEtBQVosRUFBbUIsUUFBbkI7QUFDQTtBQUNDLHFDQUFJLFNBQVMsY0FBVCxDQUF3QixZQUF4QixFQUFzQyxTQUExQyxHQUFxRCxRQUFyRCxDQUE4RCxRQUE5RCxDQUFELEdBQ0ksTUFBSyxFQUFMLENBQVEsa0JBQVIsQ0FBMkIsS0FBM0IsRUFBa0MsUUFBbEMsQ0FESixHQUVJLE1BQUssRUFBTCxDQUFRLGlCQUFSLENBQTBCLEtBQTFCLEVBQWlDLFFBQWpDLENBRko7QUFHRCxPQXBCRDtBQXFCRDs7O2dDQUNXO0FBQ1Y7QUFDQSxlQUFTLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0MsZ0JBQXRDLENBQXVELE9BQXZELEVBQWdFLGlCQUFRO0FBQ3ZFLGdCQUFRLEdBQVIsQ0FBWSw2QkFBSSxTQUFTLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0MsU0FBMUMsR0FBcUQsUUFBckQsQ0FBOEQsUUFBOUQsQ0FBWjtBQUNBLGdCQUFRLDZCQUFJLFNBQVMsY0FBVCxDQUF3QixZQUF4QixFQUFzQyxTQUExQyxHQUFxRCxRQUFyRCxDQUE4RCxRQUE5RCxDQUFSO0FBQ0UsZUFBSyxLQUFMO0FBQ0UscUJBQVMsY0FBVCxDQUF3QixZQUF4QixFQUFzQyxTQUF0QyxDQUFnRCxNQUFoRCxDQUF1RCxRQUF2RDtBQUNBLHFCQUFTLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0MsU0FBdEMsR0FBa0QsMkNBQWxEO0FBQ0EscUJBQVMsS0FBVCxDQUFlLENBQWYsRUFBa0IsYUFBbEIsQ0FBZ0MsdUJBQWhDLEVBQXlELFNBQXpELEdBQXFFLG1CQUFyRTtBQUNBO0FBQ0YsZUFBSyxJQUFMO0FBQ0UscUJBQVMsY0FBVCxDQUF3QixZQUF4QixFQUFzQyxTQUF0QyxDQUFnRCxNQUFoRCxDQUF1RCxRQUF2RDtBQUNBLHFCQUFTLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0MsU0FBdEMsR0FBa0Qsa0NBQWxEO0FBQ0EscUJBQVMsS0FBVCxDQUFlLENBQWYsRUFBa0IsYUFBbEIsQ0FBZ0MsdUJBQWhDLEVBQXlELFNBQXpELEdBQXFFLFFBQXJFO0FBQ0E7QUFDRjtBQVhGO0FBYUEsT0FmRDtBQWdCRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBDcsOpYXRpb24gZGVzIGNsYXNzZXNcbi8vIGltcG9ydCB7IGZpcmViYXNlUHJvdmlkZXIgfSBmcm9tICcuL3Byb3ZpZGVycy9maXJlYmFzZS9maXJlYmFzZS1wcm92aWRlcic7XG5pbXBvcnQgeyBMb2dJbiB9IGZyb20gJy4vcGFnZXMvbG9naW4vbG9naW4nO1xuLy8gaW1wb3J0IHsgdXNlclBhZ2UgfSBmcm9tICcuL3BhZ2VzL3VzZXJzL3VzZXJwYWdlJztcblxuY2xhc3MgbXlBcHAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmFwcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ215QXBwJyk7XG4gICAgLy90aGlzLmZiID0gbmV3IEZpcmViYXNlUHJvdmlkZXIoKTtcbiAgICB0aGlzLnN0YXJ0KCk7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICAvL2RldGVjdCBpZiB1c2VyIGlzIGNvbm5lY3RlZC4uLlxuICAgIC8vIHRoaXMuZmIuYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQoIHVzZXIgPT4ge1xuICAgIC8vICAgLy8gaWYgY29ubmVjdGVkID0+IG5ldyBVc2VyUGFnZSh0aGlzLmFwcClcbiAgICAvLyAgIGlmICh1c2VyKSB7XG4gICAgLy8gICAgIG5ldyB1c2VyUGFnZSh0aGlzLmFwcCwgdGhpcy5mYiwgdXNlcik7XG4gICAgLy8gICAgIC8vIGFsZXJ0ICgnVE9ETycpXG4gICAgLy8gICB9XG4gICAgLy8gICAvLyBpZiBOT1QgY29ubmVjdGVkID0+IG5ldyBIb21lUGFnZSh0aGlzLmFwcClcbiAgICAvLyAgIGVsc2Uge1xuICAgIC8vICAgICBuZXcgSG9tZVBhZ2UodGhpcy5hcHAsIHRoaXMuZmIpO1xuICAgIC8vICAgfVxuICAgIC8vIH0pXG5cbiAgfVxufVxuXG5cbi8vIEFmZmljaGVyIGxlcyBjbGFzc2VzXG5uZXcgbXlBcHAoKTtcblxuLy9uZXcgSG9tZVBhZ2UoKVxuIiwiZXhwb3J0IGNsYXNzIEhvbWVQYWdlIHtcbiAgY29uc3RydWN0b3IoYXBwLCBmYikge1xuICAgIHRoaXMuYXBwID0gYXBwO1xuICAgIHRoaXMuZmIgPSBmYjtcbiAgICB0aGlzLmluaXRVSSgpO1xuICAgIHRoaXMuc3VibWl0KCk7XG4gICAgdGhpcy5sb2FkRXZlbnQoKTtcbiAgfVxuXG4gIGluaXRVSSgpIHtcbiAgICB0aGlzLmFwcC5pbm5lckhUTUwgPSBgXG4gICAgPGhlYWRlcj5cbiAgICAgIDxoMT5IZWxsbyBXb3JsZCEhISEhITwvaDE+XG4gICAgPC9oZWFkZXI+XG5cbiAgICA8Zm9ybSBpZD1cImxvZ2luRm9ybVwiPlxuICAgICAgPGlucHV0IGNsYXNzPVwiZW1haWxcIiB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cImVtYWlsXCI+XG4gICAgICA8aW5wdXQgY2xhc3M9XCJwYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJzdWJtaXRcIiB0eXBlPVwic3VibWl0XCI+TG9nIEluPC9idXR0b24+XG4gICAgICA8cCBpZD1cInN3aXRjaEZvcm1cIj5DbGljayBoZXJlIHRvIGNyZWF0ZSBuZXcgYWNjb3VudDwvcD5cbiAgICA8L2Zvcm0+XG4gICAgYFxuICB9XG4gIHN1Ym1pdCgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uW3R5cGU9J3N1Ym1pdCddXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgbGV0IGVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W3R5cGU9J2VtYWlsJ11cIikudmFsdWU7XG4gICAgICBsZXQgcGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbdHlwZT0ncGFzc3dvcmQnXVwiKS52YWx1ZTtcblxuICAgICAgaWYgKGVtYWlsIDw9IDApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJpbCBuJ3kgYSBwYXMgZCdlbWFpbFwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHBhc3N3b3JkIDw9IDApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJpbCBuJ3kgYSBwYXMgZGUgbW90IGRlIHBhc3NlXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGUubG9nKGVtYWlsLCBwYXNzd29yZCk7XG4gICAgICAvLyBuZXcgdXNlclBhZ2UodGhpcy5hcHAsIGVtYWlsLCBwYXNzd29yZCk7XG4gICAgICAoWy4uLmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzd2l0Y2hGb3JtJykuY2xhc3NMaXN0XS5pbmNsdWRlcygnY3JlYXRlJykpXG4gICAgICAgID8gdGhpcy5mYi5jcmVhdGVFbWFpbEFjY291bnQoZW1haWwsIHBhc3N3b3JkKVxuICAgICAgICA6IHRoaXMuZmIubG9nSW5FbWFpbEFjY291bnQoZW1haWwsIHBhc3N3b3JkKTtcbiAgICB9KVxuICB9XG4gIGxvYWRFdmVudCgpIHtcbiAgICAvLyBzd2l0Y2hGb3JtXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N3aXRjaEZvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50PT4ge1xuICAgICBjb25zb2xlLmxvZyhbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N3aXRjaEZvcm0nKS5jbGFzc0xpc3RdLmluY2x1ZGVzKCdjcmVhdGUnKSlcbiAgICAgc3dpdGNoIChbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N3aXRjaEZvcm0nKS5jbGFzc0xpc3RdLmluY2x1ZGVzKCdjcmVhdGUnKSkge1xuICAgICAgIGNhc2UgZmFsc2U6XG4gICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3dpdGNoRm9ybScpLmNsYXNzTGlzdC50b2dnbGUoJ2NyZWF0ZScpXG4gICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3dpdGNoRm9ybScpLmlubmVySFRNTCA9ICdDbGljayBoZXJlIHRvIGxvZ2luIHdpdGggZXhpc3RpbmcgYWNjb3VudCdcbiAgICAgICAgIGRvY3VtZW50LmZvcm1zWzBdLnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25bdHlwZT0nc3VibWl0J11cIikuaW5uZXJIVE1MID0gJ0NyZWF0ZSBhbiBhY2NvdW50J1xuICAgICAgICAgYnJlYWs7XG4gICAgICAgY2FzZSB0cnVlOlxuICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N3aXRjaEZvcm0nKS5jbGFzc0xpc3QudG9nZ2xlKCdjcmVhdGUnKVxuICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N3aXRjaEZvcm0nKS5pbm5lckhUTUwgPSAnQ2xpY2sgaGVyZSB0byBjcmVhdGUgbmV3IGFjY291bnQnXG4gICAgICAgICBkb2N1bWVudC5mb3Jtc1swXS5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uW3R5cGU9J3N1Ym1pdCddXCIpLmlubmVySFRNTCA9ICdMb2cgSW4nXG4gICAgICAgICBicmVhaztcbiAgICAgICBkZWZhdWx0OlxuICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19
