import { useState, useEffect } from 'react';

import MeetupList from '../components/meetups/MeetupList';

const SERVER_URL = 'https://react-getting-started-7ca39-default-rtdb.asia-southeast1.firebasedatabase.app';

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    (async function() {
      const url = `${SERVER_URL}/meetups.json`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        const meetups = Object.entries(data).map(([key, data]) => ({ id: key, ...data }));
        setMeetups(meetups);
      } catch (e) {
        console.error(e);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  if (isError) {
    return (
      <section>
        <p>Something wrong...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={meetups} />
    </section>
  );
}

export default AllMeetupsPage;
