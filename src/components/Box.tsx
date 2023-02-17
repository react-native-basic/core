import React from 'react';
import {
    ScrollView,
    StyleProp,
    StyleSheet,
    View,
    ViewStyle,
} from 'react-native';
import { AlignItemsType, JustifyContentType } from '../types/theme.type';

interface TypeProps {
    children?: React.ReactNode;
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
    flex?: number;
    scrollable?: boolean;
    justifyContent?: JustifyContentType;
    alignItems?: AlignItemsType;
    style?: StyleProp<ViewStyle>;
}

const Box: React.FC<TypeProps> = ({
    children,
    margin = 0,
    marginTop = 0,
    marginRight = 0,
    marginBottom = 0,
    marginLeft = 0,
    padding = 0,
    paddingTop = 0,
    paddingRight = 0,
    paddingBottom = 0,
    paddingLeft = 0,
    flex,
    scrollable,
    justifyContent,
    alignItems,
    style = {},
}) => {
    return (
        <>
            {scrollable === true ? (
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={[
                        styles.container,
                        {
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
                            flex,
                            justifyContent,
                            alignItems,
                        },
                        style,
                    ]}
                >
                    {children}
                </ScrollView>
            ) : (
                <View
                    style={[
                        styles.container,
                        {
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
                            flex,
                            justifyContent,
                            alignItems,
                        },
                        style,
                    ]}
                >
                    {children}
                </View>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
});

export default Box;
