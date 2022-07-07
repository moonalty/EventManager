import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { filterCategoriesAC } from "../../redux/actionCreators/categoriesAC";

function Filter() {
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const filterFunc = (e) => {
    const filterparam = e.target.value;
    dispatch(filterCategoriesAC(filterparam));
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Фильтр
        </InputLabel>
        <NativeSelect
          defaultValue={"date"}
          inputProps={{
            name: "age",
            id: "uncontrolled-native",
          }}
          onChange={filterFunc}
        >
          <option value={"date"}>По дате</option>
          <option value={"cost"}>По стоимости</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
export default Filter;
