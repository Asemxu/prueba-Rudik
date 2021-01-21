
import {BrowserRouter , Switch , Route} from 'react-router-dom';
import Tienda from './Tienda/Tienda';

function App() {
  return (
   <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Tienda} />
    </Switch>
   </BrowserRouter>
  );
}

export default App;
