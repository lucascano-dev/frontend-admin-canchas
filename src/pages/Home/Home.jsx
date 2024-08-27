import { Hero } from '../../components/Hero/Hero';
import imagess from '../../assets/images/card_example.jpeg';
import { MyCards } from '../../components/MyCards/MyCards';
import { productos } from '../../utils/mocks/productos';
import { InfoHome } from '../../components/InfoHome/InfoHome';
import { InfoPublicidad } from '../../components/InfoPublicidad/InfoPublicidad';
import './Home.css';
export const Home = () => {
  return (
    <>
      <div className="Home">
        <Hero />
      </div>

      <div className="Cards d-flex justify-content-center flex-wrap m-5 gap-5">
        {productos.map((product, index) => (
          <MyCards
            key={index}
            title={product.title}
            text={product.text}
            imageUrl={product.imageUrl}
            buttonVariant={product.buttonVariant}
            textButton={product.textButton}
            toURL={product.toURL}
          />
        ))}
      </div>
      <div className="container-seccion-info d-flex justify-content-center flex-column bg-white">
        <h1 className="text-center">SECCION INFO Y PUBLICIDAD</h1>
        <div className="seccion-info bg-white ">
          <InfoHome />
          <InfoPublicidad />
        </div>
      </div>
    </>
  );
};
