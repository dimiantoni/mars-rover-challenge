const Perseverance = require('../app/Perseverance')
const Rover = require('../app/Rover')
const Plateau = require('../app/Plateau')

describe('Test perseverance implementation to control mission', () => {
  
  test('Controller validate instruction', () => {
    const setPlateauInstruction = '5 5';
    const FAIL_setPlateauInstruction = 'R 5';
    const setMarsInstruction = '5 5 N';
    const FAIL_setMarsInstruction = '5 N 5';
    const moveMarsInstruction = 'LRMMRLRML';
    const FAIL_moveMarsInstruction = 'LRMMRLR3L';
  
    const perseverance = new Perseverance();
    expect(perseverance.validateSetPlateauInstruction(setPlateauInstruction)).toBe(true);
    expect(perseverance.validateSetPlateauInstruction(FAIL_setPlateauInstruction)).toBe(false);
  
    expect(perseverance.validateSetRoverInstruction(setMarsInstruction)).toBe(true);
    expect(perseverance.validateSetRoverInstruction(FAIL_setMarsInstruction)).toBe(false);
  
    expect(perseverance.validateMoveRoverInstruction(moveMarsInstruction)).toBe(true);
    expect(perseverance.validateMoveRoverInstruction(FAIL_moveMarsInstruction)).toBe(false);
  });

  test('Move strategy in perseverance class can not drive rover to move out of plateau', () => {
    const perseverance = new Perseverance();
    const plateau = new Plateau(5, 5);
  
    const rover = new Rover(0, 0, 'N');
    const rover2 = new Rover(0, 0, 'S');
    const rovers = [rover, rover2];
  
    expect(perseverance.canMoveStrategy(rover, rovers, plateau)).toBe(true);
    expect(perseverance.canMoveStrategy(rover2, rovers, plateau)).toBe(false);
  });

  test('Controller move strategy can\'t drive rover to move to overlap on another rover', () => {
    const perseverance = new Perseverance();
    const plateau = new Plateau(5, 5);
  
    const rover = new Rover(0, 1, 'N');
    const rover2 = new Rover(0, 0, 'N');
    const rover3 = new Rover(0, 3, 'N');
    const rovers = [rover, rover2, rover3];
  
    expect(perseverance.canMoveStrategy(rover2, rovers, plateau)).toBe(false);
    expect(perseverance.canMoveStrategy(rover3, rovers, plateau)).toBe(true);
  });

  test('Controller can drive rover to move', () => {
    const perseverance = new Perseverance();
    perseverance.plateau = new Plateau(5, 5);
  
    const rover = new Rover(0, 0, 'N');
    perseverance.moveRoverFromInstructions(rover, 'MMRMMM');
    expect(rover.xCoordinate).toEqual(3);
    expect(rover.yCoordinate).toEqual(2);
  });

  test('Controller can drive roverInfos, finally output correct position', () => {
    const perseverance = new Perseverance();
    perseverance.executeInstructions('5 5\n1 2 N\nLMLMLMLMM');
    expect(perseverance.runMissionPerseverance()).toEqual('1 3 N');
  
    const perseveranceTwo = new Perseverance();
    perseveranceTwo.executeInstructions('5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM');
    expect(perseveranceTwo.runMissionPerseverance()).toEqual('1 3 N\n5 1 E');
  });

});
