import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import {Home,Scriptures} from './components/index.js';
import Layout from './Layout.jsx'
import Map from './components/map/Map.jsx';
import Quiz from './components/quiz/Quiz.jsx';
import ScriptureChapter from './components/scriptures/ScripturesChapter.jsx';
import ScriptureList from './components/scriptures/ScripturesList.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="scriptures" element={<Scriptures />} />
          <Route path="scriptures/:scriptureName" element={<ScriptureList />} />
          <Route path="scriptures/:scriptureName/:id" element={<ScriptureChapter />} />
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
