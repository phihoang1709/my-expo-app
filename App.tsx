import './global.css';
import 'react-native-reanimated'
import 'react-native-gesture-handler'
// import {GluestackUIProvider} from '@/components/ui/gluestack-ui-provider';
import {Provider} from 'react-redux';
import {store} from './src/store';
import Navigation from './src/navigation';

export default function App() {
  return (
    // <GluestackUIProvider mode="light">
      <Provider store={store}>
        <Navigation />
      </Provider>
    //</GluestackUIProvider> 
  );
}
