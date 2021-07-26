import AppProvider from 'hooks';
import { Dashboard } from './pages/Dashboard';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <AppProvider>
      <GlobalStyle />
      <Dashboard />
    </AppProvider>
  );
}

export default App;
