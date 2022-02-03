<script>
let turn = 'X';
let gameEnded = false;

function handleClick(event) {
    if (gameEnded) {
        return
    }
    if (event.target.innerHTML == '') {
        event.target.innerHTML = turn;
        const topLeft = document.querySelector(".top.left").innerHTML;
        const topCenter = document.querySelector(".top.center").innerHTML;
        const topRight = document.querySelector(".top.right").innerHTML;

        const middleLeft = document.querySelector(".middle.left").innerHTML;
        const middleCenter = document.querySelector(".middle.center").innerHTML;
        const middleRight = document.querySelector(".middle.right").innerHTML;

        const bottomLeft = document.querySelector(".bottom.left").innerHTML;
        const bottomCenter = document.querySelector(".bottom.center").innerHTML;
        const bottomRight = document.querySelector(".bottom.right").innerHTML;

        //horizontal
        if(topLeft == turn && topCenter == turn && topRight == turn) {
            gameEnded = true;
            document.querySelector(".top.left").style.backgroundColor = 'yellow';
            document.querySelector(".top.center").style.backgroundColor = 'yellow';
            document.querySelector(".top.right").style.backgroundColor = 'yellow';
        }
        if(middleLeft == turn && middleCenter == turn && middleRight == turn) {
            gameEnded = true;
            document.querySelector(".middle.left").style.backgroundColor = 'yellow';
            document.querySelector(".middle.center").style.backgroundColor = 'yellow';
            document.querySelector(".middle.right").style.backgroundColor = 'yellow';
        }
        if(bottomLeft == turn && bottomCenter == turn && bottomRight == turn) {
            document.querySelector(".bottom.left").style.backgroundColor = 'yellow';
            document.querySelector(".bottom.center").style.backgroundColor = 'yellow';
            document.querySelector(".bottom.right").style.backgroundColor = 'yellow';
            gameEnded = true;
        }
        //vertical
        if(topLeft == turn && middleLeft == turn && bottomLeft == turn) {
            document.querySelector(".top.left").style.backgroundColor = 'yellow';
            document.querySelector(".middle.left").style.backgroundColor = 'yellow';
            document.querySelector(".bottom.left").style.backgroundColor = 'yellow';
            gameEnded = true;
        }
        if(topCenter == turn && middleCenter == turn && bottomCenter == turn) {
            document.querySelector(".top.center").style.backgroundColor = 'yellow';
            document.querySelector(".middle.center").style.backgroundColor = 'yellow';
            document.querySelector(".bottom.center").style.backgroundColor = 'yellow';
            gameEnded = true;
        }
        if(topRight == turn && middleRight == turn && bottomRight == turn) {
            document.querySelector(".top.right").style.backgroundColor = 'yellow';
            document.querySelector(".middle.right").style.backgroundColor = 'yellow';
            document.querySelector(".bottom.right").style.backgroundColor = 'yellow';
            gameEnded = true;
        }
        //diagonal
        if(topLeft == turn && middleCenter == turn && bottomRight == turn) {
            document.querySelector(".top.left").style.backgroundColor = 'yellow';
            document.querySelector(".middle.center").style.backgroundColor = 'yellow';
            document.querySelector(".bottom.right").style.backgroundColor = 'yellow';
            gameEnded = true;
        }
        if(topRight == turn && middleCenter == turn && bottomLeft == turn) {
            document.querySelector(".top.right").style.backgroundColor = 'yellow';
            document.querySelector(".middle.center").style.backgroundColor = 'yellow';
            document.querySelector(".bottom.left").style.backgroundColor = 'yellow';
            gameEnded = true;
        }

        //each time a turn is taken, change it to the next players turn
        if(turn == 'X') {
            turn = 'O';
        } else if(turn == 'O') {
            turn = 'X';
        }
    }
}
//get squares in the DOM
const squares = document.querySelectorAll(".row > div");
//attach click handlers to all squares with a for loop
for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function(event) {
        handleClick(event);
    });
}
</script>