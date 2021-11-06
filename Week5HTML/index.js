

console.log( $('td'));

let td = $('td');

console.log(td[0]);

let taken = [];
let xss = [];
let oss = [];

let end;

let turn = 0;
let turnText = ['Circle','Ex'];

let GameState = $('#GameState').get(0);

let WinX = document.createElement('h1');
WinX.setAttribute('class','bg-info');
WinX.innerHTML = 'X Wins';
let WinO = document.createElement('h1');
WinO.setAttribute('class','bg-success');
WinO.innerHTML = 'O Wins';
let WinTie = document.createElement('h1');
WinTie.setAttribute('class','bg-warning');
WinTie.innerHTML = 'Tie';


console.log(GameState);

for (let i = 0; i < td.length; i++) {
    let d = td.get(i);
    d.addEventListener('click', (c) => {
        let square = c.target;
        if (!taken.includes(square.id) && end != true) {
            square.src = `${turnText[turn]}.png`;
        turn = ((turn == 0) ? 1 : 0);
        console.log(square.id);
        taken.push(square.id);
        if (turn == 0) {
            xss.push(parseInt(square.id));
        } else {
            oss.push(parseInt(square.id));
        }
        }
        if (oss.length > 2) {
            if (checkWin(((turn == 0) ? xss : oss),parseInt(square.id))) {
                end = true;
                if (turn == 0) {
                    GameState.appendChild(WinX);
                } else {
                    GameState.appendChild(WinO);
                }
            } else if (taken.length == 9) {
                end = true;
            GameState.appendChild(WinTie)
            }
        }
        })
    
}

function checkWin(arr,sq) {
    if (sq == 1 || sq == 3 || sq == 7 || sq == 9) {
        if (arr.includes(5)) {
            if (sq == 1 && arr.includes(9) || sq == 9 && arr.includes(1)) {
                return true;
            } else if (sq == 3 && arr.includes(7) || sq == 7 && arr.includes(3)) {
                return true;
            }
        }
    }
    if (sq < 4) {
        if (arr.includes(1) && arr.includes(2) && arr.includes(3)) {
            return true;
        } else if ((arr.includes((sq+3)) && arr.includes(sq+6))) {
            return true;
        }
    } else if (sq < 7) {
        if (arr.includes(4) && arr.includes (5) && arr.includes(6)) {
            return true;
        } else if (arr.includes((sq-3)) && arr.includes((sq+3))) {
            return true;
        }
    } else {
        if (arr.includes(7) && arr.includes (8) && arr.includes(9)) {
            return true;
        } else if (arr.includes((sq-3)) && arr.includes((sq-6))) {
            return true;
        }
    }
}