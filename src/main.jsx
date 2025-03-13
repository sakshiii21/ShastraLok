import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import {Home,Scriptures} from './components/index.js';
import Layout from './Layout.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="scriptures" element={<Scriptures />} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="user" element={<User />} />
          <Route path="github" element={<Github />} loader={githubInfoLoader} /> */}
      </Route>
  )
);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
