'use strict';

import SelecaoRepository from "../repositories/SelecaoRepository.js";

class SelecaoController {


  async index(req, res) {
    const result = await SelecaoRepository.findAll();
    res.json(result);
  }

  async show(req, res) {
    const id = req.params.id;
    const result = await SelecaoRepository.findById(id);
    res.json(result);
  }

  async store(req, res) {
    const selecao = req.body;
    const result = await SelecaoRepository.create(selecao);
    res.json(result);
  }

  async update(req, res) {
    const id = req.params.id;
    const selecao = req.body;
    const result = await SelecaoRepository.update(selecao, id);
    res.json(result);
  }

  async delete(req, res) {
    const id = req.params.id;
    const result = await SelecaoRepository.delete(id);
    res.json(result);
  }
}

// Padrao Singleton
export default new SelecaoController();
