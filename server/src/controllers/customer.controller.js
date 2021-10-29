const db = require("../config/database");

exports.createCustomer = async (req, res) => {
  const { first_name, last_name, email, address_id, store_id } = req.body;
  const active = 1;
  const activebool = true;
  const { rows } = await db.query(
    "INSERT INTO customer (first_name, last_name, email, address_id, store_id, active, activebool ) VALUES ($1, $2, $3, $4, $5, $6, $7)",
    [first_name, last_name, email, address_id, store_id, active, activebool]
  );

  const response = await db.query('SELECT customer_id FROM customer ORDER BY customer_id DESC LIMIT 1');
  const cust_id = response.rows;
  let custo_id = "";
  cust_id.forEach(arr => {
    custo_id = arr;
  });
  const { customer_id } = custo_id;

  console.log(customer_id)

  res.status(201).send({
    message: "Customer added successfully!",
    body: {
      customer: { customer_id, first_name, last_name, email }
    },
  });
};

exports.findCustomerById = async (req, res) => {
  const customerId = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM customer WHERE customer_id = $1', [customerId]);
  let customers = response.rows;
  let customer = "";
  customers.forEach(arr => {
    customer = arr;
  })

  console.log(customer)
  res.status(200).send(customer);
}

exports.findCustomerByFirstName = async (req, res) => {
  const customerFirstName = req.params.firstName;
  const response = await db.query('SELECT * FROM customer WHERE first_name = $1 OR last_name = $1', [customerFirstName]);
  res.status(200).send(response.rows);
}

exports.findAllCustomer = async (req, res) => {
  const response = await db.query('SELECT * FROM customer ORDER BY customer_id DESC ');
  // console.log(response);
  res.status(200).send(response.rows);
}

exports.updateCustomerLastNameById = async (req, res) => {
  const customerId = parseInt(req.params.id);
  const { lastname } = req.body;

  const response = await db.query(
    "UPDATE customer SET last_name = $1 WHERE customer_Id = $2",
    [lastname, customerId]
  );

  res.status(200).send({ message: "Customer Last Name Updated Successfully!" });
};

exports.updateCustomerDataById = async (req, res) => {
  const customerId = parseInt(req.params.id);
  const { first_name, last_name, email, address_id, store_id, activebool } = req.body;

  const response = await db.query(
    "UPDATE customer SET first_name = $1, last_name = $2, email = $3, address_id = $4, store_id = $5, activebool = $6 WHERE customer_id = $7",
    [first_name, last_name, email, address_id, store_id, activebool, customerId]
  );

  res.status(200).send({ message: "Customer Data Updated Successfully!" });
};


exports.deleteCustomerById = async (req, res) => {
  const customerId = parseInt(req.params.id);
  await db.query('DELETE FROM customer WHERE customer_Id = $1', [
    customerId
  ]);
  console.log("masuk delete")

  res.status(200).send({ message: 'Customer deleted successfully!', customerId });
};

exports.deleteAllCustomer = async (req, res) => {
  await db.query('DELETE FROM customer');
  console.log("masuk delete")

  res.status(200).send({ message: 'All Customer deleted successfully!', customerId });
};