import React from 'react';
import {
    StyleProp,
    StyleSheet,
    TouchableOpacity,
    View,
    ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Box from './Box';
import { useBasic } from './context/BasicProvider';
import Typography from './Typography';

interface TypeProps {
    title: string;
    icon?: string;
    caption?: string;
    onPress?: () => void;
    padding?: number;
    paddingTop?: number;
    paddingRight?: number;
    paddingBottom?: number;
    paddingLeft?: number;
    margin?: number;
    marginTop?: number;
    marginRight?: number;
    marginBottom?: number;
    marginLeft?: number;
    style?: StyleProp<ViewStyle>;
}

const ListMenu: React.FC<TypeProps> = ({
    title,
    icon,
    caption,
    onPress = () => null,
    padding,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    margin,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    style = {},
}) => {
    const { colors } = useBasic();

    return (
        <View
            style={[
                styles.container,
                {
                    padding,
                    paddingTop,
                    paddingRight,
                    paddingBottom,
                    paddingLeft,
                    margin,
                    marginTop,
                    marginRight,
                    marginBottom,
                    marginLeft,
                },
                style,
            ]}
        >
            <TouchableOpacity onPress={onPress}>
                <View style={styles.content}>
                    <View style={styles.icon}>
                        <Icon
                            name={icon || 'info'}
                            size={23}
                            color={colors.text}
                        />
                    </View>
                    <View style={styles.title}>
                        <Typography marginLeft={3}>{title}</Typography>
                    </View>
                    <View style={styles.rightIcon}>
                        <Typography color="caption">{caption}</Typography>
                        <Box marginLeft={5}>
                            <Icon
                                name="right"
                                size={18}
                                color={colors.caption}
                            />
                        </Box>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
    content: {
        flexDirection: 'row',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 15,
        paddingRight: 20,
    },
    icon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        flex: 5,
        justifyContent: 'center',
    },
    rightIcon: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
});

export default ListMenu;
