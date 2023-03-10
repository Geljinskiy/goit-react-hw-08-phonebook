import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

import { selectIsLoading } from 'redux/contacts/selectors';

import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import { LoadingButton } from '@mui/lab';

const ContactItem = ({ contact }) => {
  const { id, name, number } = contact;
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}
    >
      <Typography>
        {name}: {number}
      </Typography>
      <LoadingButton
        sx={{ marginLeft: 'auto', marginRight: '40px' }}
        onClick={onDelete}
        type="button"
        variant="text"
        size="small"
        loading={isLoading}
      >
        Delete
      </LoadingButton>
    </Box>
  );
};

export default ContactItem;
