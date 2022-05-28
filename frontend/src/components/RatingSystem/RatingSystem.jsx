// import { Rating } from "@mui/material";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const RatingSystem = ({ setRate }) => {
  const { rate } = useSelector((state) => state.rate);
  console.log(rate.result);
  const dispatch = useDispatch();
  return (
    <>
      <Stack spacing={1}> Оценить: 
        <Rating
          onClick={setRate}
          name="rating"
          defaultValue={0}
          precision={1}
        /> Рейтинг организатора: 
        {rate.result === 1 && (
          <Rating name="rating-read" defaultValue={1} precision={1} readOnly />
        )}
        {rate.result === 2 && (
          <Rating name="rating-read" defaultValue={2} precision={1} readOnly />
        )}
        {rate.result === 3 && (
          <Rating name="rating-read" defaultValue={3} precision={1} readOnly />
        )}
        {rate.result === 4 && (
          <Rating name="rating-read" defaultValue={4} precision={1} readOnly />
        )}
        {rate.result === 5 && (
          <Rating name="rating-read" defaultValue={5} precision={1} readOnly />
        )}
      </Stack>
    </>
  );
};

export default RatingSystem;
