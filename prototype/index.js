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


}
Csv.prototype.generate = function(array, separatorGenerate) {
    this.array = array;
    this.separatorGenerate = separatorGenerate || "";
    this.generateResult = "";
    if (!this.separatorGenerate) {
        array.forEach(elem => {
            this.generateResult += elem.join(", ") + "\n";
        });
    } else {
        array.forEach(elem => {
            this.generateResult += elem.join(separatorGenerate) + "\n";
        });
    }
    // console.log(this.result);
    return this.generateResult;
}

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

                });

            }
        }

    } else {
        this.string.split('\n').forEach(element => {
            this.push(element.split(separator));

        });
    }
    // console.log(this.result);



}
CsvArray.prototype.generate = function(array, separatorGenerate) {
    this.array = array;
    this.separatorGenerate = separatorGenerate || "";
    this.generateResult = "";
    if (!this.separatorGenerate) {
        array.forEach(elem => {
            this.generateResult += elem.join(", ") + "\n";
        });
    } else {
        array.forEach(elem => {
            this.generateResult += elem.join(separatorGenerate) + "\n";
        });
    }
    // console.log(this.result);
    return this.generateResult;
}


let testString = "Євпак Віктор Миколайович;ФОП;1985\nБондаренко Анатолій Васильович;міський голова;1974\nМойсієнко Василь Миколайович;перший проректор;1965";
let testArray = [
    ['Євпак Віктор, Миколайович', 'ФОП', '1985'],
    ['Бондаренко Анатолій Васильович', 'міський голова', '1974'],
    ['Мойсієнко Василь Миколайович', 'перший проректор', '1965']
];

// let convertor = new Csv();
// let csvarr = new CsvArray();
// console.log(convertor.parse(testString));
// csvarr.parse(testString)
// console.log(csvarr.length, csvarr[0][0], csvarr[1][2]);
// console.log(convertor.parse(testString));
// console.log(convertor.generate(testArray));
// // console.log(Object.getPrototypeOf(convertor).hasOwnProperty('parse'));