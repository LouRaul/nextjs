import React from 'react';

const List = ({items}) => {
    const [filteredItems, setFilteredItems] = React.useState(items);

    const filterItems = (e) => {
        const searchValue = e.target.value;
        const currentItems = [...items];
        const matchingItems = currentItems.filter((item) => item.startsWith(searchValue));

        setFilteredItems(matchingItems);
    };

    return (
        <>
            <input onChange={filterItems} />
            <ul>
                {filteredItems.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </>
    );
};

const ListContainer = () => (
    <List items={['Learn 11ty', 'Learn CSS', 'Learn something else']} />
);
export default ListContainer;