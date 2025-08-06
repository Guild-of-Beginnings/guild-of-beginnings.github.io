import React from 'react';

class ErrorBoundary extends React.Component {
    state = { hasError: false };

    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.log(error, info);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <>
                    <div className="alert alert-danger">
                        <h2>Something went wrong.</h2>
                    </div>
                    
                    <p>{this.props.fallback}</p>
                    <p>If the problem persists, feel free to contact us at <a href="mailto:support@guildofbeginnings.com">support@guildofbeginnings.com</a></p>
                </>
            );
        }

        return this.props.children; // Render the children components if no error
    }
}

export default ErrorBoundary;