//use estudos //criar novo banco de dados
//switched to db estudos // novo banco de dados criado

//Criar nova shema
db.createCollection("estudantes")

//Insert com NoSql
db.estudantes.insertOne({nome: "Guilherme", curso: "Eng de Software", gpa: 3.5})
//Retorno foi True, que foi inserido com sucesso
/*{
    acknowledged: true,
    insertedId: ObjectId('67be0bcfb1bd16f0e002c103')
  }

  esta aqui o dado inserido no banco.
  {
  "_id": {
    "$oid": "67be0bcfb1bd16f0e002c103"
  },
  "nome": "Guilherme",
  "curso": "Eng de Software",
  "gpa": 3.5
}  
  */

db.estudantes.insertOne({id: 432, nome: "Clarice", curso: "Ciencia da Computação", gpa: 3.9
    , premios: ["Primeiro lugar na Feira de software", "Terceiro lugar no SoftIA"]
})

/*
Retorno desse insert, colocando um array de primações do aluno teve.
{
  "_id": {
    "$oid": "67be0d2bb1bd16f0e002c104"
  },
  "id": 432,
  "nome": "Clarice",
  "curso": "Ciencia da Computação",
  "gpa": 3.9,
  "premios": [
    "Primeiro lugar na Feira de software",
    "Terceiro lugar no SoftIA"
  ]
}
*/

db.estudantes.insertOne({nome: "Maria", curso: "ADS", gpa: 3.7, grades:[90,88,95,78]})
/* 
RETORNO 
{
  "_id": {
    "$oid": "67be155bb1bd16f0e002c105"
  },
  "nome": "Maria",
  "curso": "ADS",
  "gpa": 3.7,
  "grades": [
    90,
    88,
    95,
    78
  ]
}
  OUTRA INSERÇÃO
*/


db.estudantes.insertOne({nome: "Joao", curso: "Sistema de Informação", gpa: 3.2, contato: {telefone: "62438790923", email: "joao@email.com"}})
db.estudantes.insertOne({NamedNodeMap: "Phil", curso: "Matematica", gpa: 2.5, data_inicio: new Date("2021-08-23")})
db.estudantes.insertOne({_id: 4, name: "Joel", major: "Desenvolvimento de Sistemas", gpa: 3.2})
db.estudantes.insertMany([
     {name: "Julia", major: "Ciencia da Computação", gpa: 2.7},
     {name: "Andreas", major: "Matematica", gpa: 4.0, premios: ["Nobel de 2025"]}
])
/* 
Todos os insertes feitos no banco de dados, 
detalhe que o insertMany e para inserir  mais de um por vez 
repara que eu deixei major no nome depois vou fazer um drop e atualizar uma
 e na outra fazer um update
*/

db.estudantes.find({})
/* 
para trazer todos os dados
*/

db.estudantes.find({}).limit(3)
//esse ja pega apenas os 3 primeiros estudantes

db.estudantes.find({}).sort({nome: 1})
//seleciona todos os dados e ordena de A a Z por nome 

db.estudantes.find({}).sort({gpa: -1, nome: 1})
//ordena do maior para o menor no gpa e ordena de A a Z no nome

db.estudantes.find( {curso: "Sistema de Informação"} )
//traz o dado que contem essa infromação.

db.estudantes.find( { $or: [ {nome: "Guilherme"}, {curso: "Eng de Software"} ] } )
//para trazer todos com o nome guilherme ou todos que fazem o curso de eng de software destaque para $or: 

db.estudantes.find( {gpa: {$gt: 3.4} } )
//traga todos os dados com o gpa acima de 3.4 destaque para o $gt

db.estudantes.find( {gpa: {$lte: 3.2} } ).sort({gpa: -1})
//traga todos os dados com a gpa abaixo ou igual a 3.2 

db.estudantes.find( {nome: {$in: ["Guilherme", "Maria"]} } )
// usando o $in para encontrar tudo que estiver dentro do array

db.estudantes.find( {premios: {$exists: true} } ) 
// pegar todos os estudantes que tem premio true
// para pegar todos que não tem premio e so colcoar false

db.estudantes.find({nome: {$type: 2} })
// Type list - https://docs.mongodb.com/manual/reference/bson-types/
//pegar todos os dados que são do nome do tipo string, esse $type 2 é string como o $type 1 é double

db.estudantes.find( {grades: {$elemMatch: { $gte: 80} } } )
// todos estudantes que tem uma nota maior que 80 $gte - significa maior que e o 
// elemMatch significa que tem que pelos um elemento do array atenda a condição dentro dele, tipo o array de grade não o array de condições 

db.estudantes.find( {grades: {$size: 4 } } )
// encontre apenas o estudante que tenha 4 notas inseridas, size 4

db.estudantes.updateOne(
  { nome: "Maria" },
  { 
    $set: { 
      grades: [100, 80, 90, 70, 60]  // Substitui o array inteiro se ele não existir
    } 
  }
)
//atualizar um dado, primeiro voce coloca um filtro { nome: "Maria" } aonde estiver nome maria coloca no array grades esses valores
//  grades: [100, 80, 90, 70, 60]