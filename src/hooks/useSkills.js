import { useState, useEffect, useCallback, useMemo } from 'react';

export const useSkills = (supabase) => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Validate client
  useEffect(() => {
    if (!supabase) {
      console.error('SkillTree: No Supabase client provided!');
    }
  }, [supabase]);

  // Fetch Logic
  const fetchTodos = useCallback(async (showLoading = true) => {
    if (!supabase) return;

    if (showLoading) setIsLoading(true);
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
      if (showLoading) setTodos([]); 
    } finally {
      if (showLoading) setIsLoading(false);
    }
  }, [supabase]);

  // Initial Load & Realtime Subscription
  useEffect(() => {
    if (!supabase) return;

    fetchTodos(true);
    const channel = supabase.channel('todos-realtime').on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'todos' },
      () => fetchTodos(false) // Silent refresh
    ).subscribe();
    return () => supabase.removeChannel(channel);
  }, [fetchTodos, supabase]);

  // Actions with Optimistic Updates & useCallback
  const addSkill = useCallback(async (title) => {
    if (!supabase || !title.trim()) return;
    
    const tempId = Date.now();
    const newSkill = { id: tempId, title: title.trim(), status: 'inbox', completed: false };
    
    setTodos(prev => [newSkill, ...prev]);

    try {
      const { data, error } = await supabase.from('todos').insert([{ title: title.trim(), status: 'inbox', completed: false }]).select();
      if (error) throw error;
      if (data && data[0]) {
        setTodos(prev => prev.map(t => t.id === tempId ? { ...t, ...data[0] } : t));
      }
    } catch (err) {
      console.error('Add failed:', err);
      setTodos(prev => prev.filter(t => t.id !== tempId));
    }
  }, [supabase]);

  const deleteSkill = useCallback(async (id) => {
    if (!supabase) return;
    const previousTodos = [...todos]; // Capture current state for rollback
    setTodos(prev => prev.filter(t => t.id !== id));

    try {
      await supabase.from('todos').delete().eq('id', id);
    } catch (err) {
      console.error('Delete failed:', err);
      setTodos(previousTodos);
    }
  }, [todos, supabase]);

  const editSkill = useCallback(async (id, newTitle) => {
    if (!supabase || !newTitle || !newTitle.trim()) return;
    
    const previousTodos = [...todos];
    setTodos(prev => prev.map(t => t.id === id ? { ...t, title: newTitle } : t));

    try {
      await supabase.from('todos').update({ title: newTitle }).eq('id', id);
    } catch (err) {
      console.error('Edit failed:', err);
      setTodos(previousTodos);
    }
  }, [todos, supabase]);

  const moveSkill = useCallback(async (id, newStatus) => {
    if (!supabase) return;
    const previousTodos = [...todos];
    setTodos(prev => prev.map(t => t.id === id ? { ...t, status: newStatus } : t));

    try {
      await supabase.from('todos').update({ status: newStatus }).eq('id', id);
    } catch (err) {
      console.error('Move failed:', err);
      setTodos(previousTodos);
    }
  }, [todos, supabase]);

  // Derive Stats
  const stats = useMemo(() => {
    const total = todos.length;
    const inboxCount = todos.filter(t => t.status === 'inbox' || !t.status).length;
    const stacked = total - inboxCount;
    return { total, inbox: inboxCount, stacked };
  }, [todos]);

  return {
    skills: todos,
    isLoading,
    stats,
    addSkill,
    deleteSkill,
    editSkill,
    moveSkill
  };
};