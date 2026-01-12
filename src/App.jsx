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
  const [theme, setTheme] = useState('light'); // light, dim, dark, midnight

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const themes = [
    { id: 'light', name: '☀', title: 'Soft Ink' },
    { id: 'dim', name: '☁', title: 'Dimmed' },
    { id: 'dark', name: '☾', title: 'Dark Slate' },
    { id: 'midnight', name: '★', title: 'Midnight' },
  ];

  // Derive stats
  const stats = useMemo(() => {
    const total = todos.length;
    const inboxCount = todos.filter(t => t.status === 'inbox' || !t.status).length;
    const stacked = total - inboxCount;
    return { total, inbox: inboxCount, stacked };
  }, [todos]);

  // Fetch Logic (handles legacy data by defaulting to 'inbox')
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
      // Mock data for fallback
      setTodos([
        { id: 1, title: 'Learn Next.js 15', status: 'web', created_at: new Date().toISOString() },
        { id: 2, title: 'Generate assets with Midjourney', status: 'ai', created_at: new Date().toISOString() },
        { id: 3, title: 'Edit promotional video', status: 'video', created_at: new Date().toISOString() },
        { id: 4, title: 'Model a coffee cup', status: '3d', created_at: new Date().toISOString() },
        { id: 5, title: 'Quarterly Report Deck', status: 'ppt', created_at: new Date().toISOString() },
        { id: 6, title: 'Configure VS Code', status: 'tools', created_at: new Date().toISOString() },
        { id: 7, title: 'Redesign Homepage', status: 'design', created_at: new Date().toISOString() },
        { id: 8, title: 'Buy coffee beans', status: 'misc', created_at: new Date().toISOString() },
        { id: 9, title: 'Check emails', status: 'inbox', created_at: new Date().toISOString() },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();

    const channel = supabase
      .channel('todos-channel')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'todos' },
        (payload) => {
          if (payload.eventType === 'INSERT') {
            const newTodo = { ...payload.new, status: payload.new.status || 'inbox' };
            setTodos(prev => prev.some(t => t.id === newTodo.id) ? prev : [newTodo, ...prev]);
          } else if (payload.eventType === 'UPDATE') {
            setTodos(prev => prev.map(t => t.id === payload.new.id ? { ...payload.new, status: payload.new.status || (payload.new.completed ? 'completed' : prev.find(p=>p.id===payload.new.id)?.status) } : t));
          } else if (payload.eventType === 'DELETE') {
            setTodos(prev => prev.filter(t => t.id !== payload.old.id));
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const addTodo = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Default to 'inbox'
    const { data, error } = await supabase
      .from('todos')
      .insert([{ title: input.trim(), status: 'inbox', completed: false }])
      .select();

    if (!error && data?.length > 0) {
      setTodos(prev => [data[0], ...prev]);
      setInput('');
    }
  };

  const deleteTodo = async (id) => {
    const { error } = await supabase.from('todos').delete().eq('id', id);
    if (!error) setTodos(prev => prev.filter(t => t.id !== id));
  };

  const editTodo = async (id, newTitle) => {
    const { error } = await supabase.from('todos').update({ title: newTitle }).eq('id', id);
    if (!error) {
      setTodos(prev => prev.map(t => t.id === id ? { ...t, title: newTitle } : t));
    }
  };

  // The core DnD logic: Move item to new status zone
  const handleDrop = async (id, newStatus) => {
    // Optimistic update
    setTodos(prev => prev.map(t => t.id === id ? { ...t, status: newStatus } : t));

    const { error } = await supabase
      .from('todos')
      .update({ status: newStatus, completed: newStatus === 'completed' })
      .eq('id', id);

    if (error) {
      console.error('Error moving todo:', error);
      // Revert if needed (omitted for brevity)
    }
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
      <div className="h-screen bg-app-background text-app-main flex flex-col font-body overflow-hidden transition-colors duration-300">
        
        {/* Header - Minimal E-Ink Style */}
        <header className="flex-shrink-0 h-16 border-b border-app-border bg-app-surface flex items-center px-6 justify-between z-10 transition-colors duration-300">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-app-main flex items-center justify-center transition-colors duration-300">
              <span className="text-app-surface font-heading font-bold text-xl">T</span>
            </div>
            <span className="text-xl font-heading font-bold tracking-tight uppercase">
              TaskFlow OS
            </span>
          </div>

          <div className="flex items-center gap-8">
            {/* Theme Switcher */}
            <div className="flex bg-app-background border border-app-border rounded-lg p-1 gap-1">
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTheme(t.id)}
                  title={t.title}
                  className={`w-8 h-8 flex items-center justify-center rounded font-heading text-lg transition-all ${
                    theme === t.id 
                      ? 'bg-app-main text-app-surface shadow-sm' 
                      : 'text-app-muted hover:text-app-main hover:bg-app-surface'
                  }`}
                >
                  {t.name}
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-6 font-heading text-xs uppercase tracking-widest text-app-main">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-app-main"></span>
                <span>Stacked: {stats.stacked}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 border border-app-main"></span>
                <span>Inbox: {stats.inbox}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex overflow-hidden">
          
          {/* Left Column: Inbox - Full Height Scrollable */}
          <section className="w-1/4 flex flex-col border-r border-app-border bg-app-surface min-w-[280px] transition-colors duration-300">
            <div className="p-6 border-b border-app-border bg-app-background/50 transition-colors duration-300">
               <h2 className="text-lg font-heading font-bold mb-1 uppercase">Inbox</h2>
               <p className="text-app-muted text-xs italic font-serif mb-4">"The beginning of action."</p>
               <TodoForm input={input} setInput={setInput} onSubmit={addTodo} />
            </div>

            <div className="flex-1 overflow-y-auto p-4 bg-app-background transition-colors duration-300"> 
               <TodoZone 
                  title="INCOMING" 
                  status="inbox" 
                  todos={inboxTodos} 
                  onDrop={handleDrop}
                  icon={null} // Minimalist, no icon
                  colorClass="bg-app-main"
                  children={{ onDelete: deleteTodo, onEdit: editTodo }}
                  hideHeader={true} // Custom prop to hide duplicate header in zone
               />
            </div>
          </section>

          {/* Right Column: 4x2 Grid - Skills Matrix */}
          <section className="w-3/4 grid grid-cols-4 grid-rows-2">
            {SKILL_ZONES.map((zone, index) => {
               // Determine borders based on 4x2 grid position
               const isRightEdge = (index + 1) % 4 === 0;
               const isBottomRow = index >= 4;
               
               let borderClasses = 'bg-app-surface transition-colors duration-300';
               if (!isRightEdge) borderClasses += ' border-r border-app-border';
               if (!isBottomRow) borderClasses += ' border-b border-app-border';

               return (
                 <div key={zone.id} className={borderClasses}>
                   <TodoZone 
                     title={zone.title} 
                     status={zone.id} 
                     todos={todos.filter(t => t.status === zone.id)} 
                     onDrop={handleDrop}
                     colorClass="text-app-main"
                     children={{ onDelete: deleteTodo, onEdit: editTodo }}
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