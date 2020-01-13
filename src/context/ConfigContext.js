import createDataContext from './createDataContext';
import ConfigApi from 'swagger_config_store';

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

    let result = ConfigApi.getConfigByPath(path, version, null)
    dispatch({ type: 'fetch_config', payload: result });


};







export const { Provider, Context } = createDataContext(
    configReducer,
    {
        fetchConfig,
    },
    {}
);
