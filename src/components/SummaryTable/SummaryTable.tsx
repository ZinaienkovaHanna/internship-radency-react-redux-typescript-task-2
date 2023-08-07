import React from 'react';
import { useState, useEffect } from 'react';
import Table from '../Table/Table';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { categories } from '../../data/notes';
import { getIconByCategory } from '../../utils/utils';

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

    const headers = [
        { label: 'Note Category', key: 'category' },
        { label: 'Active', key: 'active' },
        { label: 'Archived', key: 'archived' },
    ];

    const rows = categories.map((category) => ({
        id: category,
        category: (
            <div className="flex items-center">
                <div className="flex items-center justify-center bg-text-header w-8 h-8 rounded-full">
                    {getIconByCategory(category)}
                </div>
                <div className="ml-4">{category}</div>
            </div>
        ),
        ...summaryData[category],
    }));

    return <Table headers={headers} rows={rows} />;
};

export default SummaryTable;
