function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Vinicius',
	idade: 30,
};

const pessoa2 = {
	nome: 'Lais',
	idade: 20,
};

const pessoa3 = {
	nome: 'Jonas',
	idade: 10,
};

console.log(calculaIdade.call(pessoa2, 40));
console.log(calculaIdade.apply(pessoa1, [24]));
