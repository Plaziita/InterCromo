import { EnvironmentProviders, importProvidersFrom } from '@angular/core';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';

const firebaseProviders: EnvironmentProviders = importProvidersFrom(
  provideFirebaseApp(() =>
    initializeApp({
      projectId: 'intercromo-6a7d7',
      appId: '1:1083178353916:web:c1b266bda96254d2e64379',
      storageBucket: 'intercromo-6a7d7.appspot.com',
      apiKey: 'AIzaSyBLfKuqfyHPwXQcbCsIZxebcL2FydyD9z8',
      authDomain: 'intercromo-6a7d7.firebaseapp.com',
      messagingSenderId: '1083178353916',
      measurementId: 'G-YWC0WX1DW2',
    }),
  ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage()),
);

export {firebaseProviders}