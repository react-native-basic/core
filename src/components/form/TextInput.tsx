import Typography from 'components/Typography';
import React, { useRef } from 'react';
import {
    Animated,
    Easing,
    KeyboardTypeOptions,
    Platform,
    ReturnKeyTypeOptions,
    StyleProp,
    StyleSheet,
    TextInput as DefultTextInput,
    TextStyle,
    TouchableOpacity,
    View,
    ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useBasic } from '../context/BasicProvider';

interface TypeProps {
    label?: string;
    secureTextEntry?: boolean;
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
    textAlign?: 'left' | 'center' | 'right';
    leftIcon?: string;
    leftText?: string;
    rightIcon?: string;
    rightText?: string;
    leftAction?: () => void;
    rightAction?: () => void;
    placeholder?: string;
    onChange?: (value: string) => void;
    value?: string;
    disabled?: boolean;
    size?: 'normal' | 'huge';
    error?: boolean | string;
    helperText?: string;
    keyboardType?: KeyboardTypeOptions;
    returnKeyType?: ReturnKeyTypeOptions;
    onSubmitEditing?: () => void;
    style?: StyleProp<ViewStyle>;
    inputStyle?: StyleProp<TextStyle>;
}

const TextInput: React.FC<TypeProps> = ({
    label,
    secureTextEntry,
    autoCapitalize,
    textAlign,
    leftIcon,
    rightIcon,
    leftAction,
    leftText,
    rightText,
    rightAction,
    placeholder,
    onChange,
    value,
    disabled = false,
    size = 'normal',
    error = false,
    helperText,
    keyboardType,
    returnKeyType,
    onSubmitEditing,
    style,
    inputStyle,
}) => {
    const { colors, radius, typography } = useBasic();
    const animationValue = useRef(new Animated.Value(0)).current;

    const onFocus = () => {
        Animated.timing(animationValue, {
            toValue: 1,
            duration: 200,
            useNativeDriver: false,
            easing: Easing.bezier(0.61, 1, 0.88, 1),
        }).start();
    };

    const onBlur = () => {
        Animated.timing(animationValue, {
            toValue: 0,
            duration: 200,
            useNativeDriver: false,
            easing: Easing.bezier(0.61, 1, 0.88, 1),
        }).start();
    };

    const borderColorAnim = animationValue.interpolate({
        inputRange: [0, 1],
        outputRange: [colors.caption + '66', colors.primary],
    });

    return (
        <View
            style={[
                styles.container,
                {
                    marginBottom: label ? 10 : 16,
                },
            ]}
        >
            {label ? (
                <View style={styles.labelContainer}>
                    <Typography
                        size="caption"
                        color={error ? 'danger' : 'text'}
                    >
                        {label}
                    </Typography>
                </View>
            ) : null}
            <Animated.View
                style={[
                    styles.content,
                    {
                        borderColor: error ? colors.danger : borderColorAnim,
                        borderRadius: radius.medium,
                        backgroundColor: disabled
                            ? colors.surface
                            : colors.background,
                    },
                    style,
                ]}
            >
                {leftIcon && leftAction ? (
                    <TouchableOpacity
                        onPress={() => leftAction()}
                        style={styles.leftIconContainer}
                    >
                        <Icon
                            name={leftIcon}
                            size={25}
                            color={colors.text + '55'}
                        />
                    </TouchableOpacity>
                ) : leftIcon && !leftAction ? (
                    <View style={styles.leftIconContainer}>
                        <Icon
                            name={leftIcon}
                            size={25}
                            color={colors.text + '55'}
                        />
                    </View>
                ) : leftText ? (
                    <Typography color="caption" align="center" paddingLeft={20}>
                        {leftText}
                    </Typography>
                ) : null}
                <DefultTextInput
                    style={[
                        styles.textInput,
                        {
                            borderColor: colors.surface,
                            color: colors.text,
                            borderRadius: radius.medium,
                            fontFamily:
                                size === 'huge'
                                    ? typography.body.fontFamily
                                    : typography.input.fontFamily,
                            fontSize:
                                size === 'huge'
                                    ? typography.display.fontSize
                                    : typography.input.fontSize,
                            paddingLeft: leftIcon ? 10 : 20,
                            paddingRight: rightIcon ? 20 : 20,
                        },
                        inputStyle,
                    ]}
                    placeholder={placeholder}
                    placeholderTextColor={colors.text + '86'}
                    textAlign={textAlign}
                    cursorColor={colors.text + 'AA'}
                    multiline={textAlign === 'center' ? true : false}
                    numberOfLines={textAlign === 'center' ? 1 : undefined}
                    blurOnSubmit={textAlign === 'center' ? true : undefined}
                    returnKeyType={
                        textAlign === 'center' ? 'done' : returnKeyType
                    }
                    onChangeText={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    value={value}
                    editable={!disabled}
                    secureTextEntry={secureTextEntry}
                    autoCapitalize={autoCapitalize}
                    keyboardType={keyboardType}
                    onSubmitEditing={onSubmitEditing}
                />
                {rightIcon && rightAction ? (
                    <TouchableOpacity
                        onPress={() => rightAction()}
                        style={styles.rightIconContainer}
                    >
                        <Icon
                            name={rightIcon}
                            size={25}
                            color={colors.text + '55'}
                        />
                    </TouchableOpacity>
                ) : rightIcon && !rightAction ? (
                    <View style={styles.rightIconContainer}>
                        <Icon
                            name={rightIcon}
                            size={25}
                            color={colors.text + '55'}
                        />
                    </View>
                ) : rightText ? (
                    <Typography
                        color="caption"
                        align="center"
                        paddingRight={20}
                    >
                        {rightText}
                    </Typography>
                ) : null}
            </Animated.View>
            {helperText || error ? (
                <View style={styles.textHelperContainer}>
                    <Icon
                        name="infocirlceo"
                        size={15}
                        color={error ? colors.danger : colors.caption}
                    />
                    <Typography
                        size="caption"
                        color={error ? 'danger' : 'secondary'}
                        marginLeft={5}
                    >
                        {helperText || error}
                    </Typography>
                </View>
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 13,
    },
    content: {
        flexDirection: 'row',
        borderWidth: 1,
        alignItems: 'center',
    },
    leftIconContainer: {
        paddingLeft: 15,
    },
    rightIconContainer: {
        position: 'absolute',
        right: 15,
    },
    textInput: {
        flex: 6,
        padding: Platform.OS === 'android' ? 13 : 20,
    },
    labelContainer: {
        marginLeft: 15,
        marginBottom: 5,
    },
    textHelperContainer: {
        flexDirection: 'row',
        marginLeft: 15,
        marginTop: 3,
        alignItems: 'center',
    },
    loader: {
        width: 80,
        height: 80,
        marginRight: -30,
    },
});

export default TextInput;
