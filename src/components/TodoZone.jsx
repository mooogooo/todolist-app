import React from 'react';
import { useDrop } from 'react-dnd';
import TodoItem from './TodoItem';

const TodoZone = ({ title, status, todos, onDrop, onDelete, onEdit, onToggle, hideHeader = false }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'TODO_ITEM',
    drop: (item) => onDrop(item.id, status),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`flex flex-col h-full w-full transition-colors duration-200 p-4 ${isOver ? 'bg-app-primary/10' : ''}`}
    >
      {!hideHeader && (
        <div className="flex items-center justify-between mb-4 px-2">
          <h3 className="font-bold text-sm tracking-wide uppercase flex items-center gap-2 text-app-text">
            {title}
          </h3>
          <span className="font-mono text-sm text-app-text-muted">
            {todos.length}
          </span>
        </div>
      )}
      
      <div className="flex-1 overflow-y-auto space-y-3">
        {todos.length === 0 ? (
           <div className="h-full flex flex-col items-center justify-center text-app-text-muted/50">
             <span className="font-bold text-sm tracking-widest uppercase">Empty</span>
           </div>
        ) : (
          todos.map((todo, index) => (
            <TodoItem 
              key={todo.id} 
              todo={todo} 
              index={index}
              onDelete={onDelete}
              onEdit={onEdit}
              onToggle={onToggle}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default React.memo(TodoZone);