import { Hero } from '../../components/Hero/Hero';
import { NavbarComponent } from '../../components/Navbar/NavbarComponent';

export const Home = () => {
  return (
    <div className="Home">
      <NavbarComponent />
      <Hero />
    </div>
  );
};
