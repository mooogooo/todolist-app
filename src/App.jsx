import { useState, useEffect, useMemo } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { supabase } from './supabaseClient';
import TodoForm from './components/TodoForm';
import TodoZone from './components/TodoZone';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState('light');

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Derive stats
  const stats = useMemo(() => {
    const total = todos.length;
    const inboxCount = todos.filter(t => t.status === 'inbox' || !t.status).length;
    const stacked = total - inboxCount;
    return { total, inbox: inboxCount, stacked };
  }, [todos]);

  // Fetch Logic
  const fetchTodos = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('todos')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      const normalizedData = (data || []).map(t => ({
        ...t,
        status: t.status || (t.completed ? 'completed' : 'inbox')
      }));
      
      setTodos(normalizedData);
    } catch (err) {
      console.error(err);
      setTodos([]); // Fallback to empty on error
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
    const channel = supabase.channel('todos-realtime').on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'todos' },
      () => fetchTodos()
    ).subscribe();
    return () => supabase.removeChannel(channel);
  }, []);

  const addTodo = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    await supabase.from('todos').insert([{ title: input.trim(), status: 'inbox', completed: false }]);
    setInput('');
  };

  const deleteTodo = async (id) => {
    await supabase.from('todos').delete().eq('id', id);
  };

  const editTodo = async (id, newTitle) => {
    if (!newTitle || !newTitle.trim()) return;
    await supabase.from('todos').update({ title: newTitle }).eq('id', id);
  };

  const toggleTodo = async (id, completed) => {
    await supabase.from('todos').update({ completed }).eq('id', id);
  };

  const handleDrop = async (id, newStatus) => {
    await supabase.from('todos').update({ status: newStatus, completed: newStatus === 'completed' }).eq('id', id);
  };

  const inboxTodos = todos.filter(t => t.status === 'inbox' || (!t.status && !t.completed));

  const SKILL_ZONES = [
    { id: 'web', title: 'WEB' },
    { id: 'ai', title: 'AI' },
    { id: 'video', title: 'VIDEO' },
    { id: '3d', title: '3D' },
    { id: 'ppt', title: 'PPT' },
    { id: 'tools', title: 'TOOLS' },
    { id: 'design', title: 'DESIGN' },
    { id: 'misc', title: 'MISC' },
  ];

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen lg:h-screen w-full bg-app-bg font-sans text-app-text flex flex-col p-4 sm:p-6 gap-4">
        
        <header className="flex-shrink-0 h-14 rounded-2xl bg-app-surface/50 backdrop-blur-lg border border-app-border/20 shadow-glass flex items-center px-6 justify-between z-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-app-primary flex items-center justify-center rounded-lg">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <span className="text-lg font-bold tracking-tight">
              TaskFlow OS
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-app-primary-light"></span>
                <span>Stacked: {stats.stacked}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full border border-app-primary-light"></span>
                <span>Inbox: {stats.inbox}</span>
              </div>
            </div>
            <button 
              onClick={toggleTheme} 
              className="p-1 rounded-full bg-app-surface/50 border border-app-border/20 text-app-primary transition-all duration-300 hover:scale-110"
            >
              {theme === 'light' ? <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>}
            </button>
          </div>
        </header>

        <main className="flex-1 flex flex-col lg:flex-row gap-4 overflow-hidden">
          <section className="w-full lg:w-1/4 flex flex-col bg-app-surface/50 backdrop-blur-lg border border-app-border/20 shadow-glass rounded-2xl min-w-[280px]">
            <div className="p-4 border-b border-app-border/10">
               <h2 className="text-base font-bold">Inbox</h2>
            </div>
            <div className="p-4">
              <TodoForm input={input} setInput={setInput} onSubmit={addTodo} />
            </div>

            <div className="flex-1 overflow-y-auto space-y-3"> 
               <TodoZone 
                  title="INCOMING" 
                  status="inbox" 
                  todos={inboxTodos} 
                  onDrop={handleDrop}
                  onDelete={deleteTodo}
                  onEdit={editTodo}
                  onToggle={toggleTodo}
                  hideHeader={true}
               />
            </div>
          </section>

          <section className="w-full lg:w-3/4 grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-px bg-app-border/10 rounded-2xl overflow-hidden shadow-glass">
            {SKILL_ZONES.map((zone, index) => {
               return (
                 <div key={zone.id} className="bg-app-surface/40 backdrop-blur-lg">
                   <TodoZone 
                     title={zone.title} 
                     status={zone.id} 
                     todos={todos.filter(t => t.status === zone.id)} 
                     onDrop={handleDrop}
                     onDelete={deleteTodo}
                     onEdit={editTodo}
                     onToggle={toggleTodo}
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