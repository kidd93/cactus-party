const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    attributes: [
      'id',
      'category_name'
    ],
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name'],
      }
    ]
  })
});

router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'category_name'
    ],
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name'],
      }
    ]
  })
});

router.post('/', (req, res) => {
  Category.create({
    // id: req.body.tag_id,
    category_name: req.body.category_name
  })
});

router.put('/:id', (req, res) => {
  Category.update({
    // id: req.body.tag_id,
    category_name: req.body.category_name
  })
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
});

module.exports = router;
