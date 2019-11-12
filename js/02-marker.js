// 2) Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:

// поле, которое хранит цвет маркера;
// поле, которое хранит количество чернил в маркере (в процентах);
// метод для печати (метод принимает строку и выводит текст соответствующим цветом; текст выводится до тех пор, пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере).
// Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив метод для заправки маркера.

// Продемонстрировать работу написанных методов. 

class Marker {
    fill = '';
    constructor(color, fill) {
        this.color = color;
        fill > 100 ? fill = 100 : fill;
        this.fill = fill.toFixed(1) + '%';
    }

    print(text) {
        let p = document.getElementById('text');
        let left = parseFloat(this.fill) * 10;
        p.setAttribute('style', `color:${this.color}`);
        for (let i = 0; i < text.length; i++) {
            if (text[i] !== ' ') {
                p.innerText += text[i];
                left = left - 5;
            } else {
                p.innerText += text[i];
            }
            if (left < 5 ) {
                break;
            }
        }
        this.fill = (left/10).toFixed(1) + '%';
        console.log(this.fill);
    }
}

class RefillMarker extends Marker {
    constructor (color, fill) {
        super (color, fill)
    }

    refill(refill) {
        let insideIs = parseFloat(this.fill) * 10;
        insideIs += refill*10;
        insideIs > 1000 ? insideIs = 1000 : insideIs;
        this.fill = (insideIs/10).toFixed(1) + '%';
    }
}

let text = 'SOome text';
let biggerText = "sdfffffffffffffffffdfsdfasdfffffffffffffffffffdfsadfasefffffffffsdfsdffffffffffffffffffffffffffffff123456789";
let green = new Marker('green', 99.9);
let red = new RefillMarker('red', 500);

red.print(text);
console.log(red);
red.print(text);
console.log(red);
red.print(text);
console.log(red);
red.print(text);
console.log(red);
red.print(text);
console.log(red);
red.print(biggerText);
console.log(red);
red.print(biggerText);
console.log(red);

red.refill(950);
console.log(red);


let check = 'SOometextSOometextSOometextSOometextSOometextsdfffffffffffffffffdfsdfasdfffffffffffffffffffdfsadfasefffffffffsdfsdffffffffffffffffffffffffffffff123456789sdfffffffffffffffffdfsdfasdfffffffffffffffffffd';

let check2 = 'SOometextSOometextSOometextSOometextSOometextsdfffffffffffffffffdfsdfasdfffffffffffffffffffdfsadfasefffffffffsdfsdffffffffffffffffffffffffffffff123456789sdfffffffffffffffffdfsdfasdfffffffffffffffffff'

console.log('length ',check.length);
console.log('length ',check2.length);