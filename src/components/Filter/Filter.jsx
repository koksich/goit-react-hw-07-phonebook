import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

import { Input, Label, Wrapper } from './Filter.styled';

export const Filter = () => {

  const dispatch = useDispatch();

  const onChangeFilter = event => {dispatch(setFilter(event.target.value))};

  return (
    <Wrapper>
      <Label htmlFor="filter"> Find contacts by name</Label>
      <Input
        type="text"
        name="filter"
        id="filter"
        onChange={onChangeFilter}
      />
    </Wrapper>
  );
};
