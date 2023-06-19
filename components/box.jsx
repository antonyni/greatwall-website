import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, IconButton, Drawer, Box } from '@mui/material';
import Image from 'next/image';
import AddIcon from '@mui/icons-material/Add';

export default function ActionAreaCard({ section, food }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const title = section.title;
  const extra = <Typography gutterBottom variant="h5" component="div" sx={{ margin: "1rem 0 0 1rem" }}>
    Extra Options
  </Typography>
  const none = "";
  return (
    <>

      <Card sx={{ marginBottom: "1rem" }}>
        <div style={{ display: "flex", alignItems: "center", padding: "1rem 0 1rem 1rem" }}>
          <Image
            style={{ borderRadius: '50px', overflow: 'hidden', margin: "0 1rem 0 0" }}
            src={`/../public/images/${title}.jpeg`}
            width={60}
            height={60}
            alt="Food Picture"
          />
          <Typography gutterBottom variant="h5" component="div" sx={{ margin: "1rem 0 0 1rem" }}>
            {title}
          </Typography>
        </div>
        {food.filter(dish => dish.type === title).map((dish) => (
          <Card key={dish._id} sx={{ padding: 2, display: 'flex', alignItems: 'center',justifyContent:"space-between"}}>
            <Box sx={{display:"flex",flexDirection:"column"}}>
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
              <Box sx={{ width: "30vw", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                {dish.prices.length > 1 ? (
                  <Typography gutterBottom variant="h6">
                    Small: ${dish.prices[0].toFixed(2)}  Large: ${dish.prices[1].toFixed(2)}

                  </Typography>

                ) :
                  <Typography gutterBottom variant="h6">
                    Price: ${dish.prices[0].toFixed(2)}

                  </Typography>
                }
                {dish.extraOptions.length > 0 ? (extra) : (none)}
              </Box>

            </Drawer>
          </Card>
        ))}
      </Card>

    </>
  );
}