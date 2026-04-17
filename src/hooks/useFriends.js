'use client';

import { useEffect, useState } from 'react';

export default function useFriends() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/friends.json')
      .then((res) => res.json())
      .then((data) => {
        setFriends(data);
        setLoading(false);
      })
      .catch(() => {
        setFriends([]);
        setLoading(false);
      });
  }, []);

  return { friends, loading };
}