// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

// Categories have many Products

Category.hasMany(Product, {
  foreignKey: 'category_id'
});

// Products belongToMany Tags (through ProductTag)

Product.belongsToMany(Tags, {
  through: ProductTag,
  as: 'joined_product',
  foreignKey: 'product_id'
});

// Tags belongToMany Products (through ProductTag)

Tags.belongsToMany(Products, {
  through: ProductTag,
  as: 'joined_product',
  foreignKey: 'tags_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
