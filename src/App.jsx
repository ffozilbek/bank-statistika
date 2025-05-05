import { Routes, Route } from 'react-router-dom';
import MainLayout from './MainLayout';
import Sections from "./Sections/Sections"
import NotFound from './NotFound/NotFound';
import AddData from './AddData/AddData';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Sections />} />
        <Route path='/add_data' element={<AddData/>}/>
      </Route>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  );
};

export default App;