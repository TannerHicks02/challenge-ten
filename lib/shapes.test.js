const { Circle, Triangle, Square } = require('./shapes');

test('Circle renders correctly', () => {
    const shape = new Circle('red');
    const svg = shape.render('ABC', 'blue');
    expect(svg).toContain('<circle');
    expect(svg).toContain('fill="red"');
    expect(svg).toContain('ABC');
    expect(svg).toContain('fill="blue"');
});

test('Triangle renders correctly', () => {
    const shape = new Triangle('green');
    const svg = shape.render('DEF', 'white');
    expect(svg).toContain('<polygon');
    expect(svg).toContain('fill="green"');
    expect(svg).toContain('DEF');
    expect(svg).toContain('fill="white"');
});

test('Square renders correctly', () => {
    const shape = new Square('blue');
    const svg = shape.render('GHI', 'black');
    expect(svg).toContain('<rect');
    expect(svg).toContain('fill="blue"');
    expect(svg).toContain('GHI');
    expect(svg).toContain('fill="black"');
});