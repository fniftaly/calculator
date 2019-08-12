const sum = require('./sum');
const div = require('./func');
const sub = require('./sub');
const mul = require('./sub');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 1 + 2 to equal 4', () => {
    expect(sum(1, 2)).not.toBe(4);
});

test('Dividing 1 / 1 equals 1', () => {
    expect(div(1, 1)).toBe(1)
}) 

test('Dividing 1 / 0 equals 1', () => {
    expect(div(1, 0)).not.toBe(1)
}) 
  
 test('Subtracting 1 - 1 equals 0', () => {
  expect(sub(1, 1)).toBe(0)
})

test('Subtracting 20 - 1 equals 0', () => {
    expect(sub(20, 1)).not.toBe(0)
  })

test('Multiplying 4 * 5 equals 20', () => {
    expect(mul(1, 1)).toBe(20)
})

test('Multiplying 4 * 5 equals 20', () => {
    expect(mul(4, 5)).toBe(20)
})

  test('Multiplying 4 * 0 equals 20', () => {
    expect(mul(1, 1)).not.toBe(20)
  })


