use estudos //criar novo banco de dados
switched to db estudos // novo banco de dados criado

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