import React from 'react';
import SignIn from './pages/SingIn';
import SingUp from './pages/SingUp';

import GlobalStyles from './styles/global'

import AuthContext from './context/AuthContext';



const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'Nanda' }}>
      <SignIn />
    </AuthContext.Provider>
    <GlobalStyles />
  </>
)

export default App;
