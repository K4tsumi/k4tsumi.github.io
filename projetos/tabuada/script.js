function tabuada() {
    var num1 = Number(document.getElementById('num_tab').value);
    var res = document.getElementById('res');
    var num2 = 0;
    var a = 0;
    res.innerHTML = ``; //if i dont put it here, the following calcutions will be added at the end

    while(a <= 10) { //num 10 defines the limit of the calculation
            var b = num1 * num2;
            res.innerHTML += `<p>${num1} x ${a} = ${b}</p>`;
            a++; //var a is only used to control
            num2++; //var used to increase the multiplier
        }
}
