import { Outlet } from 'react-router';
import { Box } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import logo from '../assets/img/logo.jpg';

const MainLayout = () => {
  return (
    <Box
      height={'h-full'} // Full height of the viewport
      bgImage={logo}
      bgColor={'rgba(255, 255, 255, 0.8)'} // Added semi-transparent white background
      bgBlendMode={'overlay'} // Blend the background image with the color
    >
      <NavBar />
      <Box width={'100vw'} height={'calc(100vh - 7vh)'} overflowY={'auto'}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
