import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Login from './companents/Login';
import Register from './companents/Register';



const App = () => {

  const routeDefinitions = createRoutesFromElements(

    <>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </>
  );





  const router = createBrowserRouter(routeDefinitions)


  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}

export default App


