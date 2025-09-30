import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HeaderComponent from './components/HeaderComponent';
import Main from './components/Main';
import MachineSection from './components/MachineSection';
import CardSection from './components/CardSection';
import Qoute from './components/Qoute';
import Footer from './components/Footer';

function App()  {
  return (
    <div className="App">
      <HeaderComponent/>
      <Main/>
      <MachineSection/>
      <CardSection/>
      <Qoute/>
      <Footer/>
    </div>
  );
}

export default App;
