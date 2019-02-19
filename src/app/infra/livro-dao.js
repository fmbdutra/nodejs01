class LivroDao{
    constructor(db){
        this._db = db;
    }

    lista(){
        return new Promise((resolve, reject) => {
            this._db.all(
                'SELECT * FROM livros',
                (erro, resultados) => {
                    if (erro) return reject('Não foi possível retornar livros');
                    
                    return resolve(resultados);
                }
            )
        })
    }
}

module.exports = LivroDao;