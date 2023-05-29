const {add, subtract} = require('./math.js')
test('Must add 2 and 3 to 5',()=>{
  expect(add(2,3)).toBe(5)
})

test('Must subtract 3 from 5 to 2',()=>{
  expect(subtract(5,3)).toBe(2)
})
