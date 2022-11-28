import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes/Routes';

function App() {
  return (
    <div className="">
      <RouterProvider router={routes}/>
    </div>
  );
}

export default App;
