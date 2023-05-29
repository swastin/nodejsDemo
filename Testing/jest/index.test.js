var jest = require('jest');
var sum = require('./index');
test('sum of a and b is c', () => {

    expect(sum(1, 2)).toBe(3);
    expect(sum(2, 2)).toBe(4);

}
)


var data = {
    one: 1,
    two: 2
}
//for object
//failed 
test('sum of a and b is c', () => {
    expect(data).toBe({ one: 1, two: 2 });
}
)

//passed 
test('sum of a and b is c', () => {
    expect(data).toEqual({ one: 1, two: 2 });
}
)
//end




/**
 * ---------------
 * checking for  |
 * --------------- 
 * 1.null
 * 2.undefined
 * 3.nan
 * 4.toBeTruthy
 * 5.toBefalsy
 */



test('checking for null', () => {
    var n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
}
)


test('checking for null', () => {
    var n = null;
    expect(n).toBeNull();

}
)
test('checking for defined', () => {
    var n = null;

    expect(n).toBeDefined();

}
)
test('checking for undefined', () => {
    var n = null;

    expect(n).toBeUndefined();

}
)
test('checking for truth value', () => {
    var n = null;
    expect(n).toBeTruthy();
}
)

test('checking for false', () => {
    var n = null;
    expect(n).toBeFalsy();
}
)




test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(3);
    expect(value).toBeLessThanOrEqual(4.5);

    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
});

test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3);           This won't work because of rounding error
    expect(value).toBeCloseTo(0.3); // This works.
});


const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
];

test('the shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
});

test('the shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
});