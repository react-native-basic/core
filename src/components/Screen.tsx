import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';
import {
    getHorizontalAlignment,
    getVerticalAlignment,
} from '../helpers/theme.helper';
import { AlignmentType } from '../types/theme.type';
import { useBasic } from './context/BasicProvider';

interface TypeProps {
    children: React.ReactNode;
    horizontalAlignment?: AlignmentType;
    verticalAlignment?: AlignmentType;
    scrollable?: boolean;
}

const Screen: React.FC<TypeProps> = ({
    children,
    horizontalAlignment,
    verticalAlignment,
    scrollable = true,
}) => {
    const { darkMode, colors } = useBasic();

    return (
        <SafeAreaView
            style={[
                styles.container,
                {
                    backgroundColor: colors.background,
                },
            ]}
        >
            <StatusBar
                barStyle={darkMode ? 'light-content' : 'dark-content'}
                backgroundColor={colors.background}
            />
            {scrollable ? (
                <ScrollView
                    // contentInsetAdjustmentBehavior="automatic"
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={[
                        styles.content,
                        {
                            paddingBottom: 20,
                            ...getHorizontalAlignment(horizontalAlignment),
                            ...getVerticalAlignment(verticalAlignment),
                        },
                    ]}
                >
                    {children}
                </ScrollView>
            ) : (
                <View
                    style={[
                        styles.content,
                        {
                            flex: 6,
                            ...getHorizontalAlignment(horizontalAlignment),
                            ...getVerticalAlignment(verticalAlignment),
                        },
                    ]}
                >
                    {children}
                </View>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 10 },
    content: {},
});

export default Screen;
