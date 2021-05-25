import './App.css';
import Button from '@material-ui/core/Button'; // imports css framework
import CssBaseline from '@material-ui/core/CssBaseline'; // imports a global reset for css styling
import Container from '@material-ui/core/Container';
import Dashboard from '../src/pages/Dashboard';



function App() {
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="sm">
        <h1>Home Page</h1>
        <Dashboard />
      </Container>
    </div>
  );
}

export default App;
