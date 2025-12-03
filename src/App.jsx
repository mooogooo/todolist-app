import { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // 获取待办事项列表
  const fetchTodos = async () => {
    try {
      const { data, error } = await supabase
        .from('todos')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching todos:', error);
      } else {
        setTodos(data || []);
      }
    } catch (catchError) {
      console.error('Catch error fetching todos:', catchError);
    }
  };

  // 初始化加载待办事项
  useEffect(() => {
    fetchTodos();

    // 添加realtime订阅
    const channel = supabase
      .channel('todos-channel')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'todos' },
        (payload) => {
          console.log('Realtime event received:', payload);
          // 根据事件类型更新本地状态
          switch (payload.eventType) {
            case 'INSERT':
              // 如果数据不存在，则添加
              if (!todos.some(todo => todo.id === payload.new.id)) {
                setTodos([payload.new, ...todos]);
              }
              break;
            case 'UPDATE':
              // 更新现有数据
              setTodos(todos.map(todo => 
                todo.id === payload.new.id ? payload.new : todo
              ));
              break;
            case 'DELETE':
              // 删除数据
              setTodos(todos.filter(todo => todo.id !== payload.old.id));
              break;
            default:
              break;
          }
        }
      )
      .subscribe();

    // 组件卸载时取消订阅
    return () => {
      supabase.removeChannel(channel);
    };
  }, [todos]);

  // 添加待办事项
  const addTodo = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const { data, error } = await supabase
      .from('todos')
      .insert([{ title: input.trim() }])
      .select();

    if (error) {
      console.error('Error adding todo:', error);
    } else if (data && data.length > 0) {
      setTodos([data[0], ...todos]);
      setInput('');
    }
  };

  // 删除待办事项
  const deleteTodo = async (id) => {
    const { error } = await supabase
      .from('todos')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting todo:', error);
    } else {
      setTodos(todos.filter(todo => todo.id !== id));
    }
  };

  // 切换待办事项完成状态
  const toggleComplete = async (id) => {
    const todo = todos.find(todo => todo.id === id);
    if (!todo) return;

    const { error } = await supabase
      .from('todos')
      .update({ completed: !todo.completed })
      .eq('id', id);

    if (error) {
      console.error('Error toggling todo complete status:', error);
    } else {
      setTodos(todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ));
    }
  };

  // 编辑待办事项
  const editTodo = async (id, newTitle) => {
    const { error } = await supabase
      .from('todos')
      .update({ title: newTitle })
      .eq('id', id);

    if (error) {
      console.error('Error editing todo:', error);
    } else {
      setTodos(todos.map(todo => 
        todo.id === id ? { ...todo, title: newTitle } : todo
      ));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-primary-100 flex flex-col items-center py-8">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-primary-600 mb-8 text-center">待办事项</h1>
        
        {/* 添加待办事项表单 */}
        <TodoForm
          input={input}
          setInput={setInput}
          onSubmit={addTodo}
        />

        {/* 待办事项列表 */}
        <TodoList
          todos={todos}
          onDelete={deleteTodo}
          onToggleComplete={toggleComplete}
          onEdit={editTodo}
        />
      </div>
    </div>
  );
}

export default App;
