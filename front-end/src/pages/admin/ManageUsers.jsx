import React, { useContext, useEffect, useState } from 'react';
import UsersTable from '../../components/UsersTable';
import Header from '../../components/Header';
import AddUser from '../../components/AddUser';
import { Admin } from '../../context';

const refreshTime = 10000;
function ManageUsers() {
  const {
    userList,
    updateList,
    deleteUser,
    token,
  } = useContext(Admin.Context);

  const [render, setRender] = useState(1);
  const newRender = render + 1;

  useEffect(() => setTimeout(
    () => {
      setRender(newRender);
      updateList();
      console.log('userList: ', userList);
    },
    refreshTime,
  ), [userList]);
  const removeUser = async ({ email }) => {
    await deleteUser(token, { email });
    updateList();
    setRender(render + 1);
  };
  console.log('userList:', userList);
  console.log('values userList:', Object.values(userList));
  return (
    <>
      <Header hasProducts={ false } title="GERENCIAR USUÁRIOS" />
      <AddUser />
      <UsersTable userList={ userList } callBack={ removeUser } />
      <input type="hidden" />
    </>
  );
}

export default ManageUsers;
