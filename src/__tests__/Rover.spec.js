const Rover = require('../app/Rover')

describe('Test rover implementation', () => {
  
  test('Rover can be build up', () => {
    const rover = new Rover(5, 5, 'E');
    expect(rover.xCoordinate).toEqual(5);
    expect(rover.yCoordinate).toEqual(5);
    expect(rover.orientation).toEqual('E');
  });

  test('Rover can move forward its orientation', () => {
    const RoverN = new Rover(10, 10, 'N');
    RoverN.move();
    expect(RoverN.xCoordinate).toEqual(10);
    expect(RoverN.yCoordinate).toEqual(11);
    expect(RoverN.orientation).toEqual('N');
  
    const RoverE = new Rover(10, 10, 'E');
    RoverE.move();
    expect(RoverE.xCoordinate).toEqual(11);
    expect(RoverE.yCoordinate).toEqual(10);
    expect(RoverE.orientation).toEqual('E');
  
  
    const RoverW = new Rover(10, 10, 'W');
    RoverW.move();
    expect(RoverW.xCoordinate).toEqual(9);
    expect(RoverW.yCoordinate).toEqual(10);
    expect(RoverW.orientation).toEqual('W');
  
    const RoverS = new Rover(10, 10, 'S');
    RoverS.move();
    expect(RoverS.xCoordinate).toEqual(10);
    expect(RoverS.yCoordinate).toEqual(9);
    expect(RoverS.orientation).toEqual('S');
  });
})