class Shape {
    constructor(color) {
        this.color = color;
    }
    setColor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    constructor(color) {
        super(color);
    }
    render(text, textColor) {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="150" cy="100" r="80" fill="${this.color}" />
                    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
                </svg>`;
    }
}

class Triangle extends Shape {
    constructor(color) {
        super(color);
    }
    render(text, textColor) {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />
                    <text x="150" y="150" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
                </svg>`;
    }
}

class Square extends Shape {
    constructor(color) {
        super(color);
    }
    render(text, textColor) {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                    <rect x="50" y="50" width="200" height="100" fill="${this.color}" />
                    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
                </svg>`;
    }
}

module.exports = { Circle, Triangle, Square };