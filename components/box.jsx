import React, { useState } from 'react';
import Card from '@mui/material/Card';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';
import { CardActionArea, IconButton, Drawer, Box, Button, TextField } from '@mui/material';
import Image from 'next/image';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
export default function ActionAreaCard ({ section, food }) {
  const VERCEL_URL = process.env.VERCEL_URL;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [value, setValue] = React.useState("");
  const [extraValue, setExtraValue] = React.useState("");
  const [quantity, setQuantity] = useState(1);
  const [order, setOrder] = useState([]);
  const title = section.title;
  const extra = <Typography gutterBottom variant="h5" component="div" sx={{ margin: "1rem 0 0 1rem" }}>
    Extra Options
  </Typography>
  const none = "";
  const handleRadioChange = (event) => {
    if (event.target.value === value)
      setValue("");

    else

      setValue(event.target.value);

  };
  const handleExtraRadioChange = (event) => {
    if (event.target.value === extraValue)
      setExtraValue("");

    else

      setExtraValue(event.target.value);
  };
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };
  const handleSubmit = async (event) =>{
    event.preventDefault();
    const total = (Number(value.substring(value.lastIndexOf(" ")+1,value.length))+Number(extraValue.substring(extraValue.lastIndexOf(" ")+1,extraValue.length)))*quantity; 
    const obj = {
      order: extraValue.length > 0 ?`${quantity} x ` + value.substring(0,value.lastIndexOf(" "))+ " with " +extraValue.substring(0,extraValue.lastIndexOf(" ")):
      `${quantity} x ` + value.substring(0,value.lastIndexOf(" ")),
      price: total
    }
    console.log(obj);
  }

  return (
    <>

      <Card sx={{ marginBottom: "1rem" }}>
        <div style={{ display: "flex", alignItems: "center", padding: "1rem 0 1rem 1rem" }}>
          <Image
            style={{ borderRadius: '50px', overflow: 'hidden', margin: "0 1rem 0 0" }}
            src={`/../public/static/images/${title}.jpeg`}
            width={60}
            height={60}
            alt="Food Picture"
          />
          <Typography gutterBottom variant="h5" component="div" sx={{ margin: "1rem 0 0 1rem" }}>
            {title}
          </Typography>
        </div>

        {food.filter(dish => dish.type === title).map((dish) => (
          <Card key={dish._id} sx={{ padding: 2, display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardActionArea>
                <Typography gutterBottom variant="h6" sx={{ flex: 0 }}>{dish.title}</Typography>
              </CardActionArea>
              <Typography gutterBottom variant="body" color="secondary.main" sx={{ flex: 0 }}>{dish.prices.length > 1 ? (
                <span>
                  Small: ${dish.prices[0].toFixed(2)} &nbsp;&nbsp;&nbsp; Large: ${dish.prices[1].toFixed(2)}
                </span>
              ) : (
                <span>
                  ${dish.prices[0].toFixed(2)}
                </span>
              )}</Typography>
            </Box>
            <IconButton onClick={() => setIsDrawerOpen(true)} size='small' sx={{
              borderRadius: '50%',
              backgroundColor: 'transparent',
              border: '1px solid black',
            }}>

              <AddIcon />
            </IconButton>

            <Drawer
              anchor="right"
              open={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
              sx={{
                zIndex: 1500,
              }}
            >
              <Box sx={{ width: "50vw", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                {dish.prices.length > 1 ? (
                  <FormControl>
                    <FormLabel id="size-label" sx={{ textAlign: "center" }}>Size</FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="size-label"
                      name="size-row"
                      value={value}

                    >
                      <FormControlLabel onClick={handleRadioChange} value={`${dish.title} `+`${dish.prices[0].toFixed(2)}`} control={<Radio />} label={`Small $` + `${dish.prices[0].toFixed(2)}`} />
                      <FormControlLabel onClick={handleRadioChange} value={`${dish.title} `+`${dish.prices[1].toFixed(2)}`} control={<Radio />} label={"Large $" + `${dish.prices[1].toFixed(2)}`} />
                    </RadioGroup>
                  </FormControl>

                ) :
                  <FormControl>
                    <FormLabel id="size-label" sx={{ textAlign: "center" }}>Size</FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="size-label"
                      name="size-row"
                      value={value}

                    >
                      <FormControlLabel onClick={handleRadioChange} value={`${dish.title} `+`${dish.prices[0].toFixed(2)}`} control={<Radio />} label={`One Serving $` + `${dish.prices[0].toFixed(2)}`} />
                    </RadioGroup>
                  </FormControl>
                }
                {dish.extraOptions.length > 0 ? (
                  <form onSubmit={handleSubmit}>
                    <FormControl>
                      <FormLabel id="size-label" sx={{ textAlign: "center" }}>Extra Options</FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="size-label"
                        name="size-row"
                        value={extraValue}

                        sx={{ display: "flex", justifyContent: "center" }}
                      >
                        {dish.extraOptions.map((option) => (
                          <FormControlLabel onClick={handleExtraRadioChange} key={option._id} value={`${option.text}: ` + `${option.price.toFixed(2)}`} control={<Radio />} label={`${option.text}: ` + `${option.price.toFixed(2)}`} />

                        ))}
                      </RadioGroup>
                      <TextField
                        label="Quantity"
                        type="number"
                        value={quantity}
                        onChange={handleQuantityChange}
                        inputProps={{ min: 1 }}
                        sx={{ width: "10vw", margin: "2rem auto" }}

                      />
                      <Button type="submit" variant="outlined">
                        Order
                      </Button>
                    </FormControl>
                  </form>
                ) :
                  <form onSubmit={handleSubmit} >
                    <FormControl>
                      <TextField
                        label="Quantity"
                        type="number"
                        value={quantity}
                        onChange={handleQuantityChange}
                        inputProps={{ min: 1 }}
                        sx={{ width: "10vw", margin: "2rem auto" }}

                      />
                      <Button type="submit" variant="outlined">
                        Order
                      </Button>
                    </FormControl>
                  </form>}
              </Box>

            </Drawer>
          </Card>
        ))}
      </Card>

    </>
  );
}