import { useRouter } from 'next/navigation';
import { useContext, createContext, useEffect, useState } from 'react';

const AuthContext: any = createContext({});

const AuthProvider = ({ children }: any) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // AUTHENTICATION ACTION: SIGNUP OR LOGIN
  const authAction = async (data: any, url: any) => {
    setIsLoading(true);
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    try {
      const res = await fetch(url, requestOptions);
      const data = await res.json();
      if (data.data) {
        setIsLoading(false);
        localStorage.setItem('token', data.token);
        router.replace('/addNotes');
        return;
      }
      throw new Error(data.message);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Something went wrong, Please try again');
      setIsLoading(false);
    }
  };

  // GET PROFILE DATA
  const getProfile = async () => {
    const requestOptions = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}` as any,
      },
    };

    try {
      const res = await fetch('http://127.0.0.1:5000/users/Me', requestOptions);
      const data = await res.json();
      return data.data.user;
    } catch (err: any) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  // LOGGING USER OUT
  const logOut = async (e: any) => {
    e.preventDefault();
    try {
      localStorage.removeItem('token');
      router.replace('/blog');
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{ authAction, isLoading, error, setError, getProfile, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
