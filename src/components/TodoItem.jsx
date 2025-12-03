import React, { useState } from 'react';

const TodoItem = ({ todo, onDelete, onToggleComplete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (editTitle.trim()) {
      onEdit(todo.id, editTitle.trim());
      setIsEditing(false);
    }
  };

  return (
    <div
      className={`flex items-center justify-between p-4 rounded-xl border shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in slide-in-from-left ${todo.completed ? 'bg-primary-100 border-primary-200' : 'bg-primary-50 border-primary-100'}`}
    >
      <div className="flex items-center gap-3 flex-1">
        <input
          type="checkbox"
          checked={todo.completed || false}
          onChange={() => onToggleComplete(todo.id)}
          className="w-4 h-4 text-primary-600 focus:ring-primary-500 border-primary-300 rounded transition-colors"
        />
        {isEditing ? (
          <form onSubmit={handleEditSubmit} className="flex-1">
            <input
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              className="flex-1 px-3 py-1 border border-primary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
              autoFocus
            />
          </form>
        ) : (
          <span className={`font-medium transition-all duration-200 ${todo.completed ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
            {todo.title}
          </span>
        )}
      </div>
      <div className="flex items-center gap-2">
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="text-primary-500 hover:text-primary-600 transition-colors p-2 rounded-full hover:bg-primary-100 transform hover:scale-110 active:scale-90"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </button>
        )}
        <button
          onClick={() => onDelete(todo.id)}
          className="text-primary-500 hover:text-primary-600 transition-colors p-2 rounded-full hover:bg-primary-100 transform hover:scale-110 active:scale-90"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default React.memo(TodoItem);