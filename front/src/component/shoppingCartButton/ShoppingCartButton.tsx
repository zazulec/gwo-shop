import React, { FC } from 'react';
import '../../scss/components/shoppingCart/shoppingCart.scss';
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

interface ShoppingCartButtonProps {
    counter: Number,
}

export const ShoppingCartButton: FC<ShoppingCartButtonProps> = ({ counter }) => {
    return (
        <Link className="shoppingCart"
            to={"/shoppingCart"}
        >
            <div className="shoppingCart_cart">
                <AddShoppingCartIcon fontSize="large" />
            </div>
            <div className="shoppingCart_cartCounter">{`(${counter})`}</div>
        </Link>
    )
}
