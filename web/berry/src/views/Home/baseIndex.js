import { Box, Typography, Button, Container, Stack } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import {GitHub, Login} from '@mui/icons-material';

const BaseIndex = () => (
  <Box
    sx={{
      minHeight: 'calc(100vh - 136px)',
      backgroundImage: 'linear-gradient(to right, #ff9966, #ff5e62)',
      color: 'white',
      p: 4
    }}
  >
    <Container maxWidth="lg">
      <Grid container columns={12} wrap="nowrap" alignItems="center" sx={{ minHeight: 'calc(100vh - 230px)' }}>
        <Grid md={7} lg={6}>
          <Stack spacing={3}>
            <Typography variant="h1" sx={{ fontSize: '4rem', color: '#fff', lineHeight: 1.5 }}>
              ChatAPI
            </Typography>
            <Typography variant="h4" sx={{ fontSize: '1.5rem', color: '#fff', lineHeight: 1.5 }}>
              整合各种大语言模型 <br />
              注册即使用 <br />
              高速稳定，国内线路优化
            </Typography>
            <Button
              variant="contained"
              startIcon={<Login />}
              href="https://www.chatapi.org/login"
              target="_blank"
              sx={{ backgroundColor: '#24292e', color: '#fff', width: 'fit-content', boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)' }}
            >
              登录
            </Button>
            <Button
                variant="contained"
                startIcon={<Login />}
                href="https://www.chatapi.org/about"
                target="_blank"
                sx={{ backgroundColor: '#24292e', color: '#fff', width: 'fit-content', boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)' }}
            >
              使用说明
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default BaseIndex;
