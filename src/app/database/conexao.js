import mysql from "mysql";

const conexao = mysql.createConnection({
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "internet",
  database: "bdcopa",
});

conexao.connect();

/**
 * Executa um codigo sql com ou sem valores
 * @param {string} sql inscrucao sql a ser executada
 * @param {string = id | [selecao, id]} valores a serem passados para o sql
 * @param {string} mensagemReject mensagem a ser exibida
 * @returns objeto da Promisse
 */
export const consulta = (sql, valores = "", mensagemReject) => {
  return new Promise((resolve, reject) => {
    conexao.query(sql, valores, (error, result) => {
      if (error) return reject(mensagemReject);
      // FAZER O PARSE DOS RESULTADOS
      const newResult = JSON.parse(JSON.stringify(result));
      return resolve(newResult);
    });
  });
};

export default conexao;
