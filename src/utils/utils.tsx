import { BiTask } from 'react-icons/bi';
import { FaLightbulb, FaQuoteRight, FaComment } from 'react-icons/fa';

export const getIconByCategory = (category: string) => {
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

export function extractDatesFromContent(content: string) {
    const regex =
        /\b\d{1,2}\/\d{1,2}\/\d{4}\b|\b\d{2}\.\d{2}\.\d{4}\b|\b\w+ \d{1,2}, \d{4}\b/g;
    const datesArray = content.match(regex);
    return datesArray ? datesArray.join(', ') : '';
}
