import React from 'react';
import ReactDOM from 'react-dom/client';
import AppWrapper from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';

const clientId = "811167660911-a8s3jhcvam33tlomda913dc6rsa2fkcv.apps.googleusercontent.com";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId={clientId}>
    <React.StrictMode>
      <AppWrapper />
    </React.StrictMode>
  </GoogleOAuthProvider>
);
