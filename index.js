var myWork = [];
for (var i = 1; i <= 10; i++) {
    var lesson = {
        name: "lesson " + i,
        status: i % 2 != 0,
    };
    myWork.push(lesson);
}
console.log(myWork);
