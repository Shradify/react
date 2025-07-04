import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/layout.jsx';
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';
import ContactUs from './components/contactUs/ContactUs.jsx';
import Github from './components/github/Github.jsx';
import GithubinfoLoader from './components/github/GithubinfoLoader.jsx';
import Username from './components/myparams/Username.jsx';

// const router = createBrowserRouter([
//   {
//     path : "/",
//     element : <Layout />,
//     children : [
//       {
//         path : "",
//         element : <Home />
//       },
//       {
//         path : "/about",
//         element : <About />
//       },
//       {
//         path : "/contactUs",
//         element : <ContactUs />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout />}>
      <Route path='' element = {<Home />} />
      <Route path='about' element = {<About />} />
      <Route path='contactUs' element = {<ContactUs />} />
      <Route 
      loader = {GithubinfoLoader}
      path='Github' element = {<Github />} />
      <Route path='username/:userid' element = {<Username />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
