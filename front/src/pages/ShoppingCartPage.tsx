import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { CustomButton } from '../component/customButton/CustomButton';
import ItemCard from '../component/itemCard/ItemCard';
import '../scss/pages/shoppingCartPage/shoppingCartPage.scss';
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
                    <h3>Poniżej wyświetlamy twój koszyk. Kliknij przejdź do zamówienia by sfinalizować transakcje.</h3>
                    <h3>Zapomniałeś o czymś? Wróć do poprzedniej strony, uzupełnij koszyk i wróć na tą stronę.</h3>
                    <hr style={{ width: "80%" }}></hr>
                    <br></br>
                    <br></br>
                    <CustomButton title={"przejdź do zakupów"} style={{ paddingBottom: "20px" }} />
                    <Link to="/mainPage" className="shoppingCart_emptyButton">
                        <CustomButton title={"Powrót do poprzedniej strony"} />
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
                    <CustomButton title={"przejdź do zakupów"} style={{ paddingBottom: "20px" }} />
                    <Link to="/mainPage" className="shoppingCart_emptyButton">
                        <CustomButton title={"Powrót do poprzedniej strony"} />
                    </Link>
                </>)
                : (<>
                    <h3>Twój koszyk jest pusty! Wróć do poprzedniej strony by wybrać produkty.</h3>
                    <Link to="/mainPage" className="shoppingCart_emptyButton">
                        <CustomButton title={"Powrót do poprzedniej strony"} />
                    </Link>
                </>)
            }
        </div>
    )
}


