import { Hero } from '../../components/Hero/Hero';
import { NavbarComponent } from '../../components/Navbar/NavbarComponent';
import imagess from '../../assets/images/hero.jpeg';
import { MyCards } from '../../components/MyCards/MyCards';

export const Home = () => {
  return (
    <>
      <div className="Home">
        <NavbarComponent />
        <Hero />
      </div>
      <div className="Cards">
        <MyCards
          title="Mi titulo"
          text="Texto descriptivo"
          imageUrl={imagess}
          buttonVariant="btn btn-warning fw-bold py-xxl-2"
          toURL={'/reservas'}
          textButton="Reservar"
        />
      </div>
    </>
  );
};
