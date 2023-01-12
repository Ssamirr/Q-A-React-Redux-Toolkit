import './App.css';
import ProjectRoutes from './routes/ProjectRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='app'>
      <ToastContainer />
      <ProjectRoutes />
    </div>
  );
}

export default App;
