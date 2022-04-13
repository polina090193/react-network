import React from 'react';
import AppCss from './styles/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Box from '@mui/material/Box';
import styleConsts from './styles/styleConsts';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

function AppContent(props) {

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
              width: styleConsts.menuWidth,
            }}
          >
            {Sidebar}
          </Box>
          <Routes>
            <Route path="/profile" element={<Profile state={props.state} />} />
            <Route path="/messages/*" element={ <Messages state={props.state} /> } />
            <Route path="/news/*" element={<News state={props.state} />} />
            <Route path="/music" element={<Music state={props.state} />} />
            <Route path="/settings" element={<Settings state={props.state} />} />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default function App(props) {
  return <AppContent state={props.state} />;
}