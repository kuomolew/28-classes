// 3) Реализовать класс Employee, описывающий работника, и создать массив работников банка.

// Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка. Массив работников необходимо передавать через конструктор, а получать HTML-код с помощью метода getHtml().

// Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().


class Employee {
    constructor (name, surname, age, position, salary) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.position = position;
        this.salary = salary;
    }
}

class EmpTable {
    constructor (list) {
        this.list = list;
    }
    getHTML() {
        let table = document.createElement('table');
        console.log(table);
        
        for (let i = 0; i < this.list.length; i++) {
            let tr = document.createElement('tr');


            for (let j = 0; j < Object.keys(this.list[i]).length; j++) {
                let td = document.createElement("td");
                let key = Object.keys(this.list[i])[j];
                td.innerText = this.list[i][key];
                tr.appendChild(td);
              }
            table.appendChild(tr);
        }
        document.body.appendChild(table);
    }
}

let employees = [
    john = new Employee('John', 'Snow', 32, 'manager', 5000),
    dey = new Employee('Deyneris', 'Targarien', 30, 'top-manager', 10000),
    bran = new Employee('Bran', 'Blackwater', 45, 'security', 15000),
    sercei = new Employee('Sercei', 'Lannister', 40, 'top-manager', 10000),
    rob = new Employee('Rob', 'Stark', 18, 'manager', 5000),
    varis = new Employee('Varis', 'Varis', 50, 'manager', 5000),
    grey = new Employee('Grey', 'Worm', 25, 'cleener', 1000),
];

let tbl = new EmpTable(employees);
tbl.getHTML();


