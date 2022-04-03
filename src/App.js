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

function AppContent() {

  return (
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
        {/* <Profile /> */}
        <Messages />
      </Box>
    </Box>
  );
}

export default function App() {
  return <AppContent />;
}