const tourPackageUpload = require('./config/multer');
const tourPackageController = require('./controllers/TourPackageController');

module.exports = (app) => {
  app.get('/api/tour-packages', tourPackageController.getTourPackages);
  app.post('/api/tour-packages', tourPackageUpload.single('image'), tourPackageController.createTourPackage);
  app.put('/api/tour-packages/:id', tourPackageUpload.single('image'), tourPackageController.updateTourPackage);
  app.delete('/api/tour-packages/:id', tourPackageController.deleteTourPackage);
  app.get('/api/tour-packages/:id', tourPackageController.getTourPackageById);
  app.get('/api/reviews', tourPackageController.getReviews);
  app.post('/api/reviews', tourPackageUpload.single('image'), tourPackageController.addReview);
  app.delete('/api/reviews/:reviewId', tourPackageController.deleteReview);
};