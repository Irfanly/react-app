import { init } from '@rematch/core';
import * as models from './models'; // Import all your models
import loadingPlugin from '@rematch/loading';
import feathersClient from './feathers';

const loading = loadingPlugin();

const store = init({
  models,
  plugins: [loading],
});

feathersClient.then(app => {
  store.dispatch({ type: 'INIT_FEATHERS', payload: app });
});


export default store;