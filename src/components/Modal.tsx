import React from 'react';
import {
    Modal as DefaultModal,
    StyleSheet,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import { getModalSize } from '../helpers/theme.helper';
import { useBasic } from './context/BasicProvider';
import Typography from './Typography';

interface TypeProps {
    children: React.ReactNode;
    size?: 'default' | 'half' | 'full';
    visible: boolean;
    onClose: (visible: boolean) => void;
    onConfirm?: () => void;
}

const Modal: React.FC<TypeProps> = ({
    children,
    size = 'default',
    visible,
    onClose = () => null,
    onConfirm,
}) => {
    const { colors, radius } = useBasic();

    const confirmHandle = () => {
        if (onConfirm) {
            onClose(false);
            onConfirm();
        }
    };

    return (
        <View>
            <DefaultModal
                animationType="slide"
                transparent={true}
                visible={visible}
                onRequestClose={() => onClose(false)}
            >
                <View style={styles.container}>
                    <TouchableWithoutFeedback onPress={() => onClose(false)}>
                        <View
                            style={[
                                styles.emptyContent,
                                { flex: getModalSize(size).emptyFlex },
                            ]}
                        />
                    </TouchableWithoutFeedback>
                    <View
                        style={[
                            styles.content,
                            {
                                flex: getModalSize(size).contentFlex,
                                backgroundColor: colors.background,
                                borderTopEndRadius: radius.medium,
                                borderTopStartRadius: radius.medium,
                            },
                        ]}
                    >
                        <View style={styles.modalHeader}>
                            <TouchableWithoutFeedback
                                onPress={() => onClose(false)}
                            >
                                <View>
                                    <Typography size="subheading">
                                        Close
                                    </Typography>
                                </View>
                            </TouchableWithoutFeedback>
                            {onConfirm ? (
                                <TouchableWithoutFeedback
                                    onPress={confirmHandle}
                                >
                                    <View>
                                        <Typography size="subheading">
                                            Confirm
                                        </Typography>
                                    </View>
                                </TouchableWithoutFeedback>
                            ) : null}
                        </View>
                        <View style={styles.childrenContainer}>{children}</View>
                    </View>
                </View>
            </DefaultModal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 6,
        flexDirection: 'column',
        backgroundColor: '#00000099',
    },
    emptyContent: {
        flex: 4,
    },
    content: {
        flex: 2,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 18,
    },
    childrenContainer: {
        padding: 18,
        paddingTop: 0,
    },
});

export default Modal;
