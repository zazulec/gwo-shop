import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import '../../scss/components/itemCard/itemCard.scss';
import { CustomButton } from '../customButton/CustomButton';


interface ItemCardProps {
    book: {
        title: string,
        cover_url: string,
        author: string,
        id: number,
        pages: number,
        price: number,
        currency: string,
    },
    addBookToCart?: any,
    shoppingCart?: any,
    component?: string,
}
const ItemCard: FC<ItemCardProps> = ({ book, addBookToCart, shoppingCart, component }) => {
    const dispatch = useDispatch()
    const { title, cover_url, author, pages } = book;

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
            {component === "mainPage" ?
                <div className="itemCard_rightContent">
                    {shoppingCart.find((e: any) => e.title === title) ?
                        <CustomButton
                            buttonStyle={{ cursor: "auto" }}
                            title="Dodano do koszyka"
                        />
                        :
                        <CustomButton
                            title="Dodaj do koszyka"
                            onClick={() => dispatch(addBookToCart(book))}

                        />}
                </div>
                : null}
        </div>
    )
}


export default ItemCard
