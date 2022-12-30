import './app.css';
import Countries from './pages/Countries/Countries';
import CountriesWithSwr from './pages/Countries/CountriesWithSwr/CountriesWithSwr';
import { CountryProvider } from './pages/Countries/CountryProvider';

function App() {
  return (
    <div className='app'>
      <Countries />
      <CountryProvider>
        <CountriesWithSwr />
      </CountryProvider>
    </div>
  );
}

export default App;
