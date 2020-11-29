export default class Calc {
  static sum(...args) {
    if (args.length === 0) {
      return 0;
    }
    return args.reduce((acc, value) => acc + value);
  }
  static square(num) {
    return num * num;
  }
}
