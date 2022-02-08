import React, { useContext, useEffect, useState } from 'react';
import { Button } from '../styles/orderDetailsCard';

import Input from './Input';
import Select from './Select';

import { Admin } from '../context';

const roleList = ['Administrador', 'Cliente', 'Vendedor'];

function AddUser() {
  const { token, postAdminUserRegister } = useContext(Admin.Context);
  const [disable, setDisable] = useState(true);
  const [user, setUser] = useState({ email: '', name: '', password: '', role: '' });

  useEffect(() => {
    const { email, password } = user;
    const minLength = 6;
    const Patt = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    const valid = (Patt.test(email) && password.length >= minLength);

    if (valid) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [user]);

  /* salva mudanças do input no estado local */
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser({ ...user, [name]: value });
    console.log('user: ', user);
  };
  const handleSelect = ({ target: { value } }) => {
    if (value === 'Administrador') setUser({ ...user, role: 'administrator' });
    if (value === 'Cliente') setUser({ ...user, role: 'customer' });
    if (value === 'Vendedor') setUser({ ...user, role: 'seller' });
    console.log('user.role: ', user.role);
  };
  const handleClick = (event) => {
    event.preventDefault();
    console.log('user: ', user);
    postAdminUserRegister(token, { ...user });
  };

  return (
    <form className="newUser">
      <legend><h3>Cadastrar Novo Usuário</h3></legend>
      <Input
        text="Nome: "
        placeholder="Nome e Sobrenome"
        type="text"
        onChange={ handleChange }
        value={ user.name }
        htmlFor="name"
        name="name"
        testId="admin_manage__input-name"
      />
      <Input
        text="Email: "
        placeholder="seu-email@site.com.br"
        type="text"
        onChange={ handleChange }
        value={ user.email }
        htmlFor="email"
        name="email"
        testId="admin_manage__input-email"
      />
      <Input
        text="Senha: "
        placeholder="***********"
        type="password"
        onChange={ handleChange }
        value={ user.password }
        htmlFor="password"
        name="password"
        testId="admin_manage__input-password"
      />
      <Select
        handleChange={ handleSelect }
        name="role"
        text="tipo: "
        testId="admin_manage__select-role"
        optionList={ roleList }
      />
      <Button
        type="submit"
        onClick={ handleClick }
        data-testid="admin_manage__button-register"
        disabled={ disable }
      >
        Cadastrar
      </Button>
    </form>
  );
}

export default AddUser;
