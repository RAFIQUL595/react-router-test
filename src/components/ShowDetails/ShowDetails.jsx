import { useLoaderData, useNavigate } from "react-router-dom";

const ShowDetails = () => {
  const user = useLoaderData();
  const { id, name, email, website } = user;
  const navigate = useNavigate();
  const handelGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="bg-orange-200 mt-5 mb-5 rounded-md space-y-2 p-5 text-red-600">
      <h5>{id}</h5>
      <h2>Name : {name}</h2>
      <p>Email : {email}</p>
      <p>Website : {website}</p>
      <button onClick={handelGoBack}>Go Back</button>
    </div>
  );
};

export default ShowDetails;
