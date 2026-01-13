import React from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';

const TodoForm = ({ input, setInput, onSubmit }) => {
  return (
    <form 
      onSubmit={onSubmit} 
      className="flex items-center gap-3 p-2 rounded-2xl bg-app-surface/60 backdrop-blur-lg border border-app-border/20 shadow-glass"
    > 
    <button 
        type="submit"
        className="p-3 rounded-xl bg-app-primary text-white shadow-lg shadow-app-primary/30 hover:bg-app-primary/80 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={!input.trim()}
      >
        <PlusIcon className="h-4 w-4" />
        
      </button>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task..."
        className="w-full bg-transparent text-lg placeholder:text-app-text-muted/70 focus:outline-none px-2"
      />
     
    </form>
  );
};

export default React.memo(TodoForm);