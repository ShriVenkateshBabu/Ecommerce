import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';
const ProductDetails = () => {
  const WallPaper = styled('div')({
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    overflow: 'hidden',
    background: 'linear-gradient(rgb(255, 38, 142) 0%, rgb(255, 105, 79) 100%)',
    transition: 'all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s',
    '&::before': {
      content: '""',
      width: '140%',
      height: '140%',
      position: 'absolute',
      top: '-40%',
      right: '-50%',
      background:
        'radial-gradient(at center center, rgb(62, 79, 249) 0%, rgba(62, 79, 249, 0) 64%)',
    },
    '&::after': {
      content: '""',
      width: '140%',
      height: '140%',
      position: 'absolute',
      bottom: '-50%',
      left: '-30%',
      background:
        'radial-gradient(at center center, rgb(247, 237, 225) 0%, rgba(247, 237, 225, 0) 70%)',
      transform: 'rotate(30deg)',
    },
  });

  const Widget = styled('div')(({ theme }) => ({
    padding: 16,
    borderRadius: 16,
    width: '60%',
    maxWidth: '100%',
    margin: 'auto',
    position: 'relative',
    zIndex: 1,
    backgroundColor: 'rgba(255,255,255,0.4)',
    backdropFilter: 'blur(40px)',
    ...theme.applyStyles('dark', {
      backgroundColor: 'rgba(0,0,0,0.6)',
    }),
  }));

  const CoverImage = styled('div')({
    width: "100%",
    height: "200px",        // fixed container height
    overflow: "hidden",
    borderRadius: 8,

    "& > img": {
      width: "40%",
      height: "100%",
      objectFit: "cover",    // image fills, crops extra parts
    },
  });


  return (
    <Box sx={{ width: '100%', overflow: 'hidden', position: 'relative', p: 3, height: '90vh' }}>
      <Widget>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
          <CoverImage sx={{ width: "100%" }}>
            <img
              width={"50%"}
              alt="y"
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
            />
          </CoverImage>
          <Box sx={{ p: 2, width: "100%" }}>
            <Typography variant="h5" component="div" gutterBottom>
              Chilling Sunday
            </Typography>
            <Typography variant="body2" component="div" gutterBottom>
              by Chilling Sunday
            </Typography>
          </Box>
        </Box>
      </Widget>
      <WallPaper />
    </Box>
  );
}
export default ProductDetails