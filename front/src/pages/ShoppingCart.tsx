import React, { FC } from 'react'
import { useDispatch, useSelector, connect } from 'react-redux'

interface ShoppingCartState {
    shop: { shoppingCart: [] }

}


export const ShoppingCart: FC = () => {
    const cart = useSelector((state: ShoppingCartState) => state.shop.shoppingCart)
    const dispatch = useDispatch()
    return (
        <div className="shoppingCartComponent">
            <h1>Księgarnia online</h1>
            <h3>Poniżej wyświetlamy twój koszyk z zamówieniem. Kliknij przejdź do zamówienia by sfinalizować transakcje.</h3>
        </div>
    )
}


