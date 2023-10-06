import {configureFonts, getFontThemeList} from '@nfq/next-fonts';
import {createGlobalStyle} from 'styled-components';

import type {Config} from '@nfq/react-grid';
import type {DefaultTheme} from 'styled-components';

export const fontDefinitions = configureFonts({
    Lato: [
        {
            fontDisplay: 'swap',
            fontStyle: 'normal',
            fontWeight: 'bold',
            preload: true,
            src: '/fonts/lato-bold.woff2'
        },
        {
            fontDisplay: 'swap',
            fontStyle: 'normal',
            fontWeight: 'normal',
            preload: true,
            src: '/fonts/lato-regular.woff2'
        }
    ]
});

const nfqgrid: Config = {
    baseSpacing: 0.5,
    container: {
        lg: 960,
        md: 740,
        sm: 540,
        xl: 1140,
        xs: 'fluid',
        xxl: 1140
    },
    containerPadding: {xs: 20}
};

export enum Colors {
    /** Page background color. ![#222222](https://via.placeholder.com/12/FFFFFF/FFFFFF.png) `#222222`. */
    pageBackground = '#222',

    /** Brand main color. ![#ff6b00](https://via.placeholder.com/12/FFFFFF/FFFFFF.png) `#ff6b00`. */
    brandMain = '#ff6b00',

    /** Font light color. ![#eee](https://via.placeholder.com/12/FFFFFF/FFFFFF.png) `#eee`. */
    fontLight = '#eee',

    /** Accent light color. ![#ee3d78](https://via.placeholder.com/12/FFFFFF/FFFFFF.png) `#ee3d78`. */
    accentLight = '#ee3d78'

}

export enum BoxShadows {
    /** The default dropshadow for Popovers. */
    popOverShadow = '0px 0px 10px 5px rgba(25, 38, 48, 0.05)'
}

export const theme: DefaultTheme = {
    boxShadows: BoxShadows,
    colors: Colors,
    fonts: getFontThemeList(fontDefinitions),
    nfqgrid
};

export const GlobalStyle = createGlobalStyle`
    *,
    &::before,
    &::after {
        box-sizing: border-box;
    }

    * {
        -webkit-tap-highlight-color: transparent;
    }

    html {
        font-size: 10px;
    }

    html, body {
        background-color: ${({theme: globalTheme}) => globalTheme.colors.pageBackground};
        height: 100%;
        margin: 0;
        min-height: 100%;
        overflow: hidden;
        padding: 0;
        scroll-behavior: smooth;
    }

    #__next {
        background-color: ${({theme: globalTheme}) => globalTheme.colors.pageBackground};
        height: 100%;
        min-height: 100%;
        overflow: hidden;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
`;