import { Center } from '@chakra-ui/react';

import { FilterField } from 'components/Filter/Filter.styled';

import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/authreducer';

import { Button, Div, Label } from './pages.styled/Pages.styled';

const LoginPage = () => {
  const {
    register,
    handleSubmit,

    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(loginThunk(data));
    reset();
  };

  return (
    <Div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label>
          <span>Email</span>
          <FilterField
            {...register('email', { required: true })}
            type="email"
          />
          {errors.email && <span>This field is required</span>}
        </Label>

        <Label>
          <span>Password</span>
          <FilterField
            {...register('password', { required: true, minLength: 6 })}
            type="password"
          />
          {errors.password && <span>This field is required</span>}
        </Label>

        <Center>
          <Button type="submit">Sign in</Button>
        </Center>
      </form>
    </Div>
  );
};

export default LoginPage;
