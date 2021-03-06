import * as Promise from 'bluebird';
import { cloneDeep } from 'lodash';
import { Store, HasId } from '@raincatcher/store';
const sayHello = ((from: string) => console.log(`Hello from reimplementing store's ${from}!`));

class StoreImpl<T extends HasId> implements Store<T> {
  private data: T[];

  constructor(private readonly seedData?: T[]) {
    sayHello('constructor');
    if (seedData) {
      this.reset();
    } else {
      this.data = [];
    }
  };

  list() {
    sayHello('list');
    return Promise.resolve(this.data);
  };

  add(user: T) {
    sayHello('add');
    this.data.push(user);
    return Promise.resolve(user);
  };

  reset() {
    sayHello('reset');
    this.data = cloneDeep(this.seedData);
    return this.list();
  }
}

export default StoreImpl;
