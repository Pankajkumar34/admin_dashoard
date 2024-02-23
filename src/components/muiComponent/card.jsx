import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';

export default function BasicCard({moodData}) {

  return (
  
  <div className='row' >
   {
    moodData.length>0 && moodData?.map((item)=>{
        
        return(
          <div className='col-lg-4 col-md-12 mb-4 mb-lg-0 my-2' key={item._id}>

         
          <Card sx={{ width: 320 }} >
          <div>
            <Typography level="title-lg">{item.Title}</Typography>
            <IconButton
              aria-label="bookmark Bahamas Islands"
              variant="plain"
              color="neutral"
              size="sm"
              sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
            >
              <BookmarkAdd />
            </IconButton>
          </div>
          <AspectRatio minHeight="120px" maxHeight="200px">
            <img
            src={"https://motivation-backend-1.onrender.com/img/" + `${item.image}`}
             
              loading="lazy"
              alt=""
            />
          </AspectRatio>
          <CardContent orientation="horizontal">
            <div>
              <Typography level="body-xs">Total price:</Typography>
              <Typography fontSize="lg" fontWeight="lg">
                $2,900
              </Typography>
            </div>
            <Button
              variant="solid"
              size="md"
              color="primary"
              aria-label="Explore Bahamas Islands"
              sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
            >
              Explore
            </Button>
          </CardContent>
        </Card>
        </div>
        )
      })
    }
  </div>
  
   
  );
}