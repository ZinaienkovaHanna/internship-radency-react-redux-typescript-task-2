import React from 'react';

import { PropsSummaryTableRow } from '../../types/notesTypes';
import { getIconByCategory } from '../../utils/utils';

import './SummaryTableRow.css';

const SummaryCategory: React.FC<PropsSummaryTableRow> = ({
    category,
    data,
}) => {
    const { active, archived } = data;

    return (
        <tr>
            <td>
                <div className="circle-icon">{getIconByCategory(category)}</div>
            </td>
            <td>{category}</td>
            <td>{active}</td>
            <td>{archived}</td>
        </tr>
    );
};

export default SummaryCategory;
