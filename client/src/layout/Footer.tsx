import React from 'react'

import { Box, Container, Divider, IconButton, Link, Stack, Typography } from '@mui/material'
import { GitHub, LinkedIn } from '@mui/icons-material'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <Box component="footer" sx={{ marginTop: 'auto' }}>
      <Divider />
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            py: 4,
          }}
        >
          <Typography color="text.secondary" variant="body2">
            © {year} CSESoc Hackathon (Angella Pham, Grace Kan, Michael He, Rohan Agarwal)
          </Typography>
          <Stack direction="row" spacing={3}>
            <Link color="text.secondary" href="https://github.com/CSESoc-Hackathon-Uplift" underline="none" variant="body2">
              <IconButton aria-label="GitHub">
                <GitHub />
              </IconButton>
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}
