import React from 'react';

const TodoForm = ({ input, setInput, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="flex gap-3 mb-8">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="添加新的待办事项..."
        className="flex-1 px-5 py-3 bg-primary-50 border border-primary-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
      />
      <button
        type="submit"
        className="px-7 py-3 bg-primary-500 text-white font-semibold rounded-xl shadow-md hover:bg-primary-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105 active:scale-95"
      >
        添加1
      </button>
    </form>
  );
};

export default React.memo(TodoForm);