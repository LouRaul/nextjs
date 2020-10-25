import React from 'react';

const List = ({items}) => (

            <ul>
                {items.map((item) => (
                    <li key={item}>{item}</li>
                ))}  
            </ul>
);

const ListContainer = () => (
    <List items={['Learn 11ty', 'Learn CSS', 'Learn something else']} />
);
export default ListContainer;