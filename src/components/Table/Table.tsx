import React from 'react';
import { PropsTable } from '../../types/notesTypes';

const Table: React.FC<PropsTable> = ({ headers, rows }) => {
    return (
        <table>
            <thead>
                <tr>
                    {headers.map((header) => (
                        <th key={header.key}>{header.label}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, index) => (
                    <tr key={index}>
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
