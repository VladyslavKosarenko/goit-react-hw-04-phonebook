export const ContactInput = ({ type, value, onChange, required }) => {
  return (
    <input type={type} value={value} onChange={onChange} required={required} />
  );
};
