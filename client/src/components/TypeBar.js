import React, {useContext} from 'react';
import {observer} from 'mobx-react-lite';
import {Context} from '../index';
import {ListGroup} from 'react-bootstrap';

const TypeBar = observer(() => {
    const {device} = useContext(Context)

    return (
        <div>
            <ListGroup>
                {device.types.map((type)=>
                    <ListGroup.Item
                        style={{cursor: 'pointer'}}
                        active={type.id === device.selectedType.id}
                        onClick={()=> device.setSelectedType(type)}
                        key={type.id}
                    >
                        {type.name}
                    </ListGroup.Item>
                )}
            </ListGroup>
        </div>
    );
});

export default TypeBar;