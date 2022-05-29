import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFetchAllCards, getFetchSerchCards, postFetchSerchCards } from '../../../redux/thunk/asyncCards';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

function Search() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getFetchAllCards())
  }, [dispatch])

  const { cards } = useSelector(state => state.cards);
  const { search } = useSelector(state => state.search)
  console.log(search);

  console.log(cards.data);
  return (
   
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={cards?.data?.map((option) => option.title)}
      renderInput={(params) => <TextField variant="standard" {...params}  label="Поиск" />}
        sx={{ width: 150, height: 20 }}
        onKeyDown={(e)=>{
          if (e.key === 'Enter'){
            e.defaultMuiPrevented = true;
            dispatch(postFetchSerchCards(e.target.value))
            navigate(`/search/${search.data[0].category_id}/${search.data[0].id}`);
            console.log(e.target.value)
          }
          }}
      />
   
  );
}
export default Search

