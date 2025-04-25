
import { LoginForm } from '@/components/AuthForm/LoginForm';
import { useAuth } from '@/contexts/AuthContext'; 
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Center, Loader } from '@mantine/core';

export default function LoginPage() {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // If already authenticated, redirect to dashboard
    if (isAuthenticated && !isLoading) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <Center style={{ height: '100vh' }}>
        <Loader size="xl" />
      </Center>
    );
  }

  // Show login form if not authenticated
  return !isAuthenticated ? <LoginForm /> : null;
}