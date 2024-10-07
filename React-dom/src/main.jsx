import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './components/home/home.jsx'
import About from './components/about/about.jsx';
import './index.css'
import Layout from './layout.jsx'
import { createBrowserRouter,createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Contacts from './components/contacts/contacts.jsx';
import User from './components/user/user.jsx';
import Github,{githubInfoLoader} from './components/github/github.jsx';

const router=createBrowserRouter(
 createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home />}/>
    <Route path='about/' element={<About />}/>
    <Route path='contact/' element={<Contacts />}/>
    <Route path='user/' element={<User/>}>
      <Route path=':userId' element={<User/>}/> 
    </Route> 
    <Route 
    loader={githubInfoLoader}
    path='/github' 
    element={<Github/>}/>


    <Route path='*' element={<div>404 . Not Found</div>}/>
  </Route>
 )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
