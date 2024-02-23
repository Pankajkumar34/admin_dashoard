import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function InputFileUpload({ handleFileUpload,editData }) {
  const [selectedImage, setSelectedImage] = useState(null);

  React.useEffect(() => {
    if (editData && editData.image) {
      setSelectedImage(`https://motivation-backend-1.onrender.com/img/${editData.image}`);
    }
  }, [editData]); 
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    handleFileUpload(file);
    const reader = new FileReader();

    reader.onload = () => {
      setSelectedImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className='fileUpload'>
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
      >
        Upload file
        <VisuallyHiddenInput type="file" onChange={handleFileChange} />
      </Button>
      {selectedImage ?(
        <img src={selectedImage} alt="Uploaded" style={{ marginTop: '10px', maxWidth: '120px' ,display: 'inherit'}} />
      ):<p> no image</p>
      }
    </div>
  );
}
