import * as React from 'react';
import DataProvider from './DataProvider';

const Provider = ({ children }: Props) => {
  return (
    <>
      <DataProvider>{children}</DataProvider>
    </>
  );
};

export default Provider;

export interface Props {
  children: React.ReactNode;
}
