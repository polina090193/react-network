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
import { Sidebar } from './Sidebar';
import Header from './Header';
import Dashboard from './Dashboard';

function AppContent() {

  return (
    <Box>
      <Header />
      <Box
        component="main"
        sx={{ display: 'flex' }}
      >
        <Box
          component="sidebar"
          sx={{
            display: 'block',
            width: '240px'
          }}
        >
          {Sidebar}
        </Box>
        <Dashboard />
      </Box>
    </Box>
  );
}

export default function App() {
  return <AppContent />;
}