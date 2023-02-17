import React from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';
import {
    ColorType,
    TextAlignmentType,
    TypographyType,
} from '../types/theme.type';
import { useBasic } from './context/BasicProvider';

interface TypeProps {
    children: React.ReactNode;
    size?: TypographyType;
    align?: TextAlignmentType;
    color?: ColorType;
    margin?: number;
    marginTop?: number;
    marginRight?: number;
    marginBottom?: number;
    marginLeft?: number;
    padding?: number;
    paddingTop?: number;
    paddingRight?: number;
    paddingBottom?: number;
    paddingLeft?: number;
    style?: StyleProp<TextStyle>;
}

const Typography: React.FC<TypeProps> = ({
    children,
    size = 'body',
    align = 'auto',
    color = 'text',
    margin,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    padding,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    style = {},
}) => {
    const { colors, typography } = useBasic();

    return (
        <Text
            style={[
                {
                    color: colors[color],
                    fontSize: typography[size].fontSize,
                    fontFamily: typography[size].fontFamily,
                    textAlign: align,
                    margin,
                    marginTop,
                    marginRight,
                    marginBottom,
                    marginLeft,
                    padding,
                    paddingTop,
                    paddingRight,
                    paddingBottom,
                    paddingLeft,
                },
                style,
            ]}
        >
            {children}
        </Text>
    );
};

export default Typography;
