import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import TodoForm from './components/TodoForm';
import TodoZone from './components/TodoZone';
import { useSkills } from './hooks/useSkills';
import { useTheme } from './hooks/useTheme';
import { SKILL_ZONES } from './constants';

function App({ supabaseClient }) {
  const [input, setInput] = useState('');
  const { theme, toggleTheme } = useTheme();
  const { 
    skills, 
    isLoading, 
    stats, 
    addSkill, 
    deleteSkill, 
    editSkill, 
    moveSkill 
  } = useSkills(supabaseClient);

  const handleAdd = (e) => {
    e.preventDefault();
    addSkill(input);
    setInput('');
  };

  const inboxSkills = skills.filter(t => t.status === 'inbox' || !t.status);

  if (isLoading) {
    return (
      <div className="min-h-screen w-full bg-app-bg flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-app-primary/30 border-t-app-primary rounded-full animate-spin"></div>
          <p className="text-app-text/60 font-medium animate-pulse">Loading SkillTree...</p>
        </div>
      </div>
    );
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen lg:h-screen w-full bg-app-bg font-sans text-app-text flex flex-col p-4 sm:p-6 gap-4">
        
        {/* Header */}
        <header className="flex-shrink-0 h-14 rounded-2xl bg-app-surface/50 backdrop-blur-lg border border-app-border/20 flex items-center px-6 justify-between z-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-app-primary flex items-center justify-center rounded-lg shadow-lg shadow-app-primary/20">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-lg font-bold tracking-tight ">
              SkillTree
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-app-text/60">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-app-primary shadow-[0_0_8px_rgba(var(--color-primary),0.5)]"></span>
                <span>Active: {stats.stacked}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full border border-app-primary/50"></span>
                <span>Pool: {stats.inbox}</span>
              </div>
            </div>
            <button 
              onClick={toggleTheme} 
              className="p-1.5 rounded-lg bg-app-surface/50 border border-app-border/20 text-app-text/70 hover:text-app-primary hover:bg-app-primary/10 transition-all duration-300 active:scale-95"
            >
              {theme === 'light' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>
          </div>
        </header>

        <main className="flex-1 flex flex-col lg:flex-row gap-4 overflow-hidden">
          {/* Left Panel: Skill Pool */}
          <section className="w-full lg:w-1/4 flex flex-col bg-app-surface/50 backdrop-blur-lg border border-app-border/20 rounded-2xl min-w-[280px]">
            <div className="px-4 pt-4 border-b border-app-border/10">
               <h2 className=" font-bold text-app-text/80 tracking-wide uppercase text-sm">Inbox</h2>
            </div>
            <div className="px-4 pt-4 pb-2">
              <TodoForm input={input} setInput={setInput} onSubmit={handleAdd} />
            </div>

            <div className="flex-1 overflow-y-auto space-y-3"> 
               <TodoZone 
                  title="UNASSIGNED" 
                  status="inbox" 
                  todos={inboxSkills} 
                  onDrop={moveSkill}
                  onDelete={deleteSkill}
                  onEdit={editSkill}
                  hideHeader={true}
               />
            </div>
          </section>

          {/* Right Panel: Skill Zones Grid */}
          <section className="w-full lg:w-3/4 grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-1 bg-app-border/10 rounded-2xl overflow-hidden">
            {SKILL_ZONES.map((zone) => {
               return (
                 <div key={zone.id} className="bg-app-surface/40 backdrop-blur-lg">
                   <TodoZone 
                     title={zone.title} 
                     status={zone.id} 
                     todos={skills.filter(t => t.status === zone.id)} 
                     onDrop={moveSkill}
                     onDelete={deleteSkill}
                     onEdit={editSkill}
                   />
                 </div>
               );
            })}
          </section>
        </main>
      </div>
    </DndProvider>
  );
}

export default App;