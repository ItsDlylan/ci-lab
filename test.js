const tests = require('./project')

test('can create a basic greeting', () => {
	expect(tests.getGreeting('Sam')).toBe('Hi Sam')
})

test('Can subtract 2 numbers', () => {
	expect(tests.subtractNum(5, 2)).toBe(3)
})
