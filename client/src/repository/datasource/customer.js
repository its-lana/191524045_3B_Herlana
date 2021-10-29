import axios from "axios";
import { CUSTOMER_URL } from "../const"


const createCustomer = async (data) => {
  try {
    console.log(CUSTOMER_URL + `/addCustomer/`)
    const getAllURL = CUSTOMER_URL + `/addCustomer/`
    const result = await axios.post(getAllURL, data);
    return result.data;
  } catch (err) {
    console.log(err)
  }
}



const updateCustomerData = async (myID, data) => {
  try {
    console.log(CUSTOMER_URL + `updateCustomerData/${myID}`)
    const getAllURL = CUSTOMER_URL + `updateCustomerData/${myID}`
    const result = await axios.put(getAllURL, data);
    return result;
  } catch (err) {
    console.log(err)
  }
}

const getCustomerById = async (id) => {
  try {
    console.log(CUSTOMER_URL + `/getCustomerById/${id}`)
    const getAllURL = CUSTOMER_URL + `/getCustomerById/${id}`
    const result = await axios.get(getAllURL);
    return result;
  } catch (err) {
    console.log(err)
  }
}

const getCustomerByFN = async (firstName) => {
  try {
    console.log(CUSTOMER_URL + `/getCustomerByFN/${firstName}`)
    const getAllURL = CUSTOMER_URL + `/getCustomerByFN/${firstName}`
    const result = await axios.get(getAllURL);
    return result;
  } catch (err) {
    console.log(err)
  }
}


const getAllCustomer = async () => {
  try {
    console.log(CUSTOMER_URL + `/getAllCustomer/`)
    const getAllURL = CUSTOMER_URL + `/getAllCustomer/`
    const result = await axios.get(getAllURL);
    return result;
  } catch (err) {
    console.log(err)
  }
}


const deleteCustomerById = async (id) => {
  try {
    console.log(CUSTOMER_URL + `/deleteCustomerById/${id}`)
    const getAllURL = CUSTOMER_URL + `/deleteCustomerById/${id}`
    const result = await axios.delete(getAllURL);
    return result;
  } catch (err) {
    console.log(err)
  }
}

const deleteAllCustomer = async () => {
  try {
    console.log(CUSTOMER_URL + `/deleteAllCustomer/`)
    const getAllURL = CUSTOMER_URL + `/deleteAllCustomer/`
    const result = await axios.delete(getAllURL);
    return result;
  } catch (err) {
    console.log(err)
  }
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