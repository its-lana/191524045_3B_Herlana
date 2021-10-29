import customerNetworkSource from "../datasource/customer"

const createCustomer = async (data) => {
  return await customerNetworkSource.createCustomer(data)
}

const getCustomerById = async (id) => {
  return await customerNetworkSource.getCustomerById(id)
}

const getCustomerByFN = async (firstName) => {
  return await customerNetworkSource.getCustomerByFN(firstName)
}

const getAllCustomer = async () => {
  return await customerNetworkSource.getAllCustomer()
}


const updateCustomerData = async (id, status) => {
  return await customerNetworkSource.updateCustomerData(id, status)
}

const deleteCustomerById = async (id) => {
  return await customerNetworkSource.deleteCustomerById(id)
}

const deleteAllCustomer = async () => {
  return await customerNetworkSource.deleteAllCustomer()
}

export default {
  createCustomer,
  getCustomerById,
  getCustomerByFN,
  getAllCustomer,
  updateCustomerData,
  deleteCustomerById,
  deleteAllCustomer
}