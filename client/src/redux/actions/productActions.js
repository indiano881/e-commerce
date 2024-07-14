import  {setLoading,setError,setPagination,setProducts, setFavorites, setFavoritesToggle} from "../slices/product.js";
import axios from "axios";

export const getProducts=(page, setFavoritesToggle) => async (dispatch) =>{
    dispatch(setLoading());
    try {
        const {data} = await axios.get(`/api/products/${page}/${10}`);
        const {products, pagination} = data;
        dispatch(setProducts(products))
        dispatch(setPagination(pagination))
    } catch (error) {
        dispatch(setError(
            error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message 
            ? error.message
            : "Unexpected error occured"
        ))
    }
}

export const addToFavorites = (id) => async (dispatch, getState) => {
    const {
        product: {favorites},
    } = getState()

    const newFavorites= [...favorites, id]
    localStorage.setItem("favorites",JSON.stringify(newFavorites))
    dispatch(setFavorites(newFavorites))
}
export const removeFromFavorites = (id) => async (dispatch, getState) => {
    const {product: {favorites},} = getState();

    const newFavorites= favorites.filter((favoritesId)=> favoritesId !== id)
    localStorage.setItem("favorites",JSON.stringify(newFavorites))
    dispatch(setFavorites(newFavorites))
}

export const toggleFavorites = (toggle) => async (dispatch, getState) => {
    const {
        product: {favorites, products},
    }= getState();

    if (toggle) {
        const filteredProducts= products.filter((product)=> favorites.includes(product._id));
        dispatch(setFavoritesToggle(toggle));
        dispatch(setProducts(filteredProducts))
    } else {
        dispatch(setFavoritesToggle(false));
        dispatch(setProducts(1))
    }
}
