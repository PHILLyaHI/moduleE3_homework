// Version 0.5
function nums(a, b) {
    while (a <= b) {
        console.log(a)
        a++
    }
}
const intervalId = setInterval(nums, 1000, 5, 15)
setTimeout(function() {
    clearInterval(intervalId)
}, 1500)


// Не успел дождаться ответа ментора на вопрос
// поэтому код немного не доделоний, а ведь дэдлайн идет.