import React, { FC, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';
import { fetchAllBooks } from '../actions/shopActions/shopActions';
import ItemCard from '../component/itemCard/ItemCard';
import { StyledPagination } from '../component/pagination/Pagination';
import { myFetch } from '../helpers/myFetch/myFetch';
import '../scss/pages/mainPage/mainPage.scss';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

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
    }
}

interface MainPageState {
    shop: {
        allBooks: {
            data: any,
        }
    }
}
const MainPage: FC<MainPageProps> = ({ fetchAllBooks, allBooks }) => {

    const [page, setPage] = useState(1);

    const handlePaginationChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };


    useEffect(() => {
        myFetch(`/api/book?page=${page}`, {
            method: "get"
        }).then(data => fetchAllBooks(data))


    }, [fetchAllBooks, page])
    return (
        <div className="mainPage">
            <h1>Księgarnia online</h1>
            <h3>Wybierz interesujące cie opcje, dodaj do koszyka i sfinalizuj zakupy.</h3>
            <div className="mainPage_icon"><AddShoppingCartIcon fontSize="large" /></div>

            {allBooks && allBooks.map((book: any, index: number) => {
                return (<div className="mainPage_itemCardWrapper" key={index}><ItemCard book={book} /></div>)
            })}
            <div className="mainPage_pagination">
                <StyledPagination
                    handlePaginationChange={handlePaginationChange}
                    page={page}
                />
            </div>
        </div>
    )
}

const mapStateToProps = (state: MainPageState) => {
    return {
        allBooks: state.shop.allBooks.data,
    }
}


const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        fetchAllBooks: (data: any) => dispatch(fetchAllBooks(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
