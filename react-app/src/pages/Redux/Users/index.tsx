import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "hooks";
import { getUsers } from "redux/userSlice";

const Users = () => {
  const { users, loading, error } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div>
      <h2>User</h2>
      <ul>
        {loading && <p>Loading</p>}
        {error && <p>データ取得に失敗しました。</p>}
        {users &&
          users.map((user: any, index: number) => (
            <li key={index}>{user.name}</li>
          ))}
      </ul>
    </div>
  );
};

export default Users;
