import { NoteType } from '../types/notesTypes';

const notes: NoteType[] = [
    {
        id: '1',
        name: 'Shopping List',
        created: new Date('2023-07-27').toLocaleDateString(),
        category: 'Task',
        content: 'Buy bananas, tomatoes, and bread. 01.08.2023',
        dates: new Date('2023-08-01').toLocaleDateString(),
        archived: false,
    },
    {
        id: '2',
        name: 'To-Do List',
        created: new Date('2023-07-27').toLocaleDateString(),
        category: 'Idea',
        content: 'Finish the report for work. 03.08.2023',
        dates: new Date('2023-08-03').toLocaleDateString(),
        archived: false,
    },
    {
        id: '3',
        name: 'Recipe',
        created: new Date('2023-07-27').toLocaleDateString(),
        category: 'Random Thought',
        content: 'Ingredients: chicken, potatoes, carrots, and onions.',
        dates: '',
        archived: false,
    },
    {
        id: '4',
        name: 'Gym Plan',
        created: new Date('2023-07-27').toLocaleDateString(),
        category: 'Quote',
        content:
            'Workout routine: 30 minutes of cardio, 3 sets of squats, 3 sets of bench press.',
        dates: '',
        archived: false,
    },
    {
        id: '5',
        name: 'Travel Itinerary',
        created: new Date('2023-07-27').toLocaleDateString(),
        category: 'Task',
        content:
            'Flight details: 07.09.2023, Departure at 9:00 AM, Arrival at 2:00 PM.',
        dates: new Date('2023-09-07').toLocaleDateString(),
        archived: true,
    },
    {
        id: '6',
        name: 'Book Recommendations',
        created: new Date('2023-07-27').toLocaleDateString(),
        category: 'Idea',
        content:
            'Books to read: "The Great Gatsby," "1984," "To Kill a Mockingbird."',
        dates: '',
        archived: true,
    },
    {
        id: '7',
        name: 'Gift Ideas',
        created: new Date('2023-07-27').toLocaleDateString(),
        category: 'Random Thought',
        content: 'Gifts to buy: watch, perfume, and a handwritten letter.',
        dates: '',
        archived: true,
    },
];

export default notes;

export const categories = ['Task', 'Idea', 'Random Thought', 'Quote'];
