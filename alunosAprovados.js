const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Vinicius',
		nota: 6,
		turma: '2C',
	},
	{
		nome: 'Jennifer',
		nota: 10,
		turma: '2C',
	},
];

function alunosAprovados(alunos, media) {
	let aprovados = [];
	for (let i = 0; i < alunos.length; i++) {
		// if (alunos[i].nota > media) {
		// 	aprovados.push(alunos[i].nome);
		// }

		let { nota, nome } = alunos[i];
		if (nota >= media) {
			aprovados.push(nome);
		}
	}

	return aprovados;
}

console.log(alunosAprovados(alunos, 8));