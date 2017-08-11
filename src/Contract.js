export default class Contract {
  constructor(contract = {}) {
    this.args = contract;
  }

  static create(contract = {}) {
    return new Contract(contract);
  }

  get() {
    return Object
      .entries(this.args)
      .reduce((args, [name, scheme]) => {
        args[name] = {...scheme};
        return args;
      }, {});
  }
}
