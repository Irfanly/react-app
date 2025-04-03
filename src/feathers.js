import feathers from '@feathersjs/client';
import axios from 'axios';

const app = feathers();
const restClient = feathers.rest('http://localhost:3030');
app.configure(restClient.axios(axios));

export default app;