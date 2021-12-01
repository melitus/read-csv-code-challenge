import http from 'http';
import express from 'express';

import { appInitLoader } from '../loaders';

const app = express();
const server = http.createServer(app);
let port = 5000
function startServer() {
  appInitLoader(app);
  server.listen(port, () => console.log(`👂 server started on port ${port} on development mode`));
}

startServer();

export default app;
