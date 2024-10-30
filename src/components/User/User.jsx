import PropTypes from "prop-types";
const User = ({ user }) => {
  const { name, email, phone } = user;
  return (
    <div className="border rounded-md shadow-lg mb-4 bg-blue-400 text-white p-10">
      <h2>Name: {name}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </div>
  );
};
User.propTypes = {
  user: PropTypes.object,
};
export default User;
