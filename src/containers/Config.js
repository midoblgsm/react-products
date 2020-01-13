import React, { useContext, useEffect } from 'react';



import { Context as ConfigContext } from '../context/ConfigContext';


const Config = () => {
    const { state: { config }, fetchConfig } = useContext(ConfigContext);
    useEffect(() => {
        fetchConfig("testpath", "testv");
    }, []);
    let configuration = !config ? "empty" : config.happy

    return (<div>
        {configuration}
    </div>)

}


export default Config;