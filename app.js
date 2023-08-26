const ingresos = [];

const egresos = [];


function Mostrar(){
    let ingres = "";
    for(i of ingresos){
        ingres += '<li class="ingreso">' + formatter.format(i._monto) + " " +i.evento+ " "+'<button class="button-eliminar" onclick="eliminaringre('+i.id +')">X</button>'+'</li>';
    }
    let listIngre = document.getElementById("list-ingre");
    listIngre.innerHTML = ingres;


    let egres = "";
    for(i of egresos){
        egres += '<li class="egreso">' + formatter.format(i._monto) + " " +i.evento+ " "+'<button class="button-eliminar" onclick="eliminaregre('+i.id +')">X</button>'+'</li>';
    }
    let listEgre = document.getElementById("list-egre");
    listEgre.innerHTML = egres;

    calculartotal();
    restart();
}

function Agregar(){

    let monto = parseInt(document.getElementById("monto").value);
    let asunto = document.getElementById("asunto").value;
    let combo = document.getElementById("combo").value;
    if(combo === "+"){
        if(isNaN(monto) === false && monto>0 && asunto.length > 0 && asunto != " "){
            const newingre = new Ingreso(monto,asunto);
            ingresos.push(newingre);

        }else{
            console.log("Error en alguno campo");
        }

    }else if (combo === "-"){
        if(isNaN(monto) === false && monto>0 && asunto.length > 0 && asunto != " "){
            const newegre = new Egresos(monto,asunto);
            egresos.push(newegre);
        }else{
            console.log("Error en alguno de los campos");
        }
    }
    Mostrar();
    
}

function calculartotal(){
    
    let ingre = 0;
    for(i of ingresos){
        ingre +=i.monto;
    }

    let egres = 0;
    for(j of egresos){
        egres += j.monto;
    }
    total =  formatter.format((ingre - egres));
    document.getElementById("presupuesto").innerHTML =total ;
    document.getElementById("Ingresos").innerHTML = formatter.format(ingre);
    document.getElementById("Egresos").innerHTML =  "-" +formatter.format(egres);
}

const eliminaringre = (id) =>{
    let indiceEliminar = ingresos.findIndex(ingreso => ingreso.id === id);
    ingresos.splice(indiceEliminar,1);
    calculartotal();
    Mostrar();
    restart();
}

const eliminaregre = (id) =>{
    let indiceEliminar = egresos.findIndex(egreso => egreso.id === id);
    egresos.splice(indiceEliminar,1);
    calculartotal();
    Mostrar();
    restart();
}

function restart(){
    document.getElementById("form").reset();
}

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    
    
    //minimumFractionDigits: 0, //(esto es suficiente para números enteros, pero imprimirá 3500,10 como $3500,1)
    //maximumFractionDigits: 0, // (hace que 3500,99 se imprima como $2501)
    });