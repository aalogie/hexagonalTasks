import type {Variants} from 'framer-motion';

export const dropAnimation: Variants = {
    exit: {
        height: 0,
        opacity: 0
    },
    hidden: {
        opacity: 0,
        y: -50
    },
    visible: {
        opacity: 1,
        type: 'spring',
        y: 0
    }
};