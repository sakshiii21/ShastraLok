import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import {Home,Scriptures} from './components/index.js';
import Layout from './Layout.jsx'
import Map from './components/map/Map.jsx';
import Quiz from './components/quiz/Quiz.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="scriptures" element={<Scriptures />} />
          <Route path="Maps" element={<Map/>} />
          <Route path="quiz" element={<Quiz />} />
          
      </Route>
  )
);
createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>
);
