function checkResult1() {
    let n1 = [];
    n1.push(Number(document.getElementById('insertNmbr1').value));
    n1.push(Number(document.getElementById('insertNmbr2').value));
    
    let math1 = (n1[0] * n1[1]) / 100;
    
    if (insertNmbr1.length == 0 || insertNmbr2.length == 0) {
        alert("Preencha corretamente todos os campos antes de continuar")
    } else {
    res1.innerHTML = `<strong>${n1[0]}% de ${n1[1]} é ${math1.toLocaleString()}</strong>.
    <p>Para realizar esse tipo de cálculo, basta multiplicar o primeiro valor pelo segundo e, em seguida, dividir o resultado por 100 (cem).</p>
    <p>No caso: <em>(${n1[0]} x ${n1[1]}) / 100</em></p>`;
    }
}
function erase1() {
    res1.innerHTML = ``;

}

function checkResult2() {
    let n2 = [];
    n2.push(Number(document.getElementById('insertNmbr3').value));
    n2.push(Number(document.getElementById('insertNmbr4').value));
    
    let math2 = (100 * n2[0]) / n2[1];

    res2.innerHTML = `<strong>${n2[0]} corresponde a ${math2.toLocaleString()}% de ${n2[1]}.</strong>
    <p>Para realizar esse tipo de cálculo, basta multiplicar o primeiro valor por 100 (cem) e, em seguida, dividir o resultado pelo segundo valor.</p>
    <p>No caso: <em>(${n2[0]} x 100) / ${n2[1]}</em><p>`;
}

function erase2() {
    res2.innerHTML = ``;
}