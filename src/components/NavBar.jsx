import {
  Flex,
  MenuButton,
  Menu,
  MenuList,
  Button,
  MenuItem,
  Box,
} from '@chakra-ui/react';
import CartWidget from './CartWidget';
import { useNavigate } from 'react-router';
import { useGetFirestoreDocs } from '../hooks/useGetFirestoreDocs';
import logo from '../assets/img/logo.jpg';

const NavBar = () => {
  const { items: categories } = useGetFirestoreDocs('categories');
  const navigate = useNavigate();

  return (
    <Flex
      alignItems='center'
      justifyContent='space-between'
      width='100vw'
      padding='0 20px'
      height='7vh'
      border='1px solid #2e2e2e'
    >
      <Box onClick={() => navigate('/')} cursor={'pointer'}>
        <img src={logo} alt='' style={{ width: '200px', height: '55px' }} />
      </Box>
      <Menu>
        <MenuButton as={Button}>Categorias</MenuButton>
        <MenuList maxHeight='250px' overflowY='auto'>
          {categories.map((item) => {
            return (
              <MenuItem
                key={item.slug}
                onClick={() => navigate(`/category/${item.slug}`)}
              >
                {item.name}
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
      <CartWidget />
    </Flex>
  );
};

export default NavBar;
