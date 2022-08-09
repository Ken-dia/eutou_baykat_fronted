// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  apiUrl: 'http://localhost:8080/api/',
  //apiUrl: 'https://eutou-baykat-backend.herokuapp.com/api/',
  firebaseConfig: {
    apiKey: 'AIzaSyDXNAwhcSsudVgYd5cFb5tMlPP4phFAVVU',
    authDomain: 'eutou-baykat.firebaseapp.com',
    databaseURL: 'https://eutou-baykat-default-rtdb.firebaseio.com/',
    projectId: 'eutou-baykat',
    storageBucket: 'eutou-baykat.appspot.com',
    messagingSenderId: '371965727151',
    appId: '1:371965727151:web:056684055f325950f5df5a',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
