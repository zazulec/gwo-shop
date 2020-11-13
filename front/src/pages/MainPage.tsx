import React from 'react'

import { connect } from 'react-redux'

export const MainPage = () => {
    return (
        <div className="mainPageWrapper">
            MainPage
        </div>
    )
}

const mapStateToProps = () => {
    return {}
}


const mapDispatchToProps = () => {
    return {}
}

connect(mapStateToProps, mapDispatchToProps)(MainPage)
