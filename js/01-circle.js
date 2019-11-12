// 1) Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:

// поле, хранящее радиус окружности;
// get-свойство, возвращающее радиус окружности;
// set-свойство, устанавливающее радиус окружности;
// get-свойство, возвращающее диаметр окружности;
// метод, вычисляющий площадь окружности;
// метод, вычисляющий длину окружности.
// Продемонстрировать работу свойств и методов. 

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    getRadius() {
        return this.radius;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    getDiameter() {
        return this.radius * 2;
    }

    circleArea() {
        return Math.PI * this.radius * this.radius;
    }

    circleLength() {
        return 2 * Math.PI * this.radius;
    }
}

let shar = new Circle(10);

shar.setRadius(20);
console.log(shar.getRadius());
console.log(shar.getDiameter());
console.log(shar.circleArea());
console.log(shar.circleLength());