import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { BrowserRouter } from 'react-router-dom';
import { PostsProvider } from './context/PostsContext.jsx';
import { ProfileProvider } from './context/ProfileContext.jsx';
import { ContactsProvider } from './context/ContactsContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContactsProvider>
        <ProfileProvider>
          <PostsProvider>
            <App />
          </PostsProvider>
        </ProfileProvider>
      </ContactsProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
