import React from 'react';
import { useDrag } from 'react-dnd';
import { PencilIcon, TrashIcon } from '@heroicons/react/solid';


const TodoItem = ({ todo, index, onDelete, onEdit }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'TODO_ITEM',
    item: { id: todo.id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`group flex items-center justify-between p-2 rounded-xl bg-app-surface/50 backdrop-blur-lg border border-app-border/20 shadow-sm transition-all duration-300 cursor-move hover:border-app-primary/30 ${isDragging ? 'opacity-50' : 'opacity-100'}`}
    >
      <div className="flex items-center gap-3 pl-1.5">
        <span className="text-sm font-medium text-app-text">
          {todo.title}
        </span>
      </div>

      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <button
          onClick={() => onEdit(todo.id, prompt('Enter new skill name:', todo.title))}
          className="p-1.5 rounded-lg hover:bg-app-primary/10 text-app-text/40 hover:text-app-primary transition-colors"
        >
          <PencilIcon className="w-4 h-4" />
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="p-1.5 rounded-lg hover:bg-red-500/10 text-app-text/40 hover:text-red-500 transition-colors"
        >
          <TrashIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default React.memo(TodoItem);