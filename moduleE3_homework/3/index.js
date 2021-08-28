function example(func) {


    func();


    return function() {

    }
}

function argFunc() {

    console.log(56 + 93)

}

const resultFunc = example(argFunc);

resultFunc();