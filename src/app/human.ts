class Human {
  static totalPeople = 0;
  // tslint:disable-next-line:variable-name
  _name; // ES2016 property declaration syntax

  constructor(name) {
    this._name = name;
    Human.totalPeople += 1;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    this._name = val;
  }

  talk() {
    return `Hi, I'm ${this.name}!`;
  }
}

class Developer extends Human {
  // tslint:disable-next-line:variable-name
  _languages; // ES2016 property declaration syntax

  constructor(name, languages) {
    super(name);
    this._languages = languages;
  }

  get languages() {
    return this._languages;
  }

  talk() {
    return `${super.talk()} And I know ${this.languages.join(',')}.`;
  }
}
let human = new Human('foobar');
let dev = new Developer('bar', ['JavaScript']);
console.log(dev.talk());
