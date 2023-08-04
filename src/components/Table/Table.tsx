import React from 'react';
import { PropsTable } from '../../types/notesTypes';

import './Table.css';

const Table: React.FC<PropsTable> = ({
    headers,
    rows,
    rowClassName,
    tableClassName,
}) => {
    return (
        <table className={tableClassName}>
            <thead>
                <tr>
                    {headers.map((header) => (
                        <th key={header.key}>{header.label}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row) => (
                    <tr key={row.id} className={rowClassName}>
                        {headers.map((header) => (
                            <td key={header.key}>{row[header.key]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
