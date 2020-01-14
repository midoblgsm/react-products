import React, { useContext, useEffect, useState } from 'react';



import { Context as ConfigContext } from '../context/ConfigContext';
import Goose from '../components/Goose'

const Config = () => {
    const [gooseState, setGooseState] = useState('walk');

    const { state: { config }, fetchConfig } = useContext(ConfigContext);
    useEffect(() => {
        fetchConfig("testpath", "v0");
        config ? setGooseState(config.st) : setGooseState("walk");
    });



    return (<div>
        <Goose st={gooseState} />
    </div>)

}


export default Config;