import './app.css';
import Countries from './pages/Countries/Countries';
import CountriesWithSwr from './pages/Countries/CountriesWithSwr/CountriesWithSwr';

function App() {
  return (
    <div className='app'>
      <Countries />

      <CountriesWithSwr />
    </div>
  );
}

export default App;
