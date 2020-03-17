import { Plugins } from '@capacitor/core';
import { v4 as uuidv4 } from 'uuid';

const { Storage } = Plugins;

const getPool = async (): Promise<string[]> => {
  const poolString = (await Storage.get({ key: 'pool' })).value;

  if (!poolString) {
    return [];
  }

  return JSON.parse(poolString) as string[];
}

export const getAllPlods = async (): Promise<PlodData[]> => {
  const pool = await getPool();
  const plods = pool.map(key => new PlodData(0, 0, 'null', key));
  const plodPromises = plods.map(plod => plod.loadUp());
  await Promise.all(plodPromises);

  return plods;
}

export class PlodData {
  prefix: string = uuidv4();

  private _goal: number = 0;
  private _completed: number = 0;
  private _units: string = '';

  constructor(goal: number, completed: number, units: string, prefix?: string) {
    if (prefix) {
      this.prefix = prefix;
      return;
    }

    this.goal = goal;

    this.completed = completed;

    this.units = units;

    this.addToPool();
  }

  async addToPool() {
    let poolString = (await Storage.get({ key: 'pool' })).value;

    if (!poolString) {
      poolString = '[]';
    }

    const poolArray = JSON.parse(poolString) as any[];
    poolArray.push(this.prefix);

    await Storage.set({
      key: 'pool',
      value: JSON.stringify(poolArray)
    })
  }

  async loadUp() {
    const goal = await this.getInt('goal');
    const completed = await this.getInt('completed');
    const units = await this.getAttribute('units');

    this._goal = goal;
    this._completed = completed;
    this._units = units;
  }

  async remove() {
    const poolString = (await Storage.get({ key: 'pool' })).value;

    if (!poolString) {
      return;
    }

    let poolArray = JSON.parse(poolString) as any[];
    poolArray = poolArray.filter(item => item !== this.prefix);

    await Storage.set({
      key: 'pool',
      value: JSON.stringify(poolArray)
    })
  }

  private async setAttribute(attribute: string, value: any) {
    try {
      await Storage.set({
        key: `${this.prefix}_${attribute}`,
        value: JSON.stringify(value)
      })
    } catch (err) {
      console.log(err);
    }
  }

  private async getAttribute(attribute: string): Promise<string> {
    const result = await Storage.get({ key: `${this.prefix}_${attribute}` });
    if (result.value === null) {
      throw Error('Not stored');
    }

    return JSON.parse(result.value);
  }

  private async getInt(attribute: string): Promise<number> {
    const attr = await this.getAttribute(attribute);
    return parseInt(attr, 10);
  }

  get goal(): number {
    return this._goal;
  }

  set goal(goal: number) {
    this._goal = goal;
    this.setAttribute('goal', goal);
  }

  get completed(): number {
    return this._completed;
  }

  set completed(completed: number) {
    this._completed = completed;
    this.setAttribute('completed', completed);
  }

  get units(): string {
    return this._units;
  }

  set units(units: string) {
    this._units = units;
    this.setAttribute('units', units);
  }
}