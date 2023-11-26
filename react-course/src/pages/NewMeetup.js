import { useHistory } from 'react-router-dom';

import NewMeetupForm from '../components/meetups/NewMeetupForm';

const SERVER_URL = 'https://react-getting-started-7ca39-default-rtdb.asia-southeast1.firebasedatabase.app';

function NewMeetupPage() {
  const history = useHistory();

  async function handleAddMeetup(meetupData) {
    const url = `${SERVER_URL}/meetups.json`;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(meetupData),
    };
    await fetch(url, options);

    history.replace('/');
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={handleAddMeetup}/>
    </section>
  );
}

export default NewMeetupPage;
