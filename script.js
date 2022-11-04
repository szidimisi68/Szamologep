function muveletek(muvelet) {
    var szam1 = document.getElementById("bevitel1").value;
    var szam2 = document.getElementById("bevitel2").value;
    if (muvelet == "+") {
        document.getElementById("eredmeny").innerHTML = parseFloat(szam1) + parseFloat(szam2);
    }
    else if (muvelet == "-") {
        document.getElementById("eredmeny").innerHTML = parseFloat(szam1) - parseFloat(szam2);
    }
    else if (muvelet == "*") {
        document.getElementById("eredmeny").innerHTML = parseFloat(szam1) * parseFloat(szam2);
    }
    else if (muvelet == "/"){
        document.getElementById("eredmeny").innerHTML = parseFloat(szam1) / parseFloat(szam2);
    }
}