import './styling/App.css';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header.jsx';
import { LeftSideBar } from './components/LeftSideBar.jsx';
import { HomeRoute } from './routes/HomeRoute.jsx';
import { PostRoute } from './routes/PostRoute.jsx';
import { ProfileRoute } from './routes/ProfileRoute.jsx';
import { CreatePostRoute } from './routes/CreatePostRoute.jsx';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <LeftSideBar />
        <Routes>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/post/:postId" element={<PostRoute />} />
          <Route path="/new-post" element={<CreatePostRoute />} />
          <Route path="/profile/:profileId" element={<ProfileRoute />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
