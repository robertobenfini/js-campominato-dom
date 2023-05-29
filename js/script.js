//variabile griglia
const grid = document.getElementById('grid');

//variabile bottone
let button = document.getElementById('btn');

//variabile select
let select = document.getElementById('difficulty');

//definizione funzione numero random
function num_random(min, max){
    return Math.floor(Math.random()*(max - min + 1) + min)
};

//variabile gameover
let gameOver = true;

//funzione click bottone
button.addEventListener('click',function(){

    //definizione constante array bombe
    let arrayBombs = [];
    
    //richiamo variabile gameover
    gameOver = true;

    //conteggio caselle senza bombo
    let clickforwin = 0

    //svoto la griglia
    grid.innerHTML='';

    //variabile valore select
    let difficulty = select.value;

    //funzione quadrati
    function create_square(){
        
        //creazione quadrati
        let square = document.createElement('div');
        
        return square;
    };

    //ciclo per i quadrati
    if(difficulty === '1'){
        for(let i=1; i<=100; i++){
            
            //variabile della funzione
            let square = create_square();

            //classe dimensione quadrati
            square.classList.add('square1');
            
            //stampa numeri quadrati
            square.innerText = i;
    
            //funzione click per colorare quadrato selezionato
            square.addEventListener('click', function(){
                if(!gameOver){
                    return
                };
                
                //numeri con bomba
                if(arrayBombs.includes(i)){
                    square.classList.add('red')
                    alert(`hai perso Punteggio: ${clickforwin}`)

                    gameOver=false
                }

                //numeri senza bomba
                else if(!arrayBombs.includes(i)){
                square.classList.add('clicked');
                //stampa in console numero cliccato
                console.log(i);

                //conteggio caselle senza bomba
                clickforwin++;

                //condizione se si vince
                if(clickforwin === (100 - 16)){
                    gameOver = false;
                    alert('Hai vinto')
                };
            };

            });
    
            //inserimento quadrati nell'HTML
            grid.append(square);
        };
       
        //popolamento array
        while (arrayBombs.length < 16) {
            const numeroCasuale = Math.floor(Math.random() * 100) + 1;
            if (!arrayBombs.includes(numeroCasuale)) {
              arrayBombs.push(numeroCasuale);
            }
        }
    }
    
    else if(difficulty === '2'){
        for(let i=1; i<=81; i++){
        
            //variabile della funzione
            let square = create_square();

            //classe dimensione quadrati
            square.classList.add('square2');
            
            //stampa numeri quadrati
            square.innerText = i;
    
            //funzione click per colorare quadrato selezionato
            square.addEventListener('click', function(){
                if(!gameOver){
                    return
                };
                
                //numeri con bomba
                if(arrayBombs.includes(i)){
                    square.classList.add('red')
                    alert(`hai perso Punteggio: ${clickforwin}`)

                    gameOver=false
                }

                //numeri senza bomba
                else if(!arrayBombs.includes(i)){
                square.classList.add('clicked');
                //stampa in console numero cliccato
                console.log(i);
                clickforwin++;
                
                //condizione se si vince
                if(clickforwin === (81 - 16)){
                    gameOver = false;
                    alert('Hai vinto')
                };
            }
            });
    
            //inserimento quadrati nell'HTML
            grid.append(square);
        };

        //popolamento array
        while (arrayBombs.length < 16) {
            const numeroCasuale = Math.floor(Math.random() * 81) + 1;
            if (!arrayBombs.includes(numeroCasuale)) {
              arrayBombs.push(numeroCasuale);
            }
        }
    }

    else{
        for(let i=1; i<=49; i++){
            
            //variabile della funzione
            let square = create_square();

            //classe dimensione quadrati
            square.classList.add('square3');
            
            //stampa numeri quadrati
            square.innerText = i;
    
            //funzione click per colorare quadrato selezionato
            square.addEventListener('click', function(){
                if(!gameOver){
                    return
                }
                //numeri con bomba
                if(arrayBombs.includes(i)){
                    square.classList.add('red')
                    alert(`hai perso Punteggio: ${clickforwin}`)

                    gameOver=false
                }

                //numeri senza bomba
                else if(!arrayBombs.includes(i)){
                square.classList.add('clicked');
                //stampa in console numero cliccato
                console.log(i);
                clickforwin++

                //condizione se si vince
                if(clickforwin === (49 - 16)){
                    gameOver = false;
                    alert('Hai vinto')
                }
            }
            });
    
            //inserimento quadrati nell'HTML
            grid.append(square);
        };

        //popolamento array
        while (arrayBombs.length < 16) {
            const numeroCasuale = Math.floor(Math.random() * 49) + 1;
            if (!arrayBombs.includes(numeroCasuale)) {
              arrayBombs.push(numeroCasuale);
            }
        };
    }
});
