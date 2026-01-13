import React from 'react';
import { useDrag } from 'react-dnd';
import { PencilIcon, TrashIcon } from '@heroicons/react/solid';


const TodoItem = ({ todo, index, onDelete, onEdit, onToggle }) => {
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
      className={`group flex items-center justify-between p-1 rounded-2xl bg-app-surface/50 backdrop-blur-lg border border-app-border/20 shadow-sm transition-all duration-300 cursor-move ${isDragging ? 'opacity-50' : 'opacity-100'}`}
    >
      <div className="flex items-center gap-4">
        <div 
          onClick={() => onToggle(todo.id, !todo.completed)} 
          className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${todo.completed ? 'bg-app-primary' : 'bg-app-text-muted/50'}`}
        ></div>
        <span className={`text-base ${todo.completed ? 'line-through text-app-text-muted' : 'text-app-text'}`}>
          {todo.title}
        </span>
      </div>

      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <button
          onClick={() => onEdit(todo.id, prompt('Enter new title:', todo.title))}
          className="p-2 rounded-full hover:bg-app-surface/50 text-app-text-muted transition-colors"
        >
          <PencilIcon className="w-5 h-5" />
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="p-2 rounded-full hover:bg-app-surface/50 text-red-500 transition-colors"
        >
          <TrashIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default React.memo(TodoItem);