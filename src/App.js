import { Outlet } from 'react-router-dom';
import HomePage from './components/HomePage/Homepage';

function App() {
  return (
    <div>
         <HomePage></HomePage>
         {/* <Register></Register> */}
         <Outlet></Outlet>
    </div>
  );
}

export default App;
