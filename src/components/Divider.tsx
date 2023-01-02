import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { ColorType } from '../types/theme.type';
import { useBasic } from './context/BasicProvider';

interface TypeProps {
    color?: ColorType;
    padding?: number;
    margin?: number;
    style?: StyleProp<ViewStyle>;
}

const Divider: React.FC<TypeProps> = ({
    color = 'caption',
    padding = 20,
    margin = 20,
    style = {},
}) => {
    const { colors } = useBasic();

    return (
        <View
            style={[
                styles.container,
                {
                    paddingLeft: padding,
                    paddingRight: padding,
                    marginTop: margin,
                    marginBottom: margin,
                },
                style,
            ]}
        >
            <View
                style={[
                    styles.content,
                    {
                        borderColor: colors[color] + '66',
                    },
                ]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
    content: {
        flex: 1,
        borderTopWidth: 1,
    },
});

export default Divider;
