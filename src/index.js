// Test for webpack
import Logger from "./webpack-test/Logger";
import Calc from "./webpack-test/Calc";
import "./webpack-test/sass/main.scss";
import src from "./webpack-test/images/test.jpg";

Logger.log(Calc.sum(7, 3, 12), Calc.square(6));

Logger.log(`Src is`, src);
