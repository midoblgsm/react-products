import createDataContext from './createDataContext';
import swagger_config_store from 'swagger_config_store';

const configReducer = (state, action) => {
    switch (action.type)
    {
        case 'fetch_config':
            return { ...state, config: action.payload };
        default:
            return state;
    }
};


const fetchConfig = dispatch => ({ path, version }) => {
    let client = new swagger_config_store.ConfigApi()

    console.log(client)
    let result = client.getConfigByPath("hello", "version", null)
    result = { "st": "run" }
    dispatch({ type: 'fetch_config', payload: result });


};







export const { Provider, Context } = createDataContext(
    configReducer,
    {
        fetchConfig,
    },
    { "happy": "config" }
);
