import Clock from '@/assets/Clock';
import React from 'react';

const TaskCard = ({ title, description, urgency, dueDate, timeAgo }: any) => {
    const urgencyColors: any = {
        urgent: 'bg-red-500',
        medium: 'bg-orange-500',
        low: 'bg-green-500'
    };

    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 w-64">
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-sm text-gray-600 mb-4">{description}</p>
            <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold text-white ${urgencyColors[urgency]}`}>
                {urgency.charAt(0).toUpperCase() + urgency.slice(1)}
            </span>
            <div className="flex items-center space-x-2 text-xs text-gray-500 mt-4">
                <Clock />
                <span>{dueDate}</span>
            </div>
            <div className='text-sm text-gray-600 mt-4'>
                <p>{timeAgo}</p>
            </div>
        </div>
    );
}

export default TaskCard;