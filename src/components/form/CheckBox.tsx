import Typography from 'components/Typography';
import React from 'react';
import {
    StyleProp,
    StyleSheet,
    TouchableWithoutFeedback,
    View,
    ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { getVerticalAlignment } from '../../helpers/theme.helper';
import { LabelValueType } from '../../types/data.type';
import { AlignmentType } from '../../types/theme.type';
import { useBasic } from '../context/BasicProvider';

interface BoxType {
    label: string;
    value: string | number;
    active: boolean;
    onChange: (value: string) => void;
    disabled?: boolean;
}

const Box = ({ label, value, active, onChange, disabled = false }: BoxType) => {
    const { colors } = useBasic();
    return (
        <TouchableWithoutFeedback
            onPress={() => (disabled ? null : onChange(value.toString()))}
        >
            <View style={styles.checkBox}>
                <View
                    style={[
                        styles.checkBoxIndicator,
                        {
                            borderColor: disabled
                                ? colors.caption
                                : active
                                ? colors.primary
                                : colors.caption,
                            backgroundColor: disabled
                                ? colors.caption
                                : 'transparent',
                        },
                    ]}
                >
                    <View
                        style={[
                            styles.checkBoxIndicatorDot,
                            {
                                backgroundColor: disabled
                                    ? 'transparent'
                                    : active
                                    ? colors.primary
                                    : 'transparent',
                            },
                        ]}
                    />
                </View>
                <View style={styles.checkBoxLabelContainer}>
                    <Typography
                        color={
                            disabled ? 'caption' : active ? 'text' : 'caption'
                        }
                    >
                        {label}
                    </Typography>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

interface TypeProps {
    label?: string;
    data: LabelValueType[];
    align?: AlignmentType;
    direction?: 'horizontal' | 'vertical';
    onChange: (value: string) => void;
    value?: string;
    disabled?: boolean;
    error?: boolean | string;
    helperText?: string;
    style?: StyleProp<ViewStyle>;
}

const CheckBox: React.FC<TypeProps> = ({
    label,
    data,
    align,
    direction = 'horizontal',
    onChange,
    value,
    disabled = false,
    error = false,
    helperText,
    style,
}) => {
    const { colors } = useBasic();

    const onChangeHandle = (stringValue: string) => {
        const isSelected = value?.split(',').findIndex(d => d === stringValue);

        let newValue = '';
        if (isSelected === -1) {
            newValue = `${value},${stringValue}`;
        } else {
            newValue = value?.split(`,${stringValue}`).join('') || '';
        }

        onChange(newValue);
    };

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
            <View
                style={[
                    styles.content,
                    {
                        flexDirection:
                            direction === 'horizontal' ? 'row' : 'column',
                        ...getVerticalAlignment(align),
                    },
                    style,
                ]}
            >
                {data.map((d, i) => (
                    <Box
                        key={i}
                        label={d.label}
                        value={d.value}
                        onChange={onChangeHandle}
                        disabled={disabled}
                        active={
                            value?.includes(`,${d.value.toString()}`) || false
                        }
                    />
                ))}
            </View>
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
        paddingLeft: 15,
        flexWrap: 'wrap',
    },
    checkBox: {
        flexDirection: 'row',
        paddingTop: 6,
        paddingRight: 5,
        paddingBottom: 8,
    },
    checkBoxIndicator: {
        width: 18,
        height: 18,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        borderRadius: 3,
    },
    checkBoxIndicatorDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
    },
    checkBoxLabelContainer: {
        alignItems: 'center',
        marginLeft: 8,
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
});

export default CheckBox;
