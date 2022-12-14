const models = require("../models/index");

exports.provincesCreate = (req, res) => {
  const province = { name : req.body.name };
  models.Provinces.create(province)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message
      })
    })
};

exports.provincesList = (req, res) => {
  models.Provinces.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message
      })
    })
};

exports.provincesDetail = (req, res) => {
  const provinceId = req.params.id;
  models.Provinces.findOne({
    where: {id: provinceId},
    include: [{
      model: models.Cities,
      required: false
    }],
  })
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Province with id = ${provinceId}.`
        });
      }
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message
      });
    })
};

exports.provincesUpdate = (req, res) => {
  const provinceId = req.params.id;
  models.Provinces.update(req.body, { where: {id : provinceId} })
    .then((data) => {
      if (data == 1) {
        res.send({
          message: "Province was updated successfully."
        });
      } else {
        res.status(404).send({
          message: `Cannot find Province with id = ${provinceId}.`
        });
      }
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message
      });
    })
};

exports.provincesDelete = (req, res) => {
  const provinceId = req.params.id;
  models.Provinces.destroy({ where: { id : provinceId } })
    .then((data) => {
      if (data == 1) {
        res.send({
          message: "Province was deleted successfully."
        });
      } else {
        res.status(404).send({
          message: `Cannot find Province with id = ${provinceId}.`
        });
      }
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message
      });
    })
};
