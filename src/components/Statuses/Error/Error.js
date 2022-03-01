import React from 'react';
import { ErrorWrapper } from './styled';

const Error = () => {
    return (
      <ErrorWrapper>
          <p>We couldn't fetch your data...</p>
      </ErrorWrapper>
    );
};

export default Error;