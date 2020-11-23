import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import '../../scss/components/itemCard/itemCard.scss';
import { CustomButton } from '../customButton/CustomButton';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

interface ItemCardProps {
    book: {
        title: string,
        cover_url: string,
        author: string,
        id: number,
        pages: number,
        price: number,
        currency: string,
        quantity: number,
    },
    addBookToCart?: any,
    shoppingCart?: any,
    component?: string,
}
const ItemCard: FC<ItemCardProps> = ({ book, addBookToCart, shoppingCart, component }) => {
    const dispatch = useDispatch()
    const { title, cover_url, author, pages, quantity } = book;

    return (
        <div className="itemCard">
            <div className="itemCard_arrow"></div>
            <div className="itemCard_leftContent">
                <img
                    src={cover_url} alt="itemCard_bookCover" />
            </div>
            <div className="itemCard_centerContent">
                <p><b>Tytuł:</b> {title}</p>
                <p><b>Autor:</b> {author ? author : "Brak danych"}</p>
                <p><b>Ilość stron:</b> {pages}</p>
            </div>
            {component === "mainPage"
                ?
                <div className="itemCard_rightContent">
                    {shoppingCart.find((e: any) => e.title === title)
                        ?
                        <CustomButton
                            buttonStyle={{ cursor: "auto", backgroundColor: "#c96d06" }}
                            title="Dodano do koszyka"
                        />
                        :
                        <CustomButton
                            title="Dodaj do koszyka"
                            onClick={() => dispatch(addBookToCart(book))}

                        />}
                </div>
                : component === "cartPage"
                    ? <div className="itemCard_addQuantity">
                        <h4 style={{ marginTop: "0" }}>Dodaj lub usuń aby zwiększyć ilość sztuk:</h4>
                        <HighlightOffIcon onClick={() => alert("minus")} style={{ paddingRight: "10px" }} />

                        <span>{quantity} szt.</span>

                        <AddCircleOutlineIcon onClick={() => alert("plus")} style={{ paddingLeft: "10px" }} />
                    </div>
                    : null}
        </div>
    )
}


export default ItemCard
