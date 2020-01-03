var playerO = "O";
var playerX = "X";
var player = playerO;

var buttons = document.getElementsByTagName("button");

for (var current of buttons) {
    current.addEventListener("click", function(event) {
        if (this.textContent != playerX && this.textContent != playerO) {
            this.textContent = player;
            togglePlayer();

            var diagonal1 =
                buttons[0].textContent == playerO &&
                buttons[4].textContent == playerO &&
                buttons[8].textContent == playerO;

            var diagonal2 =
                buttons[2].textContent == playerO &&
                buttons[4].textContent == playerO &&
                buttons[6].textContent == playerO;

            var vertical1 =
                buttons[0].textContent == playerO &&
                buttons[3].textContent == playerO &&
                buttons[6].textContent == playerO;

            var vertical2 =
                buttons[1].textContent == playerO &&
                buttons[4].textContent == playerO &&
                buttons[7].textContent == playerO;

            var vertical3 =
                buttons[2].textContent == playerO &&
                buttons[5].textContent == playerO &&
                buttons[8].textContent == playerO;

            var horizontal1 =
                buttons[0].textContent == playerO &&
                buttons[1].textContent == playerO &&
                buttons[2].textContent == playerO;

            var horizontal2 =
                buttons[3].textContent == playerO &&
                buttons[4].textContent == playerO &&
                buttons[5].textContent == playerO;

            var horizontal3 =
                buttons[6].textContent == playerO &&
                buttons[7].textContent == playerO &&
                buttons[8].textContent == playerO;

            if (
                diagonal1 ||
                diagonal2 ||
                horizontal1 ||
                horizontal2 ||
                horizontal3 ||
                vertical1 ||
                vertical2 ||
                vertical3
            ) {
                setTimeout(() => {
                    alert("player O wins!");
                    window.location.reload(true);
                }, 100);
            }

            var diagonal1 =
                buttons[0].textContent == playerX &&
                buttons[4].textContent == playerX &&
                buttons[8].textContent == playerX;

            var diagonal2 =
                buttons[2].textContent == playerX &&
                buttons[4].textContent == playerX &&
                buttons[6].textContent == playerX;

            var vertical1 =
                buttons[0].textContent == playerX &&
                buttons[3].textContent == playerX &&
                buttons[6].textContent == playerX;

            var vertical2 =
                buttons[1].textContent == playerX &&
                buttons[4].textContent == playerX &&
                buttons[7].textContent == playerX;

            var vertical3 =
                buttons[2].textContent == playerX &&
                buttons[5].textContent == playerX &&
                buttons[8].textContent == playerX;

            var horizontal1 =
                buttons[0].textContent == playerX &&
                buttons[1].textContent == playerX &&
                buttons[2].textContent == playerX;

            var horizontal2 =
                buttons[3].textContent == playerX &&
                buttons[4].textContent == playerX &&
                buttons[5].textContent == playerX;

            var horizontal3 =
                buttons[6].textContent == playerX &&
                buttons[7].textContent == playerX &&
                buttons[8].textContent == playerX;

            if (
                diagonal1 ||
                diagonal2 ||
                horizontal1 ||
                horizontal2 ||
                horizontal3 ||
                vertical1 ||
                vertical2 ||
                vertical3
            ) {
                setTimeout(() => {
                    alert("player X wins!");
                    window.location.reload(true);
                }, 100);
            }
        }
    });
}

function togglePlayer() {
    if (player == "O") {
        player = playerX;
    } else {
        player = playerO;
    }
}

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.innerHTML === "Hello") {
        x.innerHTML = "Swapped text!";
    } else {
        x.innerHTML = "Hello";
    }
}

var data = {
    a: 2,
    b: {
        c: 5
    }
};

data.b.c;
