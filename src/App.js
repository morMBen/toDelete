import LargeHeading from './components/LargeHeading';
import DisplayContainer from './components/DisplayContainer';

import './App.css';

function App() {
  const siteHeading = 'Hello to my web';
  return (
    <div className='app'>
      <LargeHeading webHeadingName={siteHeading} />
      <DisplayContainer />
    </div>
  );
}

export default App;
