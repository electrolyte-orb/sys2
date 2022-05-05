import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Notice() {
   const { events } = useRouter();
   const [loading, setLoading] = useState(false);
   useEffect(() => {
      events.on('routeChangeStart', () => setLoading(true));
      events.on('routeChangeComplete', () => setLoading(false));
   }, []);
   return loading ? (
      <div className="fixed top-0 z-50 bg-blue-500 animate-pulse h-1 w-screen"></div>
   ) : null;
}
