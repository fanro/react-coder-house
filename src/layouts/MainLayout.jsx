import { Outlet } from 'react-router';
import { Box } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import logo from '../assets/img/logo.jpg';
import apu_3 from '../assets/img/apu_3.png';

const MainLayout = () => {
  return (
    <Box
      height={'h-full'}
      bgImage={logo}
      bgColor={'rgba(255, 255, 255, 0.8)'}
      bgBlendMode={'overlay'}
      position='relative'
    >
      <NavBar />
      <Box width={'100vw'} height={'calc(100vh - 7vh)'} overflowY={'auto'}>
        <Outlet />
      </Box>
      <Box
        position='fixed'
        bottom='4'
        right='4'
        bg='white'
        p='3'
        borderRadius='full'
        boxShadow='lg'
      >
        <img src={apu_3} alt='' width='200' height='200' />
      </Box>
    </Box>
  );
};

export default MainLayout;
