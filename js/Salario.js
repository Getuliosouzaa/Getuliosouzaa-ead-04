class Salario {
    /**
     * @param {number} pSalarioBruto
     */
    constructor(pSalarioBruto){
      
        // Parametros 

        this._salarioBruto = undefined;
        this._descontoINSS = undefined;
        this._descontoIRRF = undefined;
        
        this._validarValor(pSalarioBruto);
        this._salarioBruto = pSalarioBruto;
        this.descontoINSS;
        this.descontoIRPF;
        Object.freeze(this);        

    }

    // VALIDAÇÂO DOS PARAMETROS.

    _validarValor(valor){
        if (typeof valor !== 'number' || valor < 0){
            throw new Error('O salario dever ser maior ou igual a zero!!');
        }
    }

// Saida de dados Os Gets

    get salarioBruto(){
        return this._salarioBruto;
    }
    get descontoINSS(){
        if(this._salarioBruto <= 1693.72){
            this._descontoINSS = Number((this._salarioBruto * 0.08).toFixed(2));
            return this._descontoINSS;
        }
        else{
            if(this._salarioBruto <=2822.90){
                this._descontoINSS = Number((this._salarioBruto * 0.09).toFixed(2));
                return this._descontoINSS;
            }
            else{
                if(this._salarioBruto <=5645.80){
                    this._descontoINSS = Number((this._salarioBruto * 0.11).toFixed(2));
                    return this._descontoINSS;
                }
                else{
                    this._descontoINSS = 621.04;
                    return this._descontoINSS;
                }
            }
        }
    }
 get descontoIRPF(){
    let baseCalculo = this._salarioBruto-this._descontoINSS
    if(baseCalculo <= 1903.98){
         this._descontoIRRF = 0.00;
            return this._descontoIRRF;
 }

  else{
    if(baseCalculo <= 2826.65){
         this._descontoIRRF = Number(((baseCalculo *0.075)-142.80).toFixed(2));
        return this._descontoIRRF;
 }
  else{
     if(baseCalculo <=3751.05){
      this._descontoIRRF = Number(((baseCalculo *0.15)-354.80).toFixed(2));
         return this._descontoIRRF;
 }
    else{
        if(baseCalculo <=4664.68){
         this._descontoIRRF = Number(((baseCalculo *0.225)-636.13).toFixed(2));
            return this._descontoIRRF;
}
        else{
            this._descontoIRRF = Number(((baseCalculo *0.275)-869.36).toFixed(2));
         return this._descontoIRRF;
     }
   }
 }
}

}

    get totalDescontos(){
        return this._descontoINSS + this._descontoIRRF;
    }
    get salarioLiquido(){
        return this._salarioBruto - this._descontoINSS - this._descontoIRRF;

    }
}
