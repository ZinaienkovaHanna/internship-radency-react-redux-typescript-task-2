import React from 'react';
import { BiTask } from 'react-icons/bi';
import { FaLightbulb, FaQuoteRight, FaComment } from 'react-icons/fa';

import { PropsSummaryCategory } from '../../types/notesTypes';

import './SummaryCategory.css';

const SummaryCategory: React.FC<PropsSummaryCategory> = ({
    category,
    data,
}) => {
    const { active, archived } = data;

    const getIconByCategory = (category: string) => {
        switch (category) {
            case 'Task':
                return <BiTask />;
            case 'Idea':
                return <FaLightbulb />;
            case 'Random Thought':
                return <FaComment />;
            case 'Quote':
                return <FaQuoteRight />;
            default:
                return null;
        }
    };

    console.log(data);

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
