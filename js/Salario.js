
class Salario{    
    
    constructor(pSalarioBruto){
        
        this._salarioBruto = undefined;
        this._descontoINSS = undefined;
        this._descontoIRPF = undefined;
        
        this._validarValor(pSalarioBruto);
        this._salarioBruto = pSalarioBruto;
        
        this._calculos();
        this._calculosIR();
        this. _retorno()
        
        Object.freeze(this);
    }    
    _validarValor(valor){
        if (typeof valor !== 'number' || valor < 0){
            throw new Error('O salario dever ser maior ou igual a zero!!');
        }
    }
    
// Caculos INSS
    _calculos() {
        if(this._salarioBruto <= 1693.72){
            return this._desINSS = this._salarioBruto * 0.08;
        }
        if(this._salarioBruto > 1693.72 && this._salarioBruto <=2822.90){
            return this._desINSS =  this._salarioBruto * 0.09;
        }
        if(this._salarioBruto > 2822.90 && this._salarioBruto <= 5645.80){
            return this._desINSS =  this._salarioBruto * 0.11;
        }else {
            return this._desINSS =  621.04;
        }
        
        
    }
    
// Calculos IRPF
    _calculosIR(){
        this._baseIRPF= this._salarioBruto - this._desINSS;

        if(this._baseIRPF >= 1903.99 && this._baseIRPF <= 2826.65){
            this._descontoIRPF= this._baseIRPF * 0.075;
            return this._deducaoIRPF =this._descontoIRPF - 142.80;
        }
        if(this._baseIRPF > 2826.65 && this._baseIRPF <= 3751.05){
            this._descontoIRPF= this._baseIRPF * 0.15;
            return  this._deducaoIRPF = this._descontoIRPF - 354.80;
            
        }
        if(this._baseIRPF > 3751.05 && this._baseIRPF <= 4664.68){
            this._descontoIRPF= this._baseIRPF * 0.225;
            return  this._deducaoIRPF = this._descontoIRPF - 636.13; 
            
        }else{
            this._descontoIRPF= this._baseIRPF * 0.275;
            return  this._deducaoIRPF = this._descontoIRPF - 869.36;
            
        }
    }
    
    _retorno(){
         return this.salLiquido = this._salarioBruto - this._desINSS - this._deducaoIRPF;
        
    }
  
// GETS
get salarioBruto(){
    return this._salarioBruto;
}
get descontoINSS(){
    return Number (this._desINSS.toFixed(2));   
}
get descontoIRPF(){
    return Number (this._deducaoIRPF.toFixed(2));   
}
get totalDescontos(){
    return Number ((this._desINSS + this._deducaoIRPF).toFixed(2));   
}
get salarioLiquido(){
    return Number (this.salLiquido.toFixed(2));
}
}
