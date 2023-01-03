import React from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useBasic } from './context/BasicProvider';
import Typography from './Typography';

interface TypeProps {
    title?: string;
    leftIcon?: string;
    rightIcon?: string;
    leftAction?: () => void;
    rightAction?: () => void;
}

const AppBar: React.FC<TypeProps> = ({
    title,
    leftIcon,
    rightIcon,
    leftAction = () => null,
    rightAction = () => null,
}) => {
    const { colors } = useBasic();

    return (
        <SafeAreaView
            style={[
                styles.container,
                {
                    backgroundColor: colors.background,
                },
            ]}
        >
            <View style={styles.content}>
                <View style={styles.action}>
                    {leftIcon ? (
                        <TouchableOpacity onPress={() => leftAction()}>
                            <View style={styles.iconContainer}>
                                <Icon
                                    name={leftIcon}
                                    size={21}
                                    color={colors.text}
                                />
                            </View>
                        </TouchableOpacity>
                    ) : null}
                </View>
                <View style={styles.center}>
                    <Typography
                        size="subheading"
                        align="center"
                        style={styles.title}
                    >
                        {title}
                    </Typography>
                </View>
                <View style={styles.action}>
                    {rightIcon ? (
                        <TouchableOpacity onPress={() => rightAction()}>
                            <View style={styles.iconContainer}>
                                <Icon
                                    name={rightIcon}
                                    size={21}
                                    color={colors.text}
                                />
                            </View>
                        </TouchableOpacity>
                    ) : null}
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flexDirection: 'row',
        padding: 5,
        height: 65,
    },
    center: {
        flex: 4,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    action: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {},
    iconContainer: {
        padding: 8,
    },
});

export default AppBar;
