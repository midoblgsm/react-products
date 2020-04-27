import createDataContext from './createDataContext';
import axios from '../axios-prod';

const productsReducer = (state, action) => {
    switch (action.type)
    {
        case 'fetch_products':
            return { products: action.payload };
        default:
            return state;
    }
};


const fetchProducts = dispatch => async () => {

    const res = await axios.get('/products')
    console.log("res", res)
    const fetchedProducts = [];
    for (let key in res.data)
    {
        fetchedProducts.push({
            ...res.data[key],
            id: key
        });
    }
    dispatch({ type: 'fetch_products', payload: fetchedProducts });
};

export const { Provider, Context } = createDataContext(
    productsReducer,
    {
        fetchProducts,
    },
    { "products": [{ "id": "Potato", "description": "tasty", "rating": { "id": "Potato", "stars": 2, "color": "red" } }] }
);
