import React, {useState} from 'react';
import {View} from 'react-native';

import App_stack from './navigation/app_stack';
import Auth_stack from './navigation/auth_stack';

function App(): React.JSX.Element {
  const [isLogIn, setIsLogIn] = useState(false);

  return <View>{isLogIn ? <App_stack /> : <Auth_stack />}</View>;
}

export default App;
