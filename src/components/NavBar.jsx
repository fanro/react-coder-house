import {
  Flex,
  Text,
  MenuButton,
  Menu,
  MenuList,
  Button,
  MenuItem,
} from '@chakra-ui/react';
import CartWidget from './CartWidget';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { getAllCategories } from '../services/products.service';

const NavBar = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllCategories()
      .then((res) => setCategories(res.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Flex
      alignItems='center'
      justifyContent='space-between'
      width='100vw'
      padding='0 20px'
      height='7vh'
      border='1px solid #2e2e2e'
    >
      <Text className='test' onClick={() => navigate('/')} cursor={'pointer'}>
        kwik E mart's Official Store
      </Text>
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
