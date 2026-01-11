import { AuthForm } from '@/components/AuthForm';
import { Header } from '@/components/Header';
import { Film } from 'lucide-react';

const Auth = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex items-center justify-center min-h-[calc(100vh-4rem)] py-12 px-4">
        <div className="w-full max-w-md">
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-3">
              <Film className="h-12 w-12 text-primary" />
              <span className="font-heading text-3xl font-bold text-gradient">CineVibe</span>
            </div>
          </div>
          <AuthForm />
        </div>
      </main>
    </div>
  );
};

export default Auth;
