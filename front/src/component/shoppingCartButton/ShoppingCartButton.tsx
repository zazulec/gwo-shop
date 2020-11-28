import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartButtonProps } from '../../helpers/interfaces/interfaces';
import '../../scss/components/shoppingCart/shoppingCart.scss';

export const ShoppingCartButton: FC<ShoppingCartButtonProps> = ({ counter }) => {
    return (
        <Link className="cartButton"
            to={"/shoppingCart"}
        >
            <div className="cartButton_cart">
                <AddShoppingCartIcon fontSize="large" />
            </div>
            <div className="cartButton_cartCounter">{`(${counter})`}</div>
        </Link>
    )
}
