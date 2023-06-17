import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import './index.css';
import App from './components/App';
import  rootReducer from './reducers';

const store = createStore(rootReducer);       //store taking 'reducer'  'movies' as an argument
console.log("store is: ", store);
// console.log("dispatch is: ", store.dispatch);
// console.log("Type of dispatch is: ",typeof(store.dispatch));
console.log("state is: ",store.getState());

// //using dispatch we can send action to reducer, it will change the State. 'dispatch' is used to change the state.
// store.dispatch({
//   type: "ADD_MOVIES",
//   movies: [{name: 'Superman'}]
// })

// console.log("AFTER state is: ",store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <App store ={store}/>      {/* passing store as a prop in DOM */}
  </React.StrictMode>
);












// import my_default, {sum as my_sum,a} from './someFile';

// my_default();
// my_sum();
// console.log(a);


