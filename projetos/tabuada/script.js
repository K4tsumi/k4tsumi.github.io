function tabuada() {
    var num1 = Number(document.getElementById('num_tab').value);
    var res = document.getElementById('res');
    var num2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var a = -1
/*
    while(a <= 10) {
        a++
        var b = num1 * //multiplica aqui e coloca o resultado em baixo
        res.innerHTML += `<p>${num1} x 0 = ${}</p>`
    }
*/
    res.innerHTML = `<p>${num1} x 0  = ${num2[0] * num1}</p>`;
    res.innerHTML += `<p>${num1} x 1  = ${num2[1] * num1}</p>`;
    res.innerHTML += `<p>${num1} x 2  = ${num2[2] * num1}</p>`;
    res.innerHTML += `<p>${num1} x 3  = ${num2[3] * num1}</p>`;
    res.innerHTML += `<p>${num1} x 4  = ${num2[4] * num1}</p>`;
    res.innerHTML += `<p>${num1} x 5  = ${num2[5] * num1}</p>`;
    res.innerHTML += `<p>${num1} x 6  = ${num2[6] * num1}</p>`;
    res.innerHTML += `<p>${num1} x 7  = ${num2[7] * num1}</p>`;
    res.innerHTML += `<p>${num1} x 8  = ${num2[8] * num1}</p>`;
    res.innerHTML += `<p>${num1} x 9  = ${num2[9] * num1}</p>`;
    res.innerHTML += `<p>${num1} x 10 = ${num2[10] * num1}</p>`;

}
