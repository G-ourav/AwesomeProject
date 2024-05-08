import React, {useState, createContext, useContext} from 'react';
import {View} from 'react-native';

import App_stack from './navigation/app_stack';
import Auth_stack from './navigation/auth_stack';
const MyContext = createContext();

function App() {
  const [isLogIn, setIsLogIn] = useState(true);

  // Step 2: Create a provider component
  const MyProvider = ({children}) => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      setCount(prevCount => prevCount + 1);
    };

    return (
      <MyContext.Provider value={{count, incrementCount}}>
        {children}
      </MyContext.Provider>
    );
  };

  return (
    <View>
      {isLogIn ? (
        <MyProvider>
          <App_stack />
        </MyProvider>
      ) : (
        <Auth_stack isLogIn={isLogIn} setIsLogIn={setIsLogIn} />
      )}
    </View>
  );
}

export default App;
export const useMyContext = () => useContext(MyContext);
