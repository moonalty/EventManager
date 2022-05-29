import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getFetchAllCategories } from '../../../redux/thunk/asyncCategories';
import EachCategories from '../EachCategories/EachCategories';

 function Categories2() {
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
    <Grid container style={{ width: '100%', height: '100%' }} >
      <Grid item >
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Категории</Typography>
        </AccordionSummary>
        <AccordionDetails>
            {allCategories?.title?.map(eachcategory => <EachCategories key={eachcategory.id} eachcategory={eachcategory} handleClose={handleClose} />)}
        </AccordionDetails>
      </Accordion>
      </Grid>
    </Grid>
  );
}
export default Categories2
