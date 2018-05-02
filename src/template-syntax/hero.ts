export class Hero {
  constructor(public id?: number, public name?: string) {

  }

  static heroes: Hero[] = [
    new Hero(1, 'Windstorm'),
    new Hero(2, 'Bombasto'),
    new Hero(3, 'Magneta'),
    new Hero(4, 'Tornado'),
  ];

  clone(): Hero {
    return Object.assign(new Hero(), this);
  }
}
