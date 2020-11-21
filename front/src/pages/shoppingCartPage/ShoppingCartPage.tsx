import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { CustomButton } from '../../component/customButton/CustomButton';
import ItemCard from '../../component/itemCard/ItemCard';
import '../../scss/pages/shoppingCartPage/shoppingCartPage.scss';
import { Link } from 'react-router-dom';

interface ShoppingCartPageState {
    shop: { shoppingCart: [] }

}

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
                        <CustomButton title={"dalej"} style={{ paddingBottom: "20px" }} buttonStyle={{ minWidth: "200px" }} />
                    </Link>
                    <Link to="/mainPage" className="shoppingCart_emptyButton">
                        <CustomButton title={"Powrót "} buttonStyle={{ minWidth: "200px" }} />
                    </Link>
                    {cart.map((book: any, index: number) => {
                        return (
                            <div
                                className="shoppingCart_itemCard"
                                key={index}>
                                <ItemCard book={book} />
                            </div>
                        )
                    })}
                    <Link to="/order" className="shoppingCart_emptyButton">
                        <CustomButton title={"dalej"} style={{ paddingBottom: "20px" }} buttonStyle={{ minWidth: "200px" }} />
                    </Link>
                    <Link to="/mainPage" className="shoppingCart_emptyButton">
                        <CustomButton title={"Powrót "} buttonStyle={{ minWidth: "200px" }} />
                    </Link>
                </>)
                : (<>
                    <h3>Twój koszyk jest pusty! Wróć do poprzedniej strony by wybrać produkty.</h3>
                    <Link to="/mainPage" className="shoppingCart_emptyButton">
                        <CustomButton title={"Powrót"} buttonStyle={{ minWidth: "200px" }} />
                    </Link>
                </>)
            }
        </div>
    )
}


