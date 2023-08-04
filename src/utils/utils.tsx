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
