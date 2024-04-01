const Princ = require("../models/Princ");

const fs = require("fs");

exports.create = async (req, res) => {
  try {
    const { msg, cor, msc, seq } = req.body;
    const file = req.file;
    const princ = new Princ({
      msg: msg || "Sem mensagem",
      cor: cor || "#FFF",
      src: file.path,
      msc: msc || "Esqueci de butar",
      seq: seq || -1,
    });

    await princ.save();

    res.json({ princ });
  } catch (error) {
    res.status(500).json({ message: "Erro ao salvar dados." });
  }
};

exports.findAll = async (req, res) => {
  try {
    const princ = await Princ.find().sort([["seq", "asc"]]);

    res.json(princ);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar dados." });
  }
};

exports.remove = async (req, res) => {
  try {
    const princ = await Princ.findById(req.params.id);

    if (!princ) {
      return res
        .status(404)
        .json({ message: "Não foi encontrado um registro com o id informado" });
    }

    fs.unlinkSync(princ.src);

    await princ.deleteOne();

    res.json({ message: "Excluído com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao excluir dados." });
  }
};

exports.findOne = async (req, res) => {
  try {
    const princ = await Princ.findOne({ seq: req.params.seq });

    if (!princ) {
      return res.status(404).json({
        message:
          "Não foi encontrado um registro com o número de sequencia informado",
      });
    }
    res.json(princ);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar registro." });
  }
};
//Filtrar pelo número da sequencia;
//Mostrar quantos registros tem;
