function simpleOrNot(num) {
    for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
        if (num > 1000) {
            return 'Данные неверны.';
        } else if (num % i === 0) {
            return "Число " + num + " непростое.";
        }
    }
    if (num => 1 == true) {
        return "Число " + num + " простое.";
    }
}

console.log(simpleOrNot(3));