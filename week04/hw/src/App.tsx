import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from '../src/pages/Login';
import MainPage from '../src/pages/MainPage';
import Register from '../src/pages/Register';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/main" element={<MainPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
