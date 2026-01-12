import React from 'react';

const TodoForm = ({ input, setInput, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="flex gap-2">
      <div className="relative flex-1">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="New entry..."
          className="w-full px-4 py-3 bg-app-surface border border-app-border font-body text-app-main placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-app-border transition-all"
        />
      </div>
      <button
        type="submit"
        className="btn bg-app-surface hover:bg-app-main hover:text-white px-4 shadow-ink active:shadow-none active:translate-x-[4px] active:translate-y-[4px] disabled:opacity-50 disabled:cursor-not-allowed disabled:active:translate-none disabled:active:shadow-ink"
        disabled={!input.trim()}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </button>
    </form>
  );
};

export default React.memo(TodoForm);