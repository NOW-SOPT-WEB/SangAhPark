import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from '../src/pages/LoginPage';
import MainPage from '../src/pages/MainPage';
import MyPage from '../src/pages/MyPage';
import Register from '../src/pages/RegisterPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/main/:id" element={<MainPage />}></Route>
          <Route path="/mypage/:id" element={<MyPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
