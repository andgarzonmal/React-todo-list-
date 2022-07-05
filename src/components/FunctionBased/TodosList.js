import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = (props) => {
  const {
    deleteTodoProps, handleChangeProps, todos, setUpdate,
  } = props;
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={handleChangeProps}
          deleteTodoProps={deleteTodoProps}
          setUpdate={setUpdate}
        />
      ))}
    </ul>
  );
};

export default TodosList;

TodosList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      completed: PropTypes.bool,
    }),
  ),
  handleChangeProps: PropTypes.func,
  deleteTodoProps: PropTypes.func,
  setUpdate: PropTypes.func,
};

TodosList.defaultProps = {
  todos: [],
  handleChangeProps: () => {},
  deleteTodoProps: () => {},
  setUpdate: () => {},
};
