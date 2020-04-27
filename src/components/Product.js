import React from 'react';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


const product = props => {
    let starsList = []
    console.log("stars", props.stars)
    for (let i = 0; i < props.stars; i++)
    {
        starsList.push(<FontAwesomeIcon icon={faStar} color={props.color} />)
    }

    return (
        <Card>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
            </Card.Body>
            <Card.Footer>

                {starsList}
            </Card.Footer>
        </Card>
    );
};

export default product;
