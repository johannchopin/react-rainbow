import styled from 'styled-components';
import attachThemeAttrs from '../../../styles/helpers/attachThemeAttrs';
import { FONT_SIZE_TEXT_LARGE } from '../../../styles/fontSizes';
import { PADDING_LARGE } from '../../../styles/paddings';
import { COLOR_GRAY_4 } from '../../../styles/colors';

const StyledButtonItemLabel = attachThemeAttrs(styled.label).attrs(props => {
    const { getContrastText, brand, text } = props.palette;
    const brandMainContrastText = getContrastText(brand.main);
    const inverseLabel = props.palette.isDark ? COLOR_GRAY_4 : text.label;

    return {
        brandMainContrastText,
        inverseLabel,
    };
})`
    display: inline-flex;
    font-size: ${FONT_SIZE_TEXT_LARGE};
    color: ${props => props.inverseLabel};
    padding: 0 ${PADDING_LARGE};
    font-weight: 400;
    box-sizing: border-box;

    &:hover {
        cursor: pointer;
    }
    ${props =>
        props.isChecked &&
        `
            color: ${props.palette.text.main};
        `};
    ${props =>
        props.disabled &&
        `   
            background-color: transparent;
            border-color: ${props.palette.border.main};
            color: ${props.palette.text.disabled};

            :hover {
                cursor: not-allowed;
            }
        `};
    ${props =>
        props.variant === 'brand' &&
        props.isChecked &&
        `
            color: ${props.brandMainContrastText};
        `};
    ${props =>
        props.variant === 'inverse' &&
        props.isChecked &&
        `
            color: ${props.brandMainContrastText};
        `};
`;

export default StyledButtonItemLabel;
