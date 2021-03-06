import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CustomButton } from '../../component/customButton/CustomButton';
import ItemCard from '../../component/itemCard/ItemCard';
import { ShoppingCartPageState } from '../../helpers/interfaces/interfaces';
import '../../scss/pages/shoppingCartPage/shoppingCartPage.scss';

export const ShoppingCartPage: FC = () => {
    const cart = useSelector((state: ShoppingCartPageState) => state.shop.shoppingCart)
    return (
        <div className="shoppingCart">
            <h1>Księgarnia online</h1>
            {cart.length !== 0 ?
                (<>
                    <h3>Poniżej wyświetlamy twój koszyk. Kliknij "DALEJ" by sfinalizować transakcje.</h3>
                    <h3>Zapomniałeś o czymś? Wróć do poprzedniej strony, uzupełnij koszyk i wróć na tą stronę.</h3>
                    <hr style={{ width: "80%" }}></hr>
                    <br></br>
                    <br></br>
                    <Link to="/order" className="shoppingCart_emptyButton">
                        <CustomButton title={"dalej"} style={{ paddingBottom: "20px" }} />
                    </Link>
                    <Link to="/mainPage" className="shoppingCart_emptyButton">
                        <CustomButton title={"Powrót"} />
                    </Link>
                    {cart.map((book: any, index: number) => {
                        return (
                            <div
                                className="shoppingCart_itemCard"
                                key={index}>
                                <ItemCard book={book} component="cartPage" />
                            </div>
                        )
                    })}
                    <Link to="/order" className="shoppingCart_emptyButton">
                        <CustomButton title={"dalej"} style={{ paddingBottom: "20px" }} />
                    </Link>
                    <Link to="/mainPage" className="shoppingCart_emptyButton">
                        <CustomButton title={"Powrót "} />
                    </Link>
                </>)
                : (<>
                    <h3>Twój koszyk jest pusty! Wróć do poprzedniej strony by wybrać produkty.</h3>
                    <Link to="/mainPage" className="shoppingCart_emptyButton">
                        <CustomButton title={"Powrót"} />
                    </Link>
                </>)
            }
        </div>
    )
}


