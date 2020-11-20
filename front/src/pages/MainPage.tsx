import React, { FC, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';
import { addBookToCart, fetchAllBooks } from '../actions/shopActions/shopActions';
import ItemCard from '../component/itemCard/ItemCard';
import { StyledPagination } from '../component/pagination/Pagination';
import { ShoppingCartButton } from '../component/shoppingCartButton/ShoppingCartButton';
import { myFetch } from '../helpers/myFetch/myFetch';
import '../scss/pages/mainPage/mainPage.scss';

interface MainPageProps {
    fetchAllBooks: (data: any) => Action;
    allBooks: {
        state: {
            shop: {
                allBooks: {
                    data: [],
                }
            },
        },
        map: (book: any) => JSX.Element
    },
    shoppingCart: Array<{}>,
}

interface MainPageState {
    shop: {
        allBooks: {
            data: any,
        },
        shoppingCart: Array<{}>,
    }
}
const MainPage: FC<MainPageProps> = ({ fetchAllBooks, allBooks, shoppingCart }) => {

    const [page, setPage] = useState(1);

    const handlePaginationChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    useEffect(() => {
        myFetch(`/api/book?page=${page}`, {
            method: "get"
        }).then(data => fetchAllBooks(data))
    }, [fetchAllBooks, page]);

    return (
        <div className="mainPage">
            <h1>Księgarnia online</h1>
            <h3>Wybierz interesujące cie opcje, dodaj do koszyka i sfinalizuj zakupy.</h3>
            <ShoppingCartButton counter={shoppingCart.length} />
            <div className="mainPage_pagination">
                <StyledPagination
                    handlePaginationChange={handlePaginationChange}
                    page={page}
                />
            </div>
            {allBooks && allBooks.map((book: any, index: number) => {
                return (
                    <div
                        className="mainPage_itemCardWrapper"
                        key={index}>
                        <ItemCard book={book} addBookToCart={addBookToCart} shoppingCart={shoppingCart} /></div>)
            })
            }
            <div className="mainPage_pagination">
                <StyledPagination
                    handlePaginationChange={handlePaginationChange}
                    page={page}
                />
            </div>
        </div >
    )
}

const mapStateToProps = (state: MainPageState) => {
    return {
        allBooks: state.shop.allBooks.data,
        shoppingCart: state.shop.shoppingCart,
    }
}


const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        fetchAllBooks: (data: any) => dispatch(fetchAllBooks(data)),
        addBookToCart: (data: any) => dispatch(addBookToCart(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
