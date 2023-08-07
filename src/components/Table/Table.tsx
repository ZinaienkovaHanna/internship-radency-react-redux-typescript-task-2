import React from 'react';
import { PropsTable } from '../../types/notesTypes';

const Table: React.FC<PropsTable> = ({
    headers,
    rows,
    rowClassName,
    tableClassName,
}) => {
    return (
        <table className="mx-auto border-separate border-spacing-x-0 border-spacing-y-2 w-10/12">
            <thead>
                <tr>
                    {headers.map((header) => (
                        <th
                            key={header.key}
                            className="text-2xl font-bold px-5 py-5 bg-bg-header text-text-header text-left"
                        >
                            {header.label}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="text-base font-normal text-text-note">
                {rows.map((row) => (
                    <tr key={row.id} className={rowClassName}>
                        {headers.map((header) => (
                            <td
                                key={header.key}
                                className="px-4 py-2 max-w-xs break-words  bg-bg-note "
                            >
                                {row[header.key]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
