import http from 'http';
import express from 'express';

import { appInitLoader } from '../loaders';

const app = express();
const server = http.createServer(app);
let port = 4001
export function startServer() {
  appInitLoader(app);
  server.listen(port, () => console.log(`👂 server started on port ${port} on development mode`));
}

startServer();

export default app;
