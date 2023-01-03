import React, { useEffect, useRef, useState } from 'react';
import {
    Animated,
    Easing,
    StyleProp,
    StyleSheet,
    View,
    ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useBasic } from './context/BasicProvider';
import Typography from './Typography';

interface TypeProps {
    type?: 'success' | 'info' | 'error';
    message: string;
    duration?: number;
    style?: StyleProp<ViewStyle>;
}

const Toast: React.FC<TypeProps> = ({
    type,
    message,
    duration = 3000,
    style = {},
}) => {
    const { colors, darkMode } = useBasic();
    const animValue = useRef(new Animated.Value(0)).current;
    const [isOnAction, setOnAction] = useState<boolean>(false);

    useEffect(() => {
        showAnimation();
    }, [message]);

    const showAnimation = () => {
        if (!isOnAction) {
            setOnAction(true);

            Animated.timing(animValue, {
                toValue: 1,
                duration: 300,
                easing: Easing.bezier(0.37, 0, 0.63, 1),
                useNativeDriver: true,
            }).start(() =>
                setTimeout(() => {
                    hideAnimation();
                }, duration),
            );
        }
    };

    const hideAnimation = () => {
        Animated.timing(animValue, {
            toValue: 0,
            duration: 300,
            easing: Easing.bezier(0.37, 0, 0.63, 1),
            useNativeDriver: true,
        }).start(() => setOnAction(false));
    };

    let scaleAnim = animValue.interpolate({
        inputRange: [0, 0.6, 1],
        outputRange: [0, 1.2, 1],
    });

    return (
        <View style={[styles.container]}>
            <Animated.View
                style={[
                    styles.content,
                    {
                        backgroundColor: darkMode ? '#000000' : '#000000AA',
                        transform: [{ scale: scaleAnim }],
                    },
                    style,
                ]}
            >
                <View style={styles.iconContainer}>
                    <Icon
                        name={type === 'success' ? 'checkcircle' : 'infocirlce'}
                        size={20}
                        color={
                            type === 'success'
                                ? colors.primary
                                : darkMode
                                ? colors.text
                                : colors.background
                        }
                    />
                </View>
                <Typography
                    color={darkMode ? 'text' : 'background'}
                    size="caption"
                >
                    {message}...
                </Typography>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 6,
        position: 'absolute',
        bottom: 70,
        left: 20,
        right: 20,
        zIndex: 7,
        alignItems: 'center',
    },
    content: {
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        marginRight: 10,
    },
});

export default Toast;
