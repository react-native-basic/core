import { StyleProp, ViewStyle } from 'react-native';
import { AlignmentType, ModalSizeType } from '../types/theme.type';

export function getHorizontalAlignment(alignment?: AlignmentType) {
    let styleValue: StyleProp<ViewStyle> = {};

    switch (alignment) {
        case 'start':
            styleValue = {
                alignItems: 'flex-start',
            };
            break;
        case 'center':
            styleValue = {
                alignItems: 'center',
            };
            break;
        case 'end':
            styleValue = {
                alignItems: 'flex-end',
            };
            break;
        default:
            styleValue = {
                alignItems: 'stretch',
            };
    }

    return styleValue;
}

export function getVerticalAlignment(alignment?: AlignmentType) {
    let styleValue: StyleProp<ViewStyle> = {};

    switch (alignment) {
        case 'start':
            styleValue = {
                justifyContent: 'flex-start',
            };
            break;
        case 'center':
            styleValue = {
                justifyContent: 'center',
            };
            break;
        case 'end':
            styleValue = {
                justifyContent: 'flex-end',
            };
            break;
        default:
            styleValue = {
                justifyContent: 'flex-start',
            };
    }

    return styleValue;
}

export function getModalSize(size: ModalSizeType) {
    let flexValue = {
        emptyFlex: 4,
        contentFlex: 2,
    };

    switch (size) {
        case 'default':
            flexValue = {
                emptyFlex: 4,
                contentFlex: 2,
            };
            break;
        case 'half':
            flexValue = {
                emptyFlex: 3,
                contentFlex: 3,
            };
            break;
        case 'full':
            flexValue = {
                emptyFlex: 1,
                contentFlex: 6,
            };
            break;
        default:
    }

    return flexValue;
}
