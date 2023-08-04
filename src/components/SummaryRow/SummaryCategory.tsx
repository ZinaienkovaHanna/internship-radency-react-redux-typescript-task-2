import React from 'react';

import { PropsSummaryCategory } from '../../types/notesTypes';
import { getIconByCategory } from '../../utils/utils';

import './SummaryCategory.css';

const SummaryCategory: React.FC<PropsSummaryCategory> = ({
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
