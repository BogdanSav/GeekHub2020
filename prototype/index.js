function Csv() {
    this.parse = function(string, separartor = "") {
        if (string.includes(";")) {
            console.log("work");
        }
    }
}
let testString = "Євпак Віктор Миколайович;ФОП;1985";
let convertor = new Csv();
convertor.parse(testString);