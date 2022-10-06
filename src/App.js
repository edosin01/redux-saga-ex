// import './App.css';
import {Provider as ReduxProvider} from 'react-redux';
import Children from './Children';
import {store} from './store';

function App() {
  return (
    <ReduxProvider store={store}>
      <Children />
    </ReduxProvider>
  );
}

export default App;
