import { User } from "../hooks/useGetAllUsers";

interface UserListItemProps {
  user: User;
  onDelete: (id: number) => void;
}

const UserListItem = ({ user, onDelete }: UserListItemProps) => {
  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
        border: "2px solid #ddd",
        marginBottom: "10px",
        borderRadius: "5px",
      }}
    >
      <span>
        <img
          src={user.avatar}
          alt={`${user.first_name} ${user.last_name}`}
          style={{
            width: "50px",
            borderRadius: "50%",
            marginRight: "10px",
          }}
        />
        {user.first_name} {user.last_name}
      </span>
      <button
        onClick={() => onDelete(user.id)}
        style={{
          background: "red",
          color: "white",
          padding: "5px 45px",
          borderRadius: "5px",
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default UserListItem;
