import './styling/App.css';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header.jsx';
import { LeftSideBar } from './components/LeftSideBar.jsx';
import { HomeRoute } from './routes/HomeRoute.jsx';
import { PostRoute } from './routes/PostRoute.jsx';
import { ProfileRoute } from './routes/ProfileRoute.jsx';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <LeftSideBar />
        <div className='routes-wrapper'>
          <Routes >
            <Route path="/" element={<HomeRoute />} />
            <Route path="/profile" element={<ProfileRoute />} />
            <Route path="/post/:postId" element={<PostRoute />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
