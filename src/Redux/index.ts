import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './Reducers';

export const store = createStore(reducers, composeWithDevTools());
