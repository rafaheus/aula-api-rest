const bancoDeDados = {
    identificadorInstrutor: 3, identificadorAula: 3,
    instrutores: [
        { id:1, nome: 'Guido', email: 'guido@email.com', status: true },
        { id:2, nome: 'Dani', email: 'Dani@email.com', status: true }
    ],
    aulas: [
        { id:1, instrutor_id:1, titulo: 'Aula 1 Backend', descricao: 'Aula 1 de Backend' },
        { id:2, instrutor_id:2, titulo: 'Aula 2 Backend', descricao: 'Aula 2 de Backend' }
    ]
};

module.exports = bancoDeDados