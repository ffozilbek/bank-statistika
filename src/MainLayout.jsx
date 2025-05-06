import { Outlet } from 'react-router-dom';
import { Navbar } from './components';

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <Outlet /> {/* Har bir sahifa kontenti shu yerda ko‘rinadi */}
    </div>
  );
}