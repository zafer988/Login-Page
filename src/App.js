import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

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


