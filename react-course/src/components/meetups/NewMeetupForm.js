import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm({ onAddMeetup }) {
  const $inputTitle = useRef(null);
  const $inputImage = useRef(null);
  const $inputAddress = useRef(null);
  const $inputDescription = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    const meetupData = {
      title: $inputTitle.current.value,
      image: $inputImage.current.value,
      address: $inputAddress.current.value,
      description: $inputDescription.current.value,
    };

    onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={$inputTitle} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={$inputImage} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" required id="address" ref={$inputAddress} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Meetup Description</label>
          <textarea id="description" required rows="5" ref={$inputDescription} />
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
