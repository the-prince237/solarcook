export const API_URL =
  document.domain === "localhost"
  ? "http://localhost:4000"
  : "https://prostoreback.dyvixitsolutions.com"

export const Apis = {
  GetUserLogin : `${API_URL}/api/customer/login`,
  GetUserRegister : `${API_URL}/api/customer/register`,
  GetCustomerDetails : `${API_URL}/api/customer/getUserByEmailId?email=`
}