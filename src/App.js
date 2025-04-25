import { StatusBar } from 'expo-status-bar';
import Navigation from './navigations';
import { UserProvider } from './contexts/UserContext';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  return (
    <UserProvider>
      <StatusBar style={'dark'} />
      <Navigation />
    </UserProvider>
  );
};

App.displayName = 'App';

export default App;
