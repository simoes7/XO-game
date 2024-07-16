
t = [" "," "," "," "," "," "," "," "," "];

function Jeu(i){

    if (t[i] == " "){
        document.getElementById("dv"+i).innerHTML = '<img src="xo_logo.jpg">'
        t[i] = "X";
        console.log(t.length)

        var index = getRandomIndex();
        document.getElementById("dv" + index).innerHTML = '<img src="xo(1).jpg">'
        t[index] = "O";

        // horizental
        for (var i = 0 ; i < 9 ; i=i+3){
            if (t[i] == "X" && t[i] == t[i+1] && t[i+1] == t[i+2]){
                alert(" X won ");
                Restart();
                return;
            }
            if (t[i] == "O" && t[i] == t[i+1] && t[i+1] == t[i+2]){
                alert(" O won ");
                Restart();
                return;
            }

        }

        //verticale
        for (var i = 0 ; i < 9 ; i++){
            if (t[i] == "X" && t[i] == t[i+3] && t[i+3] == t[i+6]){
                alert(" X won ");
                Restart();
                return;
            }
            if (t[i] == "O" && t[i] == t[i+3] && t[i+3] == t[i+6]){
                alert(" O won ");
                Restart();
                return;
            }
        }

        //diagonale
        if (t[0] == "X" && t[0] == t[4] && t[4] == t[8]){
            alert("X won");
            Restart();
            return;
        }

        if (t[2] == "X" && t[2] == t[4] && t[4] == t[6]){
            alert("X won");
            Restart();
            return;
        }

        if (t[0] == "O" && t[0] == t[4] && t[4] == t[8]){
            alert("O won");
            Restart();
            return;
        }

        if (t[2] == "O" && t[2] == t[4] && t[4] == t[6]){
            alert("O won");
            Restart();
            return;
        }


    }


}


function getRandomIndex(){
    var emptyTable = [];
    for (var i = 0 ; i < t.length ; i++){
        if (t[i] == " "){
            emptyTable.push(i);
        }
    }

    var emptyindex = Math.floor(Math.random() * emptyTable.length);
    return emptyTable[emptyindex];
}

function Restart(){
    for (var i = 0 ; i<9 ; i++){
        document.getElementById("dv"+i).innerHTML = "";
    }
    t = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
}
