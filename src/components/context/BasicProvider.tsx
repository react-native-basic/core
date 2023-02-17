import React, { createContext, useContext } from 'react';
import { darkColors, defaultConfig, lightColors } from './defaultConfig';

const BasicContext = createContext(defaultConfig);

interface TypeProps {
    children: React.ReactNode;
    darkMode?: boolean;
    themeConfig?: typeof defaultConfig;
}

const BasicProvider: React.FC<TypeProps> = ({
    children,
    themeConfig,
    darkMode = false,
}) => {
    return (
        <BasicContext.Provider
            value={{
                ...defaultConfig,
                darkMode: darkMode,
                colors: darkMode ? darkColors : lightColors,
                ...themeConfig,
            }}
        >
            {children}
        </BasicContext.Provider>
    );
};

export const useBasic = () => useContext(BasicContext);

export default BasicProvider;
