import SearchPage from './SearchPage';
import SearchResults from './SearchResults';
import Property from './Property'
import {StackNavigator} from 'react-navigation';

const App = StackNavigator({
    Home: {screen: SearchPage},
    Results: {screen: SearchResults},
    Property: {screen: Property}

});
export default App;


