import angular from 'angular';

// Styles
import './scss/style.scss';

//3rd party dependencies
import '@uirouter/angularjs';
import 'satellizer';

// Our modules
import Router from './config/router';
import Auth from './config/auth';

//our controllers
// import MainCtrl from './controller/main';
import LoginCtrl from './controllers/auth/login';
import RegisterCtrl from './controllers/auth/register';
import UsersIndexCtrl from './controllers/users/index';
import UsersShowCtrl from './controllers/users/show';
import UsersEditCtrl from './controllers/users/edit';

// Jobs and Users Models
import Job from './models/job';
import User from './models/user';

angular.module('neighbourgood', ['ui.router', 'satellizer'])
  .config(Router)
  .config(Auth)
  // .controller('MainCtrl', MainCtrl)
  .controller('LoginCtrl', LoginCtrl)
  .controller('RegisterCtrl', RegisterCtrl)
  .controller('UsersIndexCtrl', UsersIndexCtrl)
  .controller('UsersShowCtrl', UsersShowCtrl)
  .controller('UsersEditCtrl', UsersEditCtrl)
  .service('Job', Job)
  .service('User', User);
