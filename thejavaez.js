function exercise(x) {
    function Exercising() {
    return `Todays exercise : ${x}`
    }
    return Exercising;
    }

    var run = exercise('running');
    console.log(run());
    var swim = exercise('swimming');
    console.log(swim()); 