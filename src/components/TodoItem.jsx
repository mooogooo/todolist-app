import React, { useState } from 'react';
import { useDrag } from 'react-dnd';

const TodoItem = ({ todo, index, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (editTitle.trim()) {
      onEdit(todo.id, editTitle.trim());
      setIsEditing(false);
    }
  };

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
      className={`group flex items-start p-3 bg-app-surface border border-app-border transition-all cursor-move ${isDragging ? 'opacity-20 border-dashed' : ''}`}
    >
      <div className="flex-1 min-w-0 mr-2">
        {isEditing ? (
          <form onSubmit={handleEditSubmit} onClick={(e) => e.stopPropagation()}>
            <input
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              className="w-full px-2 py-1 bg-app-surface border border-app-border font-body text-sm focus:outline-none focus:ring-1 focus:ring-black"
              autoFocus
              onBlur={() => setIsEditing(false)}
            />
          </form>
        ) : (
          <p 
            className={`font-body text-sm leading-snug break-words ${todo.completed || todo.status === 'completed' ? 'line-through text-gray-400 decoration-gray-400' : 'text-app-main'}`}
            onDoubleClick={() => setIsEditing(true)}
          >
            {todo.title}
          </p>
        )}
        <p className="font-heading text-[10px] text-gray-500 mt-2 uppercase tracking-wider">
          {new Date(todo.created_at).toLocaleDateString()}
        </p>
      </div>

      <div className="flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <button
          onClick={() => setIsEditing(true)}
          className="p-1 hover:bg-app-main hover:text-white transition-colors border border-transparent hover:border-app-border"
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="p-1 hover:bg-app-main hover:text-white transition-colors border border-transparent hover:border-app-border"
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default React.memo(TodoItem);