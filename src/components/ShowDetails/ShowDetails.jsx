import { useLoaderData } from "react-router-dom";

const ShowDetails = () => {
  const user = useLoaderData();
  const { name, email, website } = user;
  return (
    <div className="bg-orange-200 mt-5 mb-5 rounded-md space-y-2 p-5 text-red-600">
      <h2>Name : {name}</h2>
      <p>Email : {email}</p>
      <p>Website : {website}</p>
    </div>
  );
};

export default ShowDetails;
