export default class Calc {
  static sum(...args) {
    return args.reduce((acc, value) => acc + value);
  }
  static square(num) {
    return num * num;
  }
}
