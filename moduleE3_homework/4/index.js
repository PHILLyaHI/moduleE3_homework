function funcInterval(a, b) {
    let intevalFunction = setInterval(function(b, fn) {
        console.log(a);
        a++;
        if (a > b) {
            fn();
        };
    }, 1000, b, stopInterval);

    function stopInterval() {
        clearInterval(intevalFunction);
    };
};
funcInterval(4, 7);
