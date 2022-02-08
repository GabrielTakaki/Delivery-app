import React from 'react';
import PropTypes from 'prop-types';
import {
  TrTable,
  TdTable,
} from '../styles/table';
import { LabelRegister } from '../styles/mainRegister';

function UsersTable({ usersList, callBack }) {
  return (
    <>
      <LabelRegister htmlFor="usersTable">Lista de Usuários: </LabelRegister>
      <table id="usersTable">
        <thead>
          <td>ID</td>
          <td>Nome</td>
          <td>E-mail</td>
          <td>Tipo</td>
          <td>Excluir</td>
        </thead>
        <tbody>
          { usersList && Object.entries(usersList).map((user, index) => {
            const { id, name, email, role } = user;
            return (
              <TrTable
                key={ index }
              >
                <TdTable
                  data-testid={ `admin_manage__element-user-table-item-number-${index}` }
                >
                  { id }
                </TdTable>
                <TdTable
                  data-testid={ `admin_manage__element-user-table-name-${index}` }
                >
                  { name }
                </TdTable>
                <TdTable
                  data-testid={ `admin_manage__element-user-table-email-${index}` }
                >
                  { email }
                </TdTable>
                <TdTable
                  data-testid={ `admin_manage__element-user-table-role-${index}` }
                >
                  { role }
                </TdTable>
                <TdTable
                  data-testid={ `admin_manage__element-user-table-remove-${index}` }
                >
                  <button type="button" onClick={ callBack(user) }>Excluir</button>
                </TdTable>
              </TrTable>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

UsersTable.propTypes = {
  usersList: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.string,
    map: PropTypes.func,
  }),
  callBack: PropTypes.func,
}.isRequired;

export default UsersTable;
