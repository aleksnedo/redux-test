import { List, Item } from './TaskList.styled';
import { Task } from 'components/Task/Task';

export const TaskList = () => {
  return (
    <List>
      {[].map(task => (
        <Item key={task.id}>
          <Task task={task} />
        </Item>
      ))}
    </List>
  );
};
