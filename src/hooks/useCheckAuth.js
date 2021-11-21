import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useCheckAuth = (input) => {
  const [auth, setAuth] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    let isActive = true;

    if (isActive) {
      if (input === null) {
        setAuth(false);
        navigate('/');
      } else {
        setAuth(true);
      }
    }

    return () => {
      isActive = false;
    };
  }, [input]);

  return auth;
};

export default useCheckAuth;
