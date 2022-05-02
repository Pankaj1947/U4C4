import { axios } from "axios";
import { GET_PRODUCTS } from "./actionTypes";


const getProductsData = async (dispatch) => {
    try {
        let res = await axios.get("https://movie-fake-server.herokuapp.com/products")
        let data = await res.data;
        console.log(data);

        dispatch(
            {
                type: GET_PRODUCTS,
                payload: data
            }
        )
    } catch (error) {

    }
}

const sortProducts = () => { };

const filterProducts = () => { };

export { getProductsData, sortProducts, filterProducts };