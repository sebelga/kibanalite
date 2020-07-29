import { server } from "./server";

// Run the server!
const start = async () => {
  try {
    await server.listen(8000);
    server.log.info(`server listening on ${server.server.address().port}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
start();
