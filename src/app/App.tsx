import './styles/bootstrap.min.css';
import './styles/main.css';
import { RouterProvider } from 'react-router';
import { rootRouter } from './router';

function App() {  
  return (
    <RouterProvider router={rootRouter}/>
  );
}

export default App;
