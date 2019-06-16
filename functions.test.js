const functions = require('./functions');

test('Adds 2 + 2 to equal 4', () => {
  expect(functions.arrowAdd(2, 2)).toBe(4);
});

test('Adds 2 + 2 to NOT equal 5', () => {
  expect(functions.arrowAdd(2, 2)).not.toBe(5);
});

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

// to be null
test('should be null', () => {
  expect(functions.isNull()).toBeNull();
});

// to be falsy
test('should be falsy', () => {
  expect(functions.checkValue(2)).not.toBeFalsy();
});

// to Equal
test('user should be Mohammed Hashmi object', () => {
  expect(functions.createUser()).toEqual({ firstName: 'Mohammed', lastName: 'Hashmi' })
});


// Less than and greater than
test('should be less than or equal 1600', () => {
  const load1 = 800;
  const load2 = 800;
  // expect(load1 + load2).toBeLessThan(1600);
  // expect(load1 + load2).toBeGreaterThan(1600);
  expect(load1 + load2).toBeLessThanOrEqual(1600);
})


// Regular Expressions

test('there is no I in team', () => {
  expect('team').not.toMatch(/I/i)
})


// Arrays

test('Admin should be in usernames', () => {
  usernames = ['hero', 'puu', 'admin'];
  expect(usernames).toContain('admin');
})


// Promise

test('user fetched name should be Leanne Graham with promise', () => {
  expect.assertions(1);
  return functions.fetchUser().then(data =>  {
    expect(data.name).toEqual('Leanne Graham');
  });
})

//Async Await
 
test('user fetched name should be Leanne Graham with async await', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser()
  expect(data.name).toEqual('Leanne Graham');
})



