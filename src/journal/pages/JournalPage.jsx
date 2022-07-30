import { AddOutlined } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedViews } from '../views'

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography variant='h1'>JournalPage</Typography> */}
      {/* <Typography>LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LORM LOREM LOREM</Typography> */}
      {/* <NoteView /> */}
      <NothingSelectedViews />

      <IconButton
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  )
}
