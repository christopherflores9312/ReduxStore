import { createStore } from 'redux';
import reducers from './utils/reducers'; // You might need to modify your reducers to match the Redux style

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
