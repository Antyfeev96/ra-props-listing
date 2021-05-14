import './App.scss';
import Listing from './components/Listing/Listing';
import data from './components/Data/Data';

export default function App() {
  return (
    <Listing items={JSON.parse(data)} />
  );
}
