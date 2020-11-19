import React, { FC } from 'react';
import '../../scss/components/itemCard/itemCard.scss';
import { CustomButton } from '../customButton/CustomButton';
import { Action } from 'redux';
import { useDispatch } from 'react-redux';


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
    addBookToCart: (data: any) => any,
}
const ItemCard: FC<ItemCardProps> = ({ book, addBookToCart }) => {
    const dispatch = useDispatch()
    const { title, cover_url, author, pages } = book;
    console.log(addBookToCart)
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
            <div className="itemCard_rightContent">
                <CustomButton
                    title="Dodaj do koszyka"
                    onClick={() => dispatch(addBookToCart(book))}

                />
            </div>

        </div>
    )
}


export default ItemCard
