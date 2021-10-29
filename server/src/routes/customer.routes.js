const router = require('express-promise-router')();
const customerController = require('../controllers/customer.controller');

// Post (Create)
router.post('/addCustomer', customerController.createCustomer);
// Get (Read)
router.get('/getCustomerById/:id', customerController.findCustomerById);
router.get('/getCustomerByFN/:firstName', customerController.findCustomerByFirstName);
router.get('/getAllCustomer/', customerController.findAllCustomer);
// PUT (Update)
router.put('/updateCustomer/:id', customerController.updateCustomerLastNameById);
router.put('/updateCustomerData/:id', customerController.updateCustomerDataById);
// Delete
router.delete('/deleteCustomerById/:id', customerController.deleteCustomerById);
router.delete('/deleteAllCustomer/', customerController.deleteAllCustomer);

module.exports = router;