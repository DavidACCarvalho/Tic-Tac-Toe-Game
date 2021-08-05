const box = document.querySelectorAll('.box');
const player1 = [];
const player2 = [];

let counter = 0;

function addHandler(event) {
    
    counter++
    event.target.removeEventListener('click', addHandler);
    event.target.addEventListener('click', alertInvalid);

    if (counter % 2 != 0) {
        event.target.classList.add('player1');
        player1.push(event.target.dataset.position);
        let newStr1 = player1.join('');
        let win = 'Player 1 win';
        winConfirm(newStr1, win);
    }else {
        event.target.classList.add('player2');
        player2.push(event.target.dataset.position);
        let newStr2 = player2.join('');
        let win = 'Player 2 win';
        winConfirm(newStr2, win);

    }
}

function winConfirm(str, salut) {
    // Check the 8 possible moves to win
    console.log(str);
    if (str.includes('5') && ( str.includes('1') && str.includes('9') || str.includes('7') && str.includes('3') || str.includes('2') && str.includes('8') || str.includes('4') && str.includes('6'))) {
        alert(salut);
        resetGame();
    }else if (str.includes('1') && (str.includes('2') && str.includes('3') || str.includes('4') && str.includes('7'))) {
        alert(salut);
        resetGame();
    }else if (str.includes('9') && (str.includes('8') && str.includes('7') || str.includes('6') && str.includes('3'))) {
        alert(salut);
        resetGame();
    }else if (str.length == 5) {
        alert('Tied Game');
        resetGame();
    }
}

function clearInvalidEvent() {
    for(let i = 0; i < box.length ; i++) {
      box[i].removeEventListener('click', alertInvalid);
    }
}

function clearCLass() {
    for(let i = 0; i < box.length ; i++) {
        if(box[i].classList.contains('player1')){
            box[i].classList.remove('player1');
        }else {
            box[i].classList.remove('player2');
        }
   }
}
function clearArrays() {
    let i = 0;
    while (i < player1.length || i < player2.length) {
        player1.pop();
        player2.pop();
    }
}

function resetGame() {
    counter = 0;
    clearInvalidEvent();
    clearCLass();
    clearArrays();
    init();
}

function alertInvalid() {
    return alert('Invalid Move');
}

function init() {
    for(let i = 0; i < box.length ; i++) {
        box[i].addEventListener('click', addHandler);
    }
}

init();