import { Alert } from '@mui/material';
import React from 'react';
import '../RegModal/regModal.module.css' 

function RegModal({active, setActive}) {
  return (
    <div  className={`modal_wrapper ${active ? "open" : "close"}` } onClick={()=>setActive(false)} >
      <Alert severity="error">Данные введены неверно</Alert>
    </div>
  );
}

export default RegModal;
