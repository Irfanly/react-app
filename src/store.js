import { init } from '@rematch/core';
import models from './models';
import loadingPlugin from '@rematch/loading';
import feathersClient from './feathers';

const loading = loadingPlugin();

console.log('Models:', models);

const store = init({
  models,
  plugins: [loading],
});

store.dispatch({ type: 'INIT_FEATHERS', payload: feathersClient });

export default store;