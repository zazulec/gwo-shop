import { Component } from "react";
import { withRouter } from "react-router";

interface ScrollToTopProps {
    location: any,
    history: any,
    match: any,
}

class ScrollToTop extends Component<ScrollToTopProps> {
    componentDidUpdate(prevProps: any) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0);
        }
    }

    render() {
        return this.props.children;
    }
}

export default withRouter(ScrollToTop);