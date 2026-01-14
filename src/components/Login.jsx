import { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await onLogin(username, password);
    } catch (err) {
      setError(err.message || '登录失败，请检查用户名或密码');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-app-bg flex items-center justify-center p-4">
      <div className="bg-app-surface/50 backdrop-blur-lg border border-app-border/20 p-8 rounded-2xl w-full max-w-md shadow-2xl">
        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-app-primary flex items-center justify-center rounded-lg shadow-lg shadow-app-primary/20">
            <span className="text-white font-bold text-xl">S</span>
          </div>
          <h1 className="text-2xl font-bold text-app-text">SkillTree Login</h1>
          <p className="text-app-text/60 text-sm">Welcome back, Captain.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-app-text/80 block">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-app-bg/50 border border-app-border/20 rounded-xl px-4 py-3 text-app-text outline-none focus:border-app-primary/50 focus:ring-2 focus:ring-app-primary/20 transition-all"
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-app-text/80 block">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-app-bg/50 border border-app-border/20 rounded-xl px-4 py-3 text-app-text outline-none focus:border-app-primary/50 focus:ring-2 focus:ring-app-primary/20 transition-all"
              placeholder="Enter your password"
              required
            />
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-500 text-sm p-3 rounded-lg text-center">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-app-primary hover:bg-app-primary/90 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-app-primary/20 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Authenticating...' : 'Enter System'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
