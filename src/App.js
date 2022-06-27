import './App.css';
import './Componants/Navbar'
import Navbar from './Componants/Navbar';
import Context from './Global/Context';
import Model from './Componants/Model';
import Stories from './Componants/Stories';
import Posts from './Componants/Posts';
import sidebar from './Componants/Sidebar';
import Sidebar from './Componants/Sidebar';



function App() {
  return (
    <Context>
      <Navbar></Navbar>
      <div className='container'>
        <Stories></Stories>
      </div>
      <Posts></Posts>
      <Sidebar></Sidebar>
      <Model></Model>
    </Context>
  );
}

export default App;
