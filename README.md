# Mars Rover in JavaScript

A squad of robotic rovers are to be landed by NASA on a plateau on Mars.
This plateau, which is curiously rectangular, must be navigated by the rovers so that their on-board cameras can get a complete view of the surrounding terrain to send back to Earth.
A rover’s position and location is represented by a combination of x and y co-ordinates and a letter representing one of the four cardinal compass points. The plateau is divided up into a grid to simplify navigation. An example position might be 0, 0, N, which means the rover is in the bottom left corner and facing North.
In order to control a rover , NASA sends a simple string of letters. The possible letters are ‘L’, ‘R’ and ‘M’. ‘L’ and ‘R’ makes the rover spin 90 degrees left or right respectively, without moving from its current spot. ‘M’ means move forward one grid point, and maintain the same heading.
Assume that the square directly North from (x, y) is (x, y 1).

## Input

The first line of input is the upper-right coordinates of the plateau, the lower-left coordinates are assumed to be 0,0.
The rest of the input is information pertaining to the rovers that have been deployed. Each rover has two lines of input. The first line gives the rover’s position, and the second line is a series of instructions telling the rover how to explore the plateau.
The position is made up of two integers and a letter separated by spaces, corresponding to the x and y co-ordinates and the rover’s orientation.
Each rover will be finished sequentially, which means that the second rover won’t start to move until the first one has finished moving.

## Output

The output for each rover should be its final co-ordinates and heading.

### Test Input:
```
1 2 N  
LMLMLMLMM  
3 3 E  
MRRMMRMRRM  
```

### Expected Output:
```
1 3 N  
2 3 S  
```

### Resolution

It was necessary to find out which plateau coordinates will allow the input data to result in the expected output data, for it based on tests arrived at the coordinates 5 5.

The inputs are on assets/input.txt file, and the index.js reads using node fs module to start the application run.

Unit tests were implemented using the provided input data to validate that the implementation works.


## How to execute the code:

The code was delivered with node_modules folder, so assuming the environment has nodejs ```v18.4.0``` current version or ```v16.6.0``` LTS installed, you can just run in the root folder of the project:

Run:
```shell
 npm run dev
```

## How to run the unit tests:

I used [Jest](https://jestjs.io/docs/getting-started) for unit test, so only run:
```
npm t
```