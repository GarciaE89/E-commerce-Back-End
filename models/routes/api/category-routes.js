const { log } = require('console');

const router = require('express').Router();
const {Category, Product} = require=('../../../models');

router.get('/', (req, res) => {
    // find all of the ecommerce catergories 
    Category.findAll({
        include: [
            {
                model: Product,
                attributes: ['id', 'product_name', 'price', 'stock']
            }
        ]
    
        
    })
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })


});

router.get('/:id', (req, res) => {
    // find category by Id
   
    Category.findOne({
      where: {
        id: req.params.id
      },
      include: [
        {
          model: Product,
          attributes: ['id', 'product_name', 'price', 'stock']
        }
      ]
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No category with found with provided Id!.' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.post('/', (req, res) => {
    //   new category will be created
    Category.create({
        category_name: req.body.category_name
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
    console.log(err);
    res.status(500).json(err);
    });
  });

  router.put('/:id', (req, res) => {
    // update a category by its `id` value
  });
  
  router.delete('/:id', (req, res) => {
    // delete a category by its `id` value
  });
  
  module.exports = router;