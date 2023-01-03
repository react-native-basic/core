export const lightColors = {
    background: '#FFFFFF',
    surface: '#F5F7FA',
    primary: '#0070BA',
    secondary: '#9FA6B5',
    success: '#37D39B',
    warning: '',
    danger: '#FF0000',
    text: '#243656',
    caption: '#9FA6B5',
};

export const darkColors = {
    background: '#1d1c22',
    surface: '#F5F7FA',
    primary: '#0070BA',
    secondary: '#9FA6B5',
    success: '#37D39B',
    warning: '',
    danger: '#EB455F',
    text: '#fffeff',
    caption: '#737277',
};

export const defaultConfig = {
    darkMode: false,
    colors: lightColors,
    radius: {
        low: 10,
        medium: 20,
        extreme: 100,
    },
    typography: {
        display: {
            fontFamily: 'Manrope-SemiBold',
            fontSize: 34,
        },
        headline: {
            fontFamily: 'Manrope-SemiBold',
            fontSize: 24,
        },
        title: {
            fontFamily: 'Manrope-SemiBold',
            fontSize: 20,
        },
        subheading: {
            fontFamily: 'Manrope-SemiBold',
            fontSize: 16,
        },
        body: {
            fontFamily: 'Manrope-Regular',
            fontSize: 14,
        },
        caption: {
            fontFamily: 'Manrope-Regular',
            fontSize: 12,
        },
        button: {
            fontFamily: 'Manrope-Regular',
            fontSize: 14,
        },
        input: {
            fontFamily: 'Manrope-Regular',
            fontSize: 12,
        },
    },
    spacer: 6, //The Spacing Value will multiplied with this spacer
};
