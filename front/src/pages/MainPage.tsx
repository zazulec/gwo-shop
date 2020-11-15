import React, { useEffect, FC } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { myFetch } from '../helpers/myFetch/myFetch';
import { Dispatch, Action } from 'redux';
import { fetchAllBooks } from '../actions/shopActions/shopActions';

interface MainPageProps {
    fetchAllBooks: (data: any) => Action;

}
const MainPage: FC<MainPageProps> = ({ fetchAllBooks }) => {
    useEffect(() => {
        myFetch(`/api/book?page=${1}`, {
            method: "get"
        }).then(data => fetchAllBooks(data))

    }, [fetchAllBooks])

    return (
        <div className="mainPageWrapper">
            MainPage
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
