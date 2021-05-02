import { AppConfig } from '@common/interfaces';
import { getRepository } from 'typeorm';
import { User } from '@user/entities';

function RouteTable(stack, item): void {
  this.method = stack.method.toUpperCase();
  this.route = item.route.path;
}

export function tableLogRoutes(server, app: AppConfig): void {
  console.log(`\nService listening at http://localhost:${app.port}`);
  console.log(`\x1b[33mstarting  the microservice [ CRM ]. at ${Date().toString()}`);
  console.log(`\x1b[34mlistening on port ${app.port}`);
  console.log(`\x1b[32mrunning environment NODE_ENV=${process.env.NODE_ENV}, internal env=${app.env}`);

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

export const EnumToString = (_enum: object) =>
  Object.keys(_enum)
    .map(key => _enum[key])
    .filter(value => typeof value === 'string') as string[];

export const setDefaultUser = async (): Promise<void> => {
  const userRepository = getRepository(User);
  const email = 'daniel1@test.cl'

  const defaultUser = await userRepository
    .createQueryBuilder()
    .where('email = :email', { email })
    .getOne();

  if (!defaultUser) {
    const adminUser = userRepository.create({
      name: 'Daniel',
      lastName: 'Lopez',
      email,
      password: '12345678',
      roles: ['ADMIN'],
      status: true
    });

    await userRepository.save(adminUser);
  }
};
