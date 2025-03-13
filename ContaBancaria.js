class ContaBancaria {

    #saldo = 100;
    
    constructor(cliente, saldoInicial) {
        this.cliente = cliente;
        this.#saldo = saldoInicial;   
    }

    getSaldo() {
        return this.#saldo;

    }

    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor;
            console.log("Depósito de R$" + valor + " realizado com sucesso");
        } else {
            console.log("Valor inválido para depósito.")
        }
    }

    sacar(valor) {
        if (valor <= this.#saldo && valor > 0) {
            this.#saldo -= valor;
            console.log("Saque de R$" + valor + " realizado com sucesso.");
        } else {
            console.log("Saldo insuficiente ou valor inválido para saque.");
        }
    }
}

    const minhaConta = new ContaBancaria("Daniel", 1000);

    console.log("Saldo: " + minhaConta.getSaldo());
    minhaConta.depositar(500);
    minhaConta.sacar(300);