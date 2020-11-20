function Csv() {};
Csv.prototype.parse = function(string, separator) {
    this.string = string;
    this.separator = separator || "";

    this.result = [];
    this.separatorsCount = {
        comma: 0,
        dotCom: 0,
        tabulation: 0
    };
    this.separatorValue = {
        dotCom: ";",
        comma: ",",
        tabulation: "\t"
    };
    if (!this.separator) {
        for (key in this.separatorValue) {
            for (i of this.string) {
                if (i === this.separatorValue[key]) {
                    this.separatorsCount[key]++;
                }
            }
        }
        // console.log(this.separatorsCount);
        for (key in this.separatorsCount) {
            if (this.separatorsCount[key] === Math.max.apply(null, Object.values(this.separatorsCount))) {
                // console.log(this.separatorValue[key]);
                this.string.split('\n').forEach(element => {
                    this.result.push(element.split(this.separatorValue[key]));

                });

            }
        }

    } else {
        this.string.split('\n').forEach(element => {
            this.result.push(element.split(separator));

        });
    }
    // console.log(this.result);
    return this.result;


};
Csv.prototype.generate = function(array, separatorGenerate) {
    this.array = array;
    this.separatorGenerate = separatorGenerate || "";
    this.generateResult = "";
    if (!this.separatorGenerate) {
        this.array.forEach((elem, index, array) => {
            if (index < array.length - 1) {
                this.generateResult += elem.join(",") + "\n";
            } else this.generateResult += elem.join(",");

        });
    } else {
        this.array.forEach((elem, index, array) => {
            if (index < array.length - 1) {
                this.generateResult += elem.join(this.separatorGenerate) + "\n";
            } else this.generateResult += elem.join(this.separatorGenerate);

        });
    }
    // console.log(this.result);
    return this.generateResult;
};

function CsvArray() {};
CsvArray.prototype = Object.create(Array.prototype);
CsvArray.prototype.parse = function(string, separator) {
    this.string = string;
    this.separator = separator || "";

    this.result = [];
    this.separatorsCount = {
        comma: 0,
        dotCom: 0,
        tabulation: 0
    };
    this.separatorValue = {
        dotCom: ";",
        comma: ",",
        tabulation: "\t"
    };
    if (!this.separator) {
        for (key in this.separatorValue) {
            for (i of this.string) {
                if (i === this.separatorValue[key]) {
                    this.separatorsCount[key]++;
                }
            }
        }
        // console.log(this.separatorsCount);
        for (key in this.separatorsCount) {
            if (this.separatorsCount[key] === Math.max.apply(null, Object.values(this.separatorsCount))) {
                // console.log(this.separatorValue[key]);
                this.string.split('\n').forEach(element => {
                    this.push(element.split(this.separatorValue[key]));
                    console.log(this);

                });

            }
        }

    } else {
        this.string.split('\n').forEach(element => {
            this.push(element.split(separator));

        });
    }
    // console.log(this.result);



};
CsvArray.prototype.generate = function(separatorGenerate) {

    this.separatorGenerate = separatorGenerate || "";
    this.generateResult = "";
    if (!this.separatorGenerate) {
        this.forEach((elem, index, array) => {
            if (index < array.length - 1) {
                this.generateResult += elem.join(",") + "\n";
            } else this.generateResult += elem.join(",");

        });
    } else {
        this.forEach((elem, index, array) => {
            if (index < array.length - 1) {
                this.generateResult += elem.join(this.separatorGenerate) + "\n";
            } else this.generateResult += elem.join(this.separatorGenerate);

        });
    }
    // console.log(this.result);
    return this.generateResult;
};

//#region  test values
let testString = "Lorem Ipsum - ,це текст-\"риба\" ,що використову,ється в друкарств\nі та дизайні. L,orem Ip,sum є фактично ст,андартною\n \"рибою\" аж з, XVI сторіччя кол,и неві,домий дру";
let testArray = [
    ["Lorem Ipsum - ", "це текст-\"риба\" ", "що використову", "ється в друкарств"],
    ["і та дизайні. L", "orem Ip", "sum є фактично ст", "андартною"],
    [" \"рибою\" аж з", " XVI сторіччя кол", "и неві", "домий дру"]
];
let trueString = "Lorem Ipsum - ,це текст-\"риба\" ,що використову,ється в друкарств\nі та дизайні. L,orem Ip,sum є фактично ст,андартною\n \"рибою\" аж з, XVI сторіччя кол,и неві,домий дру";
//#endregion
let convertor = new Csv();
let table = new CsvArray();
// console.log(convertor.parse(testString));
let arrayTestString1 = "zxc,qwe,92\n12,asd,73";
let arrayTestString2 = "zxc;qwe;92\n12;asd;73";
table.parse("42,qwe,92\n12,asd,73");
console.log(table.length, table[0][0], table[1][2]);
table[0][0] = 'zxc';
console.log(table.generate());
console.log(table.generate(';'));
console.log(arrayTestString1 === table.generate());
console.log(arrayTestString2 === table.generate(';'));

// console.log(convertor.parse(testString));
// console.log(convertor.generate(testArray));
// console.log(trueString === convertor.generate(testArray));
// // console.log(Object.getPrototypeOf(convertor).hasOwnProperty('parse'));