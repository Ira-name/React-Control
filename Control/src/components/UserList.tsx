import React from "react";
import { User } from "../hooks/useGetAllUsers";
import UserListItem from "./UserListItem";

interface UserListProps {
  items: User[];
  onDelete: (id: number) => void;
}

const UserList: React.FC<UserListProps> = ({ items, onDelete }) => {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {items.map((user) => (
        <UserListItem key={user.id} user={user} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default UserList;
