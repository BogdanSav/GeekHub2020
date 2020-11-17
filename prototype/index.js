function Csv() {
    this.parse = function(string, separator) {
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
            console.log(this.separatorsCount);
            for (key in this.separatorsCount) {
                if (this.separatorsCount[key] === Math.max.apply(null, Object.values(this.separatorsCount))) {
                    console.log(this.separatorValue[key]);
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
    this.generate = function(array, separator) {
        this.array = array;
        this.separator = separator || "";
        this.result;
        if (!this.separator) {
            array.forEach(elem => {
                this.result += elem.join(", ");
            });
        } else {
            array.forEach(elem => {
                this.result += elem.join(separator);
            });
        }
        // console.log(this.result);
        return this.result;
    }

}



let testString = "Євпак Віктор, Миколайович;ФОП;1985\nБондаренко Анатолій Васильович;міський голова;1974\nМойсієнко Василь Миколайович;перший проректор;1965";
let testArray = [
    ['Євпак Віктор, Миколайович', 'ФОП', '1985'],
    ['Бондаренко Анатолій Васильович', 'міський голова', '1974'],
    ['Мойсієнко Василь Миколайович', 'перший проректор', '1965']
];
let convertor = new Csv();
// console.log(convertor.parse(testString));
convertor.parse(testString);
convertor.generate(testArray);