export const DEV_API_URL = "http://localhost:4000"
const PROD_API_URL = process.env.REACT_APP_PROD_URL
export const API_URL =
    process.env.NODE_ENV === "production" ? PROD_API_URL : DEV_API_URL



// export const DEV_API_URL = "https://simply-good-food.herokuapp.com"
// const PROD_API_URL = process.env.REACT_APP_API_URL
// export const API_URL =
//     process.env.NODE_ENV === "production" ? PROD_API_URL : DEV_API_URL
