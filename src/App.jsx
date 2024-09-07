import { BrowserRouter } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { NavbarComponent } from './components/Navbar/NavbarComponent';
import { AppRouter } from './routers/AppRouter';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavbarComponent />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
