import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Login } from '../pages/Login/Login';
import { Register } from '../pages/Register/Register';
import { About } from '../pages/About/About';
import { Admin } from '../pages/Admin/Admin';
import { Reservas } from '../pages/Reservas/Reservas';
import { Gallery } from '../pages/Gallery/Gallery';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/reservas" element={<Reservas />} />
      <Route path="/galeria" element={<Gallery />} />
    </Routes>
  );
};
