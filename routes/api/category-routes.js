const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({include: [Product]})
    .then(data=>res.json(data));
});

router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
    id: req.params.id
    },
    include: [Product]
  }).then(data=>res.json(data));
});

router.post('/', (req, res) => {
  Category.create(req.body)
    .then(data=>res.json(data));
});

router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then((data) => res.json(data));
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then((data)=> res.json(data));
});

module.exports = router;
