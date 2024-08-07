import { Footer } from './components/Footer/Footer';
import { NavbarComponent } from './components/Navbar/NavbarComponent';
import { AppRouter } from './routers/AppRouter';

function App() {
  return (
    <div>
      <NavbarComponent />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
