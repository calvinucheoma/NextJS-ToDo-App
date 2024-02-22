'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/utils/prisma';

export async function createTodo(formData: FormData) {
  const input = formData.get('input') as string; //we 'get' the 'name' attribute of our input

  if (!input.trim()) {
    return;
  }

  await prisma.todo.create({
    data: {
      title: input,
    },
  });
  revalidatePath('/'); //fixed issue of data being constantly added to the database everytime we refresh our page
}

export async function changeStatus(formData: FormData) {
  const inputId = formData.get('inputId') as string;

  const todo = await prisma.todo.findUnique({
    where: {
      id: inputId,
    },
  });

  if (!todo) {
    return;
  }

  const updatedStatus = !todo?.isCompleted;

  await prisma.todo.update({
    where: { id: inputId },
    data: { isCompleted: updatedStatus },
  });

  revalidatePath('/');

  return updatedStatus;
}

export async function editTodo(formData: FormData) {
  const input = formData.get('newTitle') as string;

  const inputId = formData.get('inputId') as string;

  const todo = await prisma.todo.update({
    where: {
      id: inputId,
    },
    data: {
      title: input,
    },
  });

  revalidatePath('/');
}

export async function deleteTodo(formData: FormData) {
  const inputId = formData.get('inputId') as string;

  await prisma.todo.delete({ where: { id: inputId } });

  revalidatePath('/');
}
