const router = require('express').Router();

const dataSetController = require('../../controllers/dataset');
const pointController = require('../../controllers/point');

/* /api/datasets */
router.post('/', dataSetController.create);
router.get('/', dataSetController.getAll);

router
  .route('/:dataset$')
  .put(dataSetController.update)
  .get(dataSetController.getOne)
  .delete(dataSetController.delete);

// S
router
  .route('/:dataset/points$')
  .post(pointController.create)
  .get(pointController.getAll)
  .delete(pointController.deleteAll);

// A
router
  .route('/:dataset/points/:point')
  .put(pointController.update)
  .get(pointController.getOne)
  .delete(pointController.deleteOne);

module.exports = router;
