import { Wrapper, Text, Button, Checkbox } from './Task.styled';

export const Task = ({ task }) => {
  return (
    <Wrapper>
      <Checkbox type="checkbox" checked={task.completed} />
      <Text>{task.text}</Text>
      <Button>Close</Button>
    </Wrapper>
  );
};
