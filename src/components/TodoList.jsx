import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onDelete, onToggleComplete, onEdit }) => {
  if (todos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 bg-primary-50 rounded-xl animate-fade-in">
        <svg className="w-16 h-16 text-primary-300 mb-4 animate-bounce-in" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
        <p className="text-gray-500 text-lg animate-fade-in-delay-1">暂无待办事项</p>
        <p className="text-gray-400 text-sm mt-1 animate-fade-in-delay-2">点击添加按钮开始创建</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default React.memo(TodoList);