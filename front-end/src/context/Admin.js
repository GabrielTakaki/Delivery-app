import React, { createContext, useState } from 'react';
import { node } from 'prop-types';

import {
  getAdminUsersList,
  postAdminUserRegister,
  deleteUser,
} from '../services/api';

export const Context = createContext();

const token = JSON.parse(localStorage.getItem('token'));
const getList = async () => {
  const list = await getAdminUsersList(token)
    .then((result) => result.data.users);
  console.log('list: ', JSON.parse(JSON.stringify(list)));
  return [...list];
};
export function Provider({ children }) {
  const [userList, setUserList] = useState(getList());
  const updateList = async () => setUserList(getList());
  return (
    <Context.Provider
      value={ {
        token,
        userList,
        updateList,
        deleteUser,
        postAdminUserRegister,
      } }
    >
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: node.isRequired,
};

export default {
  Context,
  Provider,
};
