import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { addBookQuantity, deleteBookQuantity, deleteSingleBookFromCart } from '../../actions/shopActions/shopActions';
import { ItemCardProps } from '../../helpers/interfaces/interfaces';
import '../../scss/components/itemCard/itemCard.scss';
import { CustomButton } from '../customButton/CustomButton';
import { toast } from 'react-toastify';

const ItemCard: FC<ItemCardProps> = ({ book, addBookToCart, shoppingCart, component }) => {
    const dispatch = useDispatch()
    let { title, cover_url, author, pages, quantity, id, price, currency } = book;

    const handleAddToCartClick = () => {
        return (
            dispatch(addBookToCart(book)), toast.success("Dodano do koszyka")
        )
    };

    const handleDeleteBookFromOrder = () => {
        return (
            dispatch(deleteSingleBookFromCart(id)), toast.success("Usunięto pozycję z koszyka")
        )
    };

    return (
        <div className="itemCard">
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
                            buttonStyle={{ cursor: "auto", backgroundColor: "#c96d06", }}
                            title="Dodano do koszyka"
                        />
                        :
                        <CustomButton
                            title="Dodaj do koszyka"
                            onClick={(): any => handleAddToCartClick()}

                        />}
                </div>
                : component === "cartPage"
                    ? <div className="itemCard_addQuantity">
                        <div>
                            <h4 style={{ marginTop: "0" }}>Dodaj lub usuń aby zwiększyć ilość sztuk:</h4>
                            <div className="itemCard_addQuantity--counter">
                                {quantity === 1
                                    ?
                                    (<HighlightOffIcon className="itemCard_addQuantity--borderIcon" onClick={() => handleDeleteBookFromOrder()} />)
                                    :
                                    (<RemoveCircleOutlineIcon onClick={() => dispatch(deleteBookQuantity(id))} className="itemCard_addQuantity--removeButton" />)}
                                <span>{quantity} szt.</span>
                                <AddCircleOutlineIcon className="itemCard_addQuantity--addButton" onClick={() => dispatch(addBookQuantity(id))} />
                                <span style={{ paddingRight: "10px" }}>
                                    Cena: {(price *= quantity / 100).toFixed(2) + " " + currency}
                                </span>
                            </div>
                        </div>
                    </div>
                    : null}
        </div>
    )
};

export default ItemCard
