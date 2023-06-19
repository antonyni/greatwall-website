import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const MainListItems = ({ table }) => {
  // console.log(table);
  return (
    <React.Fragment>
        {table.map((table) => (
          <ListItemButton key = {table._id}>
           <ListItemText primary={table.title} />
           </ListItemButton>
        ))}
    </React.Fragment>)
};

export default MainListItems;
