import './App.css';
import { Routes, Route } from 'react-router-dom';
import ListUsers from './components/ListUsers';
import NewUsers from './components/NewUsers';
import UpdateUsers from './components/UpdateUsers';

function App() {
  return (
    <Routes>
      <Route path='/' element={<ListUsers />} />
      <Route path='/newUser' element={<NewUsers />} />
      <Route path='updateUsers' element={<UpdateUsers />} />
    </Routes>
  );
}

export default App;
