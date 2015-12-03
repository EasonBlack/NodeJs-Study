//Get pixel color under the mouse. 
var robot = require("robotjs");

//the position of nodetext
var point = {
    x: 111,
    y: 356
}
robot.moveMouse(point.x, point.y);
robot.mouseClick();
robot.mouseClick();

robot.setKeyboardDelay(2000);
robot.keyTap("enter");
robot.setKeyboardDelay(2000);
robot.typeString("Hello World");
robot.setKeyboardDelay(2000);
robot.keyTap("x");
robot.keyTap("y");