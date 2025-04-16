import React from "react";
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const Sobre = () => {
  return (
    <section style={{ padding: '2rem' }}>
      <Typography variant="h4" sx={{ textAlign: 'center', mb: 4 }}>
        Sobre
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 2,
        }}
      >
        <Card
          variant="outlined"
          sx={{
            flex: '1 1 300px',
            maxWidth: 500,
            minHeight: 350,
            display: 'flex',
            flexDirection: 'column',
            padding: 2,
          }}
        >
          <Typography variant="h6">Motivação</Typography>
          <Typography variant="body2" sx={{ textAlign: 'left' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </Card>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flex: '1 1 300px', maxWidth: 500 }}>
          <Card
            variant="outlined"
            sx={{
              minHeight: 175,
              display: 'flex',
              flexDirection: 'column',
              padding: 2,
            }}
          >
            <Typography variant="h6">Desenvolvedores</Typography>
            <Typography variant="body2">Turma DESI/Vesp</Typography>
            <Typography variant="body2">Alex Sandro de Borba Junior</Typography>
            <Typography variant="body2">Gabriel Lino Vasconcellos dos Santos</Typography>
          </Card>

          <Card
            variant="outlined"
            sx={{
              minHeight: 175,
              display: 'flex',
              flexDirection: 'column',
              padding: 2,
            }}
          >
            <Typography variant="h6">Tecnologias Utilizadas</Typography>
            <Typography variant="body2">PostgreSQL</Typography>
            <Typography variant="body2">Flutter/Dart</Typography>
            <Typography variant="body2">MockFlow</Typography>
          </Card>
        </Box>
      </Box>
    </section>
  );
};
