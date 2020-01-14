import React from 'react';
import gooserun from '../gooserun.gif';
import goosewalk from '../goosewalk.gif';

const goose = props => {
    return (
        <div className='goose'>
            {props.st === 'run' ? (
                <img src={gooserun} alt='goose' />
            ) :
                <img src={goosewalk} alt='goose' />
            }
        </div>
    );
};

export default goose;
