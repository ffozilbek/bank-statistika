import { Outlet } from 'react-router-dom';
import { Navbar } from './components';

export default function MainLayout() {
  return (
    <div className='flex h-[100vh]'>
      <Navbar />
      <Outlet /> {/* Har bir sahifa kontenti shu yerda ko‘rinadi */}
    </div>
  );
}