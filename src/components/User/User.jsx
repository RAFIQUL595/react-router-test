import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const User = ({ user }) => {
  const { id,name, email, phone } = user;
  return (
    <div className="border rounded-md shadow-lg mb-4 bg-blue-400 text-white p-10">
      <h2>Name: {name}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <Link className="mr-5" to={`/user/${id}`}>Show Details</Link>
      <Link to={`/user/${id}`}><button>Click Me</button></Link>
    </div>
  );
};
User.propTypes = {
  user: PropTypes.object,
};
export default User;
