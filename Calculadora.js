function captura() {
    var n1; 
    let random = Math.random(); 
    random = random * 100 + 1; 
    random = Math.trunc(random);
    console.log(random);
    let intentos = 0; 
    while(true)
    {
        n1  =Number.parseInt(prompt("Captura un valor"));
        if(n1 == random)
        {            
            alert("Es correcto"); 
            alert("Lo lograste en " + (intentos) + " Intentos");
            break; 
        }
        if(n1 < random)
        {
            alert("Es un numero chico");   
        }
        if(n1 > random)
        {
            alert("Es un numero grande"); 
        }
        intentos += 1;
    }
}
