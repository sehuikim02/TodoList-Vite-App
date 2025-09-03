import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { toDoReducer } from './reducers';

//const store = createStore(toDoReducer, applyMiddleware(thunk));
const store = configureStore({
  reducer: toDoReducer,
});

// StrictMode -> 개발모드라서 두번씩 호출함, 그래서 fetch-todos 결과가 두번 호출됨
createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
