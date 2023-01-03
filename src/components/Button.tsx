import React from 'react';
import {
    StyleProp,
    StyleSheet,
    TouchableOpacity,
    View,
    ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { ColorType } from '../types/theme.type';
import { useBasic } from './context/BasicProvider';
import Typography from './Typography';

interface TypeProps {
    onPress?: () => void;
    title?: string;
    icon?: string;
    color?: ColorType;
    disabled?: boolean;
    loading?: boolean;
    style?: StyleProp<ViewStyle>;
}

const Button: React.FC<TypeProps> = ({
    onPress,
    title,
    icon,
    color = 'primary',
    disabled = false,
    loading = false,
    style,
}) => {
    const { colors, radius, darkMode } = useBasic();

    return (
        <TouchableOpacity
            onPress={disabled || loading ? () => null : onPress}
            style={styles.container}
        >
            <View
                style={[
                    styles.content,
                    {
                        backgroundColor: disabled
                            ? colors.caption
                            : colors[color],
                        borderRadius: radius.medium,
                        padding: icon ? 19 : 22,
                    },
                    style,
                ]}
            >
                {icon ? (
                    <View>
                        <Icon
                            name={icon}
                            size={25}
                            color={
                                color === 'background'
                                    ? colors.text
                                    : colors.background
                            }
                        />
                    </View>
                ) : null}

                <Typography
                    color={darkMode ? 'text' : 'background'}
                    align="center"
                    size="button"
                >
                    {title}
                </Typography>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    content: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Button;
