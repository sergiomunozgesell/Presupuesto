class Ingreso{
    static IdIngreso = 0;

    constructor(monto,evento){
        this._monto = monto;
        this._evento = evento;
        this._id = ++Ingreso.IdIngreso;
    }

    get id (){
        return this._id;
    }

    get monto(){
        return this._monto;
    }

    set monto (monto){
        this._monto = monto;
    }

    get evento (){
        return this._evento;
    }
    
    set evento (evento){
        this._evento = evento;
    }

}

class Egresos{
    static IdEgreso = 0;

    constructor(monto, evento){
        this._monto = monto;
        this._evento = evento;
        this._id = ++Egresos.IdEgreso;
    }

    get id (){
        return this._id;
    }

    get monto(){
        return this._monto;
    }

    set monto (monto){
        this._monto = monto;
    }

    get evento (){
        return this._evento;
    }
    
    set evento (evento){
        this._evento = evento;
    }


}