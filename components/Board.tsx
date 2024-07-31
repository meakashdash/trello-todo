"use client"
import Clock from '@/assets/Clock';
import RightHam from '@/assets/RightHam';
import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import NewTaskPanel from './NewTaskPanel';

interface Task {
  id: number;
  title: string;
  description: string;
  urgency: 'urgent' | 'medium' | 'low';
  dueDate: string;
  timeAgo:string;
  status:string;
}

interface TaskCardProps {
  task: Task;
  index: number;
  moveTask: (id: number, fromStatus: string, toStatus: string) => void;
  status: string;
}

interface ColumnProps {
  title: string;
  tasks: Task[];
  status: string;
  moveTask: (id: number, fromStatus: string, toStatus: string) => void;
}

interface BoardState {
  todo: Task[];
  inProgress: Task[];
  underReview: Task[];
  finished: Task[];
}

const TaskCard: React.FC<TaskCardProps> = ({ task, index, moveTask, status }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'TASK',
    item: { id: task.id, index, status },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const urgencyColors: any = {
    urgent: 'bg-red-500',
    medium: 'bg-orange-500',
    low: 'bg-green-500'
  };

  return (
    <div
      ref={drag}
      className={`bg-gray-100 mb-1 rounded-lg ${
        isDragging ? 'opacity-50' : ''
      }`}
    >
      <div className="bg-gray-100 border border-gray-200 rounded-lg shadow-sm p-4 w-64">
            <h3 className="text-lg font-semibold mb-2">{task.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{task.description}</p>
            <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold text-white ${urgencyColors[task.urgency]}`}>
                {task.urgency.charAt(0).toUpperCase() + task.urgency.slice(1)}
            </span>
            <div className="flex items-center space-x-2 text-xs text-gray-500 mt-4">
                <Clock />
                <span>{task.dueDate}</span>
            </div>
            <div className='text-sm text-gray-600 mt-4'>
                <p>{task.timeAgo}</p>
            </div>
        </div>
    </div>
  );
};

const Column: React.FC<ColumnProps> = ({ title, tasks, status, moveTask }) => {
  const [, drop] = useDrop({
    accept: 'TASK',
    drop: (item: { id: number; status: string }) => moveTask(item.id, item.status, status),
  });

  return (
    <div ref={drop} className="bg-white p-4 rounded-lg w-1/4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <RightHam />
      </div>
      {tasks.map((task, index) => (
        <TaskCard
          key={task.id}
          task={task}
          index={index}
          moveTask={moveTask}
          status={status}
        />
      ))}
      <button className="mt-4 text-white px-4 py-2 rounded-lg w-full flex justify-between items-center" style={{ background: 'linear-gradient(180deg, #3A3A3A 0%, #202020 100%)' }}>
        <span>Add new</span>
        <span className="ml-2">+</span>
      </button>
    </div>
  );
};

const Board: React.FC = () => {
  const [tasks, setTasks] = useState<BoardState>({
    todo: [
      {
        id: 1,
        title: 'Implement User Authentication',
        description: 'Develop and integrate user authentication using email and password.',
        urgency: 'urgent',
        dueDate: '2024-08-15',
        timeAgo:"2 hours ago",
        status:"todo"
      },
    ],
    inProgress: [
      {
        id: 2,
        title: 'Design Home Page UI',
        description: 'Develop and integrate user authentication using email and password.',
        urgency: 'medium',
        dueDate: '2024-08-15',
        timeAgo:"2 hours ago",
        status:"inProgress"
      },
      {
        id: 3,
        title: 'Conduct User Feedback Survey',
        description: 'Collect and analyze user feedback to improve app features.',
        urgency: 'low',
        dueDate: '2024-08-05',
        timeAgo:"2 hours ago",
        status:"inProgress"
      },
    ],
    underReview: [
      {
        id: 4,
        title: 'Integrate Cloud Storage',
        description: 'Enable cloud storage for note backup and synchronization.',
        urgency: 'urgent',
        dueDate: '2024-08-20',
        timeAgo:"2 hours ago",
        status:"underReview"
      },
    ],
    finished: [
      {
        id: 5,
        title: 'Test Cross-browser Compatibility',
        description: 'Ensure the app works seamlessly across different web browsers.',
        urgency: 'medium',
        dueDate: '2024-07-30',
        timeAgo:"2 hours ago",
        status:"finished"
      },
    ],
  });

  const [isNewTaskPanelOpen, setIsNewTaskPanelOpen] = useState(false);

  const moveTask = (id: number, fromStatus: string, toStatus: string) => {
    setTasks((prevTasks) => {
      const updatedTasks = { ...prevTasks };
      const taskIndex = updatedTasks[fromStatus as keyof BoardState].findIndex((task) => task.id === id);
      const [movedTask] = updatedTasks[fromStatus as keyof BoardState].splice(taskIndex, 1);
      updatedTasks[toStatus as keyof BoardState].push(movedTask);
      return updatedTasks;
    });
  };

  const addNewTask = (task: Task) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [task.status]: [...prevTasks[task.status as keyof BoardState], task],
    }));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex space-x-4 p-4 relative">
        <Column title="To do" tasks={tasks.todo} status="todo" moveTask={moveTask} />
        <Column
          title="In progress"
          tasks={tasks.inProgress}
          status="inProgress"
          moveTask={moveTask}
        />
        <Column
          title="Under review"
          tasks={tasks.underReview}
          status="underReview"
          moveTask={moveTask}
        />
        <Column title="Finished" tasks={tasks.finished} status="finished" moveTask={moveTask} />
        <button
          onClick={() => setIsNewTaskPanelOpen(true)}
          className="fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600"
        >
          + New Task
        </button>
        <NewTaskPanel
          isOpen={isNewTaskPanelOpen}
          onClose={() => setIsNewTaskPanelOpen(false)}
          onSave={addNewTask}
        />
      </div>
    </DndProvider>
  );
};

export default Board;