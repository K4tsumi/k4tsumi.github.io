function count() {
    let initialNmbr = document.getElementById("initialNmbr");
    let endNmbr = document.getElementById("endNmbr");
    let counterNmbr = document.getElementById("counterNmbr");
    let result = document.getElementById("result");
    
    if (initialNmbr.value.length == 0 || endNmbr.value.length == 0 || counterNmbr.value.length == 0) {
        // = `Impossível contar `;
        result.innerHTML = `Ops! Verifique se todos os dados foram preenchidos corretamente.`;
    } else {
        result.innerHTML = `Contando:`;

        let ini = Number(initialNmbr.value);
        let end = Number(endNmbr.value);
        let counter = Number(counterNmbr.value);
        
        //Quando for inserido 0 no contador, o valor será alterado para 1.
        if (counter == 0) {
            window.alert('Impossível contar. Será considerando Contador = 1.');
            counter = 1;
        }

        if (ini < end) {
            //Counting up
            for (Nmbr = ini; Nmbr < end; Nmbr += counter) {
                result.innerHTML += `${Nmbr} \u{23E9}`; //you also can use \u{23E9} to insert the emoji
            }
        } else {
            //Counting down
            for (var Nmbr = ini; Nmbr > end; Nmbr -= counter) {
                result.innerHTML += `${Nmbr} \u{23E9}`; //you also can use \u{23E9} to insert the emoji
            }
        }
        result.innerHTML += `\u{1F3C1}`;
    }
    
}
