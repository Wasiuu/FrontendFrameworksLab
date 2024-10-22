import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Lab1 from './pages/Lab1';
import Lab2 from './pages/Lab2';
import NotFound from './pages/NotFound';
import Lab3Page from './pages/Lab3Page';
import './styles/app.css'

const menuItems = [
  {
    id: 1,
    label: "Home",
    url: "/",
    urlPattern: "/",
    element: <Home />
  },
  {
    id: 2,
    label: "Lab1",
    url: "/lab1",
    urlPattern: "/lab1",
    element: <Lab1 />
  },
  {
    id: 3,
    label: "Lab 2",
    url: "/lab2/0",
    urlPattern: "/lab2/:id",
    element: <Lab2 />,
  },
  {
    id: 4,
    label: "NotFound",
    urlPattern: "/*",
    element: <NotFound />
  },
  {
    id: 5,
    label: "Lab3",
    url: "/lab3",
    urlPattern: "/lab3",
    element: <Lab3Page></Lab3Page>,
  }

];


function App() {
  return (
    <RootLayout items={menuItems}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lab1" element={<Lab1 />} />
        <Route path="/lab2/:id" element={<Lab2 />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </RootLayout>
  );
}

export default App;