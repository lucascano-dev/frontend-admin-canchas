import { Hero } from '../../components/Hero/Hero';
import { NavbarComponent } from '../../components/Navbar/NavbarComponent';

export const Home = () => {
  return (
    <div className="Hero">
      <NavbarComponent />
      {/* <h1 className="text-center bg-danger">Home</h1> */}
      <Hero />
    </div>
  );
};
