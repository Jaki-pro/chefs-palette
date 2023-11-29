import * as React from 'react';

import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';

/**
 * Design credit: https://flutter.dev/
 */

export default function Footer() {
  const [color, setColor] = React.useState('primary');
  return (
    <Sheet
      variant="solid"
      color={color}
      invertedColors
      sx={{
        flexGrow: 1,
        display: 'flex',
        bgcolor: color === 'primary' ? '#042449' : undefined,
        p: { xs: '36px', md: '70px' },
        pt: { xs: '24px', md: '60px' },
        borderRadius: 'lg',
        overflow: 'hidden',
        '& button': { borderRadius: 'xl' },
        marginTop:'30px'
      }}
    >
      <Box sx={{ zIndex: 1, position: 'relative' }}>
        <Typography level="h2">Chef's Palette</Typography>
        <Typography sx={{ mt: 0.5, mb: 2 }}>
          Enjoy you best dishes
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: 1,
            flexWrap: 'wrap',
            maxWidth: 'max-content',
            '& > *': { flexGrow: 1, fontWeight: 'lg' },
          }}
        >
          <Button sx={{ minWidth: 120 }}>Install</Button>
          <p>our mobile app</p>
        </Box>
      </Box>
      <Box
        component="img"
        alt=""
        src="https://storage.googleapis.com/cms-storage-bucket/72521e62275b24d3c37d.png"
        sx={{ position: 'absolute', height: '100%', top: 0, right: 0 }}
      />
      <IconButton
        sx={{
          position: 'absolute',
          bottom: '1.5rem',
          right: '1.5rem',
          borderRadius: '50%',
        }}
        onClick={() => {
          const colors = ['primary', 'neutral', 'danger', 'success', 'warning'];

          const nextColorIndex = colors.indexOf(color) + 1;
          setColor(colors[nextColorIndex] ?? colors[0]);
        }}
      >
        <ColorLensRoundedIcon fontSize="small" />
      </IconButton>
    </Sheet>
  );
}