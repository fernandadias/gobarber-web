import React from 'react';
import SignIn from './pages/SingIn';
import SingUp from './pages/SingUp';

import GlobalStyles from './styles/global'

import { AuthProvider } from './context/AuthContext';



const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <GlobalStyles />
  </>
)

export default App;
