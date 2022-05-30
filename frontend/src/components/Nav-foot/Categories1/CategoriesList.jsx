import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import FlagIcon from '@mui/icons-material/Flag';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getFetchAllCategories } from '../../../redux/thunk/asyncCategories';
import EachCategories from '../EachCategories/EachCategories';

export default function FolderList() {
  const dispatch = useDispatch();
  const { allCategories } = useSelector(state => state.allCategories)
  const navigate = useNavigate()
  React.useEffect(() => {
    dispatch(getFetchAllCategories())
  }, [dispatch])

  const handleClose = (param) => {
    // console.log(param);
    if (typeof (param) === 'number') {
      navigate(`/categories/${param}`)
    }
  };
  return (
    <List sx={{ width: '100%', height:'100%',maxWidth: 360, }}>
      {allCategories?.title?.map(eachcategory => <EachCategories key={eachcategory.id} eachcategory={eachcategory} handleClose={handleClose} />)}
    </List>
  );
}
