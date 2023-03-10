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
    children: React.ReactNode;
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
    justifyContent?: JustifyContentType;
    alignItems?: AlignItemsType;
    scrollable?: boolean;
    style?: StyleProp<ViewStyle>;
}

const Row: React.FC<TypeProps> = ({
    children,
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
    scrollable = false,
    style = {},
}) => {
    return (
        <>
            {scrollable === true ? (
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    horizontal
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
        flexDirection: 'row',
    },
});

export default Row;
