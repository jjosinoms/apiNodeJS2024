import conexao from "../database/conexao.js";
//import conexao, { consulta } from "../database/conexao.js";

class SelecaoRepositpry {
  //CRUD


  create(selecao) {
    const sql = "INSERT INTO selecoes SET ?;";
    return new Promise((resolve, reject) => {
      conexao.query(sql, selecao, (error, result) => {
        if (error) return reject("Não foi possivel cadastrar.");
        // FAZER O PARSE DOS RESULTADOS
        const newResult = JSON.parse(JSON.stringify(result));
        return resolve(newResult);
      });
    });
  }
  /*
  create(selecao) {
    const sql = "INSERT INTO selecoes SET ?;";
    return consulta(sql, selecao, "Nao foi possivel cadastrar.")
  }
  */
  findAll() {
    const sql = "SELECT * FROM selecoes;";
    return new Promise((resolve, reject) => {
      conexao.query(sql, (error, result) => {
        if (error) return reject("Não foi possivel localizar.");
        // FAZER O PARSE DOS RESULTADOS
        const newResult = JSON.parse(JSON.stringify(result));
        return resolve(newResult);
      });
    });
  }

  findById(id) {
    const sql = "SELECT * FROM selecoes WHERE id = ? ;";
    return new Promise((resolve, reject) => {
      conexao.query(sql, id, (error, result) => {
        if (error) return reject("Não foi possivel localizar.");
        // FAZER O PARSE DOS RESULTADOS
        const newResult = JSON.parse(JSON.stringify(result));
        return resolve(newResult);
      });
    });
  }

  update(selecao, id) {
    const sql = "UPDATE selecoes SET ? WHERE id = ?;";
    return new Promise((resolve, reject) => {
      conexao.query(sql, [selecao, id], (error, result) => {
        if (error) return reject("Não foi possivel atualizar.");
        // FAZER O PARSE DOS RESULTADOS
        const newResult = JSON.parse(JSON.stringify(result));
        return resolve(newResult);
      });
    });
  }

  delete(id) {
    const sql = "DELETE FROM selecoes WHERE id = ? ;";
    return new Promise((resolve, reject) => {
      conexao.query(sql, id, (error, result) => {
        if (error) return reject("Não foi possivel excluir.");
        // FAZER O PARSE DOS RESULTADOS
        const newResult = JSON.parse(JSON.stringify(result));
        return resolve(newResult);
      });
    });
  }
}

export default new SelecaoRepositpry();
