import * as React from 'react';

const usePageTitle = (title) => {
  React.useEffect(() => {
    const prevTitle = document.title;
    document.title = `iHMIS - ${title}`;

    return () => {
      document.title = prevTitle;
    };
  }, []);
};

export default usePageTitle;
