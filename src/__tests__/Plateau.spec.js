const Plateau = require('../app/Plateau')

describe('Test implementation to control mission', () => {
  
  test('Plateau can be build up', () => {
    const plateau = new Plateau(5, 5);

    expect(plateau.xCoordinate).toEqual(5)
    expect(plateau.yCoordinate).toEqual(5)
  });

  // test('Plateau coordinates must be integer', t => {
  //   const error = t.throws(function () {
  //     new Plateau(10.1, 10.2);
  //   }, Error);
  //   t.is(error.message, 'Plateau coordinates must be integers');
  // });

  // test('Plateau coordinates must be integer', t => {
  //   const error = t.throws(function () {
  //     new Plateau(0, 0);
  //   }, Error);
  //   t.is(error.message, 'Plateau coordinates must be positive');
  // });
});