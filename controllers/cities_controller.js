const models = require("../models/index");

exports.citiesCreate = (req, res) => {
  const name = req.body.name;
  const provinceId = req.body.provinceId;
  models.Cities.create({ name: name, provinceId: provinceId })
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message
      })
    })
};

exports.citiesList = (req, res) => {
  models.Cities.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message
      })
    })
};

exports.citiesDetail = (req, res) => {
  const cityId = req.params.id;
  models.Cities.findByPk(cityId)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find City with id = ${cityId}.`
        });
      }
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message
      });
    })
};

exports.citiesUpdate = (req, res) => {
  const cityId = req.params.id;
  const name = req.body.name;
  const provinceId = req.body.provinceId;
  models.Cities.update({ name: name, provinceId: provinceId }, { where: {id : cityId} })
    .then((data) => {
      if (data == 1) {
        res.send({
          message: "City was updated successfully."
        });
      } else {
        res.status(404).send({
          message: `Cannot find city with id = ${cityId}.`
        });
      }
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message
      });
    })
};

exports.citiesDelete = (req, res) => {
  const cityId = req.params.id;
  models.Cities.destroy({ where: { id : cityId } })
    .then((data) => {
      if (data == 1) {
        res.send({
          message: "City was deleted successfully."
        });
      } else {
        res.status(404).send({
          message: `Cannot find city with id = ${cityId}.`
        });
      }
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message
      });
    })
};
