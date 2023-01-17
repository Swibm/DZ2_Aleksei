const box = document.querySelector(".box")
let positionX = 0
let positionY = 0

const handleBoxMove = () => {
    if(positionX < 450 && positionY == 0) {
            positionX+=10
            box.style.left = `${positionX}px`
            setTimeout(handleBoxMove, 25)
        }
    else if (positionY < 450 && positionX == 450) {
        positionY+=10
        box.style.top = `${positionY}px`
        setTimeout(handleBoxMove, 25)
    }
    else if (positionY == 450 && positionX > 0) {
        positionX-=10
        box.style.left = `${positionX}px`
        setTimeout(handleBoxMove, 25)
    }
    else  {
        positionY-=10
        box.style.top = `${positionY}px`
        setTimeout(handleBoxMove, 25)
    }
    }