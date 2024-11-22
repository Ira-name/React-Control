import { useState } from "react";
import useGetAllUsers from "../hooks/useGetAllUsers";
import FilterUsers from "./FilterUsers";
import UserList from "./UserList";

const UsersConteiner = () => {
  const { isLoading, data, setData, fetchData  } = useGetAllUsers();
  const [filterText, setFilterText] = useState("");

  const handleDeleteUser = (id: number) => {
    setData(data.filter((item) => item.id !== id));
  };

  const filteredUser = data.filter((item) =>
    item.first_name.includes(filterText)
  );

  return (
    <div>
    <button
      onClick={fetchData}
      style={{
        padding: "5px 55px",
        marginBottom: "20px",
        fontSize: "16px",
        background: "green",
        color: "white",
        borderRadius: "5px",
      }}
    >
      Load Users
    </button>
    <FilterUsers filterText={filterText} onFilterText={setFilterText} />
    {isLoading ? (
      <p>Loading...</p>
    ) : (
      <UserList items={filteredUser} onDelete={handleDeleteUser} />
    )}
  </div>
  );
};
export default UsersConteiner;
