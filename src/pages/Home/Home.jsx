import { Hero } from '../../components/Hero/Hero';
import imagess from '../../assets/images/hero.jpeg';
import { MyCards } from '../../components/MyCards/MyCards';
export const Home = () => {
  return (
    <>
      <div className="Home">
        <Hero />
      </div>
      <div className="Cards d-flex justify-content-center flex-wrap m-5 gap-5">
        <MyCards
          title="mateo"
          text="Texto descriptivo"
          imageUrl={imagess}
          buttonVariant="btn btn-warning fw-bold py-xxl-2"
          toURL={'/reservame'}
          textButton="Reservar"
        />
        <MyCards
          title="Mi titulo"
          text="Texto descriptivo"
          imageUrl={imagess}
          buttonVariant="btn btn-warning fw-bold py-xxl-2"
          toURL={'/reservas'}
          textButton="Reservar"
        />
        <MyCards
          title="Mi titulo"
          text="Texto descriptivo"
          imageUrl={imagess}
          buttonVariant="btn btn-warning fw-bold py-xxl-2"
          toURL={'/reservas'}
          textButton="Reservar"
        />
        <MyCards
          title="Mi titulo"
          text="Texto descriptivo"
          imageUrl={imagess}
          buttonVariant="btn btn-warning fw-bold py-xxl-2"
          toURL={'/reservas'}
          textButton="Reservar"
        />
        <MyCards
          title="Mi titulo"
          text="Texto descriptivo"
          imageUrl={imagess}
          buttonVariant="btn btn-warning fw-bold py-xxl-2"
          toURL={'/reservas'}
          textButton="Reservar"
        />
        <MyCards
          title="Mi titulo"
          text="Texto descriptivo"
          imageUrl={imagess}
          buttonVariant="btn btn-warning fw-bold py-xxl-2"
          toURL={'/reservas'}
          textButton="Reservar"
        />
        <MyCards
          title="Mi titulo"
          text="Texto descriptivo"
          imageUrl={imagess}
          buttonVariant="btn btn-warning fw-bold py-xxl-2"
          toURL={'/reservas'}
          textButton="Reservar"
        />
        <MyCards
          title="Mi titulo"
          text="Texto descriptivo"
          imageUrl={imagess}
          buttonVariant="btn btn-warning fw-bold py-xxl-2"
          toURL={'/reservas'}
          textButton="Reservar"
        />
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
