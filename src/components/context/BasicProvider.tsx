import React, { createContext, useContext } from 'react';
import { defaultConfig } from './defaultConfig';

const BasicContext = createContext(defaultConfig);

interface TypeProps {
    children: React.ReactNode;
}

const BasicProvider: React.FC<TypeProps> = ({ children }) => {
    return (
        <BasicContext.Provider value={defaultConfig}>
            {children}
        </BasicContext.Provider>
    );
};

export const useBasic = () => useContext(BasicContext);

export default BasicProvider;
