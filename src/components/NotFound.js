import React from "react";

const NotFound = () => (
  <div>
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
  </div>
);

export default NotFound;

// import React from "react";
// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError(error) {
//     return { hasError: true };
//   }

//   componentDidCatch(error, errorInfo) {
//     console.log(error, errorInfo);
//   }

//   render() {
//     if (this.state.hasError) {
//       return <h1>Something went wrong.</h1>;
//     }

//     return this.props.children;
//   }
// }
// export default ErrorBoundary;
