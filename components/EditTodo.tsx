'use client';

import { todoType } from '@/types/todoType';
import Button from './ui/Button';
import { BiEdit } from 'react-icons/bi';
import { useState } from 'react';
import { editTodo } from '@/app/actions/todoActions';
import Form from './ui/Form';
import Input from './ui/Input';

const EditTodo = ({ todo }: { todo: todoType }) => {
  const [isEditingTodo, setIsEditingTodo] = useState(false);

  const handleEdit = () => {
    if (todo.isCompleted === true) {
      return;
    }
    setIsEditingTodo(!isEditingTodo);
  };

  const handleSubmit = () => {
    setIsEditingTodo(false);
  };

  return (
    <div className="flex gap-5 items-center">
      <Button onClick={handleEdit} text={<BiEdit />} actionButton />

      {isEditingTodo ? (
        <Form action={editTodo} onSubmit={handleSubmit}>
          <Input name="inputId" value={todo.id} type="hidden" />
          <div className="flex justify-center">
            <Input type="text" name="newTitle" placeholder="Edit Todo..." />
            <Button type="submit" text="Save" />
          </div>
        </Form>
      ) : null}
    </div>
  );
};

export default EditTodo;
