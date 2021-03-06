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
  const { cards } = useSelector(state => state.cards);
  const { search } = useSelector(state => state.search)
  const { orgCards } = useSelector(state => state.orgCards)
  useEffect(() => {
    // console.log('ljhjj',change)
    dispatch(getFetchAllCards())
  }, [search?.data, orgCards,dispatch])
  // console.log(search);
  // console.log('ljhjj222', change)
  // console.log(cards.data);
  const search2 = (e) =>{
      if (e.key === 'Enter') {
        e.defaultMuiPrevented = true;
         dispatch(postFetchSerchCards(e.target.value))
        if (search?.data[0].title === e.target.value){

          navigate(`/categories/${search?.data[0].category_id}/${search?.data[0].id}`); 
        }
        // navigate(`/categories/1/1`); 
       
    }
  }
  return (
   
     <div className='seachDiv'>

<Autocomplete
        id="free-solo-demo"
        freeSolo
        options={cards?.data?.map((option) => option.title)}
      renderInput={(params) => <TextField  {...params}  placeholder="Поиск" style={{background:'white',}} />}
        sx={{ width: '150px', baclgroundColor:'white'}}
        onKeyUp={search2}
      />
   

     </div>
    
  );
}
export default Search

