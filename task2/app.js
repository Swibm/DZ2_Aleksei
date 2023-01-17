//dz2 вывести на экран таймер, который отчитывается с 0 до 60. При достижении 60 секунд вывести на экран какое-либо сообщение
const digit = document.querySelector(".seconds")
let startPoint = 0
digit.innerHTML = 0

const addSecond = () => {
    if (+digit.innerHTML < 60) {
        startPoint++
        digit.innerHTML = startPoint
        setTimeout(addSecond, 1000)
    }
    else {digit.innerHTML = "60 seconds have passed"}
}

addSecond()