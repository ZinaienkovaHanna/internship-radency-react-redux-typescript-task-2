import React from 'react';
import { useState, useEffect } from 'react';
import SummaryTableRow from './SummaryTableRow';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { categories } from '../../data/notes';

import './SummaryTable.css';

const SummaryTable: React.FC = () => {
    const { notes } = useTypedSelector((state) => state.notes);
    const [summaryData, setSummaryData] = useState<{
        [key: string]: { active: number; archived: number };
    }>({
        Task: { active: 0, archived: 0 },
        Idea: { active: 0, archived: 0 },
        'Random Thought': { active: 0, archived: 0 },
        Quote: { active: 0, archived: 0 },
    });

    useEffect(() => {
        const counts: {
            [key: string]: {
                active: number;
                archived: number;
            };
        } = {};

        categories.forEach((category) => {
            counts[category] = { active: 0, archived: 0 };
        });

        notes.forEach((note) => {
            if (note.category in counts) {
                note.archived
                    ? counts[note.category].archived++
                    : counts[note.category].active++;
            }
        });

        setSummaryData(counts);
    }, [notes]);

    return (
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Note Category</th>
                    <th>Active</th>
                    <th>Archived</th>
                </tr>
            </thead>
            <tbody>
                {categories.map((category) => (
                    <SummaryTableRow
                        key={category}
                        category={category}
                        data={summaryData[category]}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default SummaryTable;
