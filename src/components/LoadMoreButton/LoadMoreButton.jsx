import { Button } from './LoadMoreButton.styled';

export const LoadMoreButton = ({nextPage}) => {
  return <Button type="button" onClick={nextPage}>Load more</Button>;
};