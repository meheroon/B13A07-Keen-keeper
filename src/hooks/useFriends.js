'use client';

import { useEffect, useState } from 'react';

export default function useFriends() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchFriends() {
      try {
        const response = await fetch('/friends.json');
        const data = await response.json();

        setTimeout(() => {
          if (isMounted) {
            setFriends(data);
            setLoading(false);
          }
        }, 700);
      } catch (error) {
        console.error('Failed to fetch friends:', error);
        if (isMounted) setLoading(false);
      }
    }

    fetchFriends();

    return () => {
      isMounted = false;
    };
  }, []);

  return { friends, loading };
}
