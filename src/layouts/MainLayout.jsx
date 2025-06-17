import { Outlet } from 'react-router';
import { Box, Image } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import logo from '../assets/img/logo.jpg';
import apu_3 from '../assets/img/apu_3.png';
import { useState } from 'react';

const MainLayout = () => {
  const [showImage, setShowImage] = useState(true);

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
      {showImage && (
        <Box
          position='fixed'
          bottom='4'
          right='4'
          bg='white'
          p='3'
          borderRadius='full'
          boxShadow='lg'
        >
          <Box
            position='absolute'
            top='-2'
            right='-2'
            cursor='pointer'
            onClick={() => setShowImage(false)}
            bg='red.500'
            color='white'
            borderRadius='full'
            width='6'
            height='6'
            display='flex'
            alignItems='center'
            justifyContent='center'
          >
            ✕
          </Box>
          <Image
            src={apu_3}
            alt='apu welcome image'
            width={{ base: '200', sm: '50', md: '200', lg: '300' }}
            height={{ base: '200', sm: '50', md: '200', lg: '300' }}
          />
        </Box>
      )}
    </Box>
  );
};

export default MainLayout;
