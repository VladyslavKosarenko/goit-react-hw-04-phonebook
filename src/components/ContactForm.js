import { ContactInput } from './ContactInput';

export const ContactForm = ({
  name,
  number,
  onNameChange,
  onNumberChange,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>
          Name:
          <ContactInput
            type="text"
            value={name}
            onChange={onNameChange}
            required
          />
        </label>
        <label>
          Phone:
          <ContactInput
            type="tel"
            value={number}
            onChange={onNumberChange}
            required
          />
        </label>
      </div>
      <button type="submit">Add contact</button>
    </form>
  );
};
