import React from 'react';
import { useDrop } from 'react-dnd';
import TodoItem from './TodoItem';

const TodoZone = ({ title, status, todos, onDrop, icon, colorClass, children, hideHeader = false }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'TODO_ITEM',
    drop: (item) => onDrop(item.id, status),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  // E-Ink style: simple dashed border on hover, no background change
  const containerClass = isOver ? 'bg-app-main/5' : 'bg-transparent';

  return (
    <div
      ref={drop}
      className={`flex flex-col h-full w-full transition-colors duration-200 ${containerClass}`}
    >
      {!hideHeader && (
        <div className="flex items-center justify-between p-3 border-b border-app-border bg-app-surface">
          <h3 className="font-heading font-bold text-xs tracking-widest uppercase flex items-center gap-2">
            <span className={`w-3 h-3 ${colorClass === 'text-app-main' ? 'bg-app-main' : 'border border-app-border'}`}></span>
            {title}
          </h3>
          <span className="font-mono text-xs border border-app-border px-1.5 py-0.5">
            {todos.length}
          </span>
        </div>
      )}
      
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {todos.length === 0 ? (
           <div className="h-full flex flex-col items-center justify-center text-app-muted opacity-30">
             <span className="font-heading text-xs tracking-widest uppercase border-b border-dashed border-gray-400 pb-1">Empty Zone</span>
           </div>
        ) : (
          todos.map((todo, index) => (
            <TodoItem 
              key={todo.id} 
              todo={todo} 
              index={index}
              {...children} 
            />
          ))
        )}
      </div>
    </div>
  );
};

export default React.memo(TodoZone);