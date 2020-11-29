export default class Logger {
  static log(...args) {
    console.log("==================");
    console.log(...args);
    console.log("==================");
  }
}
