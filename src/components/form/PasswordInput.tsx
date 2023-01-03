import React, { useState } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import TextInput from './TextInput';

export interface TypeProps {
    textAlign?: 'left' | 'center' | 'right';
    leftIcon?: string;
    rightIcon?: string;
    leftAction?: () => void;
    rightAction?: () => void;
    placeholder?: string;
    onChange?: (value: string) => void;
    value?: string;
    disabled?: boolean;
    error?: boolean | string;
    helperText?: string;
    style?: StyleProp<ViewStyle>;
    inputStyle?: StyleProp<TextStyle>;
}

const PasswordInput: React.FC<TypeProps> = ({
    textAlign,
    leftIcon,
    rightIcon,
    leftAction,
    rightAction = () => null,
    placeholder,
    onChange,
    value,
    disabled = false,
    error = false,
    helperText,
    style,
    inputStyle,
}) => {
    const [textShown, setTextShown] = useState<boolean>(false);

    const rightActionHandle = () => {
        setTextShown(!textShown);
        rightAction();
    };

    return (
        <TextInput
            secureTextEntry={!textShown}
            autoCapitalize="none"
            textAlign={textAlign}
            leftIcon={leftIcon}
            leftAction={leftAction}
            rightIcon={rightIcon ? rightIcon : textShown ? 'eyeo' : 'eye'}
            rightAction={rightActionHandle}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            disabled={disabled}
            error={error}
            helperText={helperText}
            style={style}
            inputStyle={inputStyle}
        />
    );
};

export default PasswordInput;
