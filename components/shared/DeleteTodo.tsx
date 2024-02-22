'use client';

import { deleteTodo } from '@/app/actions/todoActions';
import { todoType } from '@/types/todoType';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { BsFillTrashFill } from 'react-icons/bs';
import Form from '../ui/Form';

const DeleteTodo = ({ todo }: { todo: todoType }) => {
  return (
    <Form action={deleteTodo}>
      <Input type="hidden" name="inputId" value={todo.id} />
      <Button actionButton text={<BsFillTrashFill />} type="submit" />
    </Form>
  );
};

export default DeleteTodo;
