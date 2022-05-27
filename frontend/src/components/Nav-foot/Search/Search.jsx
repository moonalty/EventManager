import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFetchAllCards, getFetchSerchCards, postFetchSerchCards } from '../../../redux/thunk/asyncCards';
import { useNavigate } from 'react-router-dom';

function Search() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getFetchAllCards())
  }, [dispatch])

  const { cards } = useSelector(state => state.cards)

  console.log(cards.data);
  return (
    <Stack spacing={1} sx={{ width: 200 }}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={cards?.data?.map((option) => option.title)}
        renderInput={(params) => <TextField {...params} label="Search" />}
        onKeyDown={(e)=>{
          if (e.key === 'Enter'){
            e.defaultMuiPrevented = true;
            dispatch(postFetchSerchCards(e.target.value))
            navigate("/search");
            console.log(e.target.value)
          }
          }}
      />
    </Stack>
  );
}
export default Search

