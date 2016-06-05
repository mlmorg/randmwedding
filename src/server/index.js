import initServer from '../../lib/frmwrk/server';

export default function startServer(options = {}, cb) {
  const server = initServer(options);
  server.listen(3000, function () {
    console.log('listening');
  });
  return server;
}
