import React, { FC, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';
import { fetchAllBooks } from '../actions/shopActions/shopActions';
import { myFetch } from '../helpers/myFetch/myFetch';
import { Pagination } from '@material-ui/lab';

interface MainPageProps {
    fetchAllBooks: (data: any) => Action;
}
const MainPage: FC<MainPageProps> = ({ fetchAllBooks }) => {

    const [page, setPage] = useState(1);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };
    useEffect(() => {
        myFetch(`/api/book?page=${page}`, {
            method: "get"
        }).then(data => fetchAllBooks(data))

    }, [fetchAllBooks, page])
    return (
        <div className="mainPageWrapper">
            MainPage
            <Pagination
                count={2}
                page={page}
                onChange={handleChange}
            />
        </div>
    )
}

const mapStateToProps = () => {
    return {}
}


const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        fetchAllBooks: (data: any) => dispatch(fetchAllBooks(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
