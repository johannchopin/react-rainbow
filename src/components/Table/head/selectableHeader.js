import React from 'react';
import PropTypes from 'prop-types';
import InputCheckbox from './InputCheckbox';
import StyledWrapper from './styled/wrapper';
import StyledCheckboxWrapper from './styled/checkboxWrapper';
import StyledScrollShadow from './styled/scrollShadow';

export default function SelectableHeader(props) {
    const {
        onSelectAllRows,
        onDeselectAllRows,
        tableId,
        maxRowSelection,
        bulkSelection,
        hasScroll,
        style,
    } = props;
    const name = `${tableId}-options`;
    const isDisabled = maxRowSelection === 0;
    const isRadio = maxRowSelection === 1;
    const isIndeterminate = bulkSelection === 'some';
    const isAllSelected = bulkSelection === 'all';

    const handleClick = event => {
        if (bulkSelection === 'none') {
            return onSelectAllRows(event);
        }
        return onDeselectAllRows(event);
    };

    if (isRadio) {
        return (
            <StyledWrapper as="th" style={style} scope="col" tabIndex={-1}>
                <StyledScrollShadow hasScroll={hasScroll} />
            </StyledWrapper>
        );
    }

    return (
        <th style={style} scope="col" tabIndex={-1}>
            <StyledCheckboxWrapper style={style}>
                <InputCheckbox
                    name={name}
                    label="select all rows"
                    hideLabel
                    type="checkbox"
                    tabIndex="-1"
                    checked={isAllSelected}
                    indeterminate={isIndeterminate}
                    disabled={isDisabled}
                    onClick={handleClick}
                />
            </StyledCheckboxWrapper>
            <StyledScrollShadow hasScroll={hasScroll} />
        </th>
    );
}

SelectableHeader.propTypes = {
    onSelectAllRows: PropTypes.func,
    onDeselectAllRows: PropTypes.func,
    tableId: PropTypes.string.isRequired,
    maxRowSelection: PropTypes.number,
    bulkSelection: PropTypes.oneOf(['none', 'some', 'all']),
    hasScroll: PropTypes.bool,
    style: PropTypes.object,
};

SelectableHeader.defaultProps = {
    onSelectAllRows: () => {},
    onDeselectAllRows: () => {},
    maxRowSelection: undefined,
    bulkSelection: 'none',
    hasScroll: false,
    style: undefined,
};
