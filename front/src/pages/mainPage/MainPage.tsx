import React, { FC, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addBookToCart, fetchBooks } from '../../actions/shopActions/shopActions';
import ItemCard from '../../component/itemCard/ItemCard';
import { StyledPagination } from '../../component/pagination/Pagination';
import { ShoppingCartButton } from '../../component/shoppingCartButton/ShoppingCartButton';
import { MainPageProps, MainPageState } from '../../helpers/interfaces/interfaces';
import '../../scss/pages/mainPage/mainPage.scss';

const MainPage: FC<MainPageProps> = ({ allBooks, shoppingCart, fetchBooks }) => {
    const [page, setPage] = useState(1);

    const handlePaginationChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    useEffect(() => {
        fetchBooks(page)
    }, [fetchBooks, page]);

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
            {allBooks !== null ?
                (<>
                    {allBooks && allBooks.map((book: any, index: number) => {
                        return (
                            <div
                                className="mainPage_itemCardWrapper"
                                key={index}>
                                <ItemCard book={book} addBookToCart={addBookToCart} shoppingCart={shoppingCart} component={"mainPage"} /></div>)
                    })}
                    <div className="mainPage_pagination">
                        <StyledPagination
                            handlePaginationChange={handlePaginationChange}
                            page={page}
                        />
                    </div>
                </>)
                : <div className="loader"></div>}
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
        addBookToCart: (data: any) => dispatch(addBookToCart(data)),
        fetchBooks: (page: number) => dispatch(fetchBooks(page))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
