import React, { FC } from 'react';
import '../../scss/components/itemCard/itemCard.scss';


interface ItemCardProps {
    // allBooks?: {
    //     data: [],
    //     metadata: {},
    // }
    book: any,
}
const ItemCard: FC<ItemCardProps> = ({ book }) => {
    return (
        <div className="itemCard">
        </div>
    )
}


export default ItemCard
