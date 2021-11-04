import './App.css';
// import EnrollmentForm from './components/EnrollmentForm';
import { theme, ThemeProvider } from '@chakra-ui/core'
import LoginForm from './components/LoginForm';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <LoginForm/>
      </div>
    </ThemeProvider>
  );
}

export default App;
