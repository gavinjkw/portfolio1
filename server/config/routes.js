const portfolioController = require('../controllers/portfolioController.js');

module.exports = function (app) {
    
    app.post('/api/submit-form', portfolioController.submitForm);

  
}