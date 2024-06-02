import { ENABLE_PERSISTENCE } from '@angular/fire/compat/firestore';

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAooq8iKsCu3GzcE6Fppt_SfrbX8fm5m9k',
    authDomain: 'estad-work.firebaseapp.com',
    projectId: 'estad-work',
    databaseUrl: 'https://estad-work-default-rtdb.firebaseio.com/',
    storageBucket: 'estad-work.appspot.com',
    messagingSenderId: '1:256143591843:web:6dbb32e845254611e4b216',
    appId: 'G-6X7KJT0VJS',
    name: 'users',
    option: '',
    autoMaticDataCollection: ENABLE_PERSISTENCE,
  },
};
