import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { changeFilter } from 'redux/contacts/filtersSlice';

import TextField from '@mui/material/TextField';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onFilter = ev => {
    dispatch(changeFilter(ev.currentTarget.value));
  };

  return (
    <>
      <TextField
        //input sets
        type="text"
        name="filter"
        onChange={onFilter}
        value={filter}
        //mui
        size="small"
        variant="filled"
        label="search"
        margin="none"
        fullWidth
      />
    </>
  );
};

export default Filter;
