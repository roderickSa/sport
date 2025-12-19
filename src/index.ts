import { bootstrap } from './bootstrap/bootstrap';
import { init } from './init';

async function main() {
  const server = await bootstrap();
  await init(server);
}

main();
