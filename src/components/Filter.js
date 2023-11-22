export const Filter = ({ filter, onFilter }) => {
  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={onFilter}
        placeholder="Search contacts..."
      />
    </div>
  );
};
