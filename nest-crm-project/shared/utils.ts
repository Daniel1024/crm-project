import { AppConfig } from '@interfaces';

function RouteTable(stack, item): void {
  this.method = stack.method.toUpperCase();
  this.route = item.route.path;
}

export function tableLogRoutes(server, app: AppConfig): void {
  console.log(`\nService listening at http://localhost:${app.port}`);
  console.log(`\x1b[33mstarting  the microservice [ CRM ]. at ${Date().toString()}`);
  console.log(`\x1b[34mlistening on port ${app.port}`);
  console.log(`\x1b[32mrunning environment APP_ENV=${process.env.APP_ENV}, internal env=${app.env}`);

  const resp = [];
  server._events.request._router.stack
    .forEach((item) => {
      if (item.route && item.route.path.includes('/')) {
        item.route.stack.forEach((stack) => {
          resp.push(new RouteTable(stack, item));
        });
      }
    });
  console.log('\x1b[39m'); // white
  console.table(resp);
}
