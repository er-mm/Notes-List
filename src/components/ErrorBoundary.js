import React from "react";
import { log } from "../utils/myLogger";

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        };
        this.errorName = '';
        this.errorMessage = '';
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ hasError: true });
        this.errorName = `Error Name:  ${error.name}`;
        this.errorMessage = `Error Message: ${error.message}`;
        const errorDetails = `
        Error Name:  ${error.name}
        Error Message: ${error.message}
		Stack Trace: ${error.stack}
		Component Stack: ${errorInfo.componentStack}
		`;
        log(errorDetails);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;
    return <React.Fragment>{hasError ? <div> {`Error occurred`} {<br/>} {this.errorName} {<br/>} {this.errorMessage} </div> : children}</React.Fragment>;
    }
}