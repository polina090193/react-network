/* import './App.css';
import Header from './Header';
import Content from './Content';
import Sidebar from './Sidebar';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      <Content />
      <p>Hello world</p>
    </div>
  );
}

export default App; */
import React from 'react';
import Box from '@mui/material/Box';
import { Sidebar } from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function AppContent() {

  return (
    <BrowserRouter>
      <Box>
        <Header />
        <Box
          component="main"
          sx={{ display: 'flex' }}
        >
          <Box
            sx={{
              display: 'block',
              width: '240px'
            }}
          >
            {Sidebar}
          </Box>
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default function App() {
  return <AppContent />;
}