import { Footer } from './components/Footer/Footer';
import { NavbarComponent } from './components/Navbar/NavbarComponent';
import { AppRouter } from './routers/AppRouter';

function App() {
  return (
    <>
      <NavbarComponent />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
