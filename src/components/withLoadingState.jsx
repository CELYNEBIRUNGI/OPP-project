import { useState, useEffect } from "react";

const withLoadingState = (WrappedComponent) => {
  const WithLoadingState = (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setLoading(false);
      }, 1000);

      return () => clearTimeout(timeoutId);
    }, []);

    return <WrappedComponent {...props} loader={loading} />;
  };

  return WithLoadingState;
};

export default withLoadingState;
