import { Box, Flex, Menu,MenuButton,MenuList,MenuItem,Button, Heading, HStack, Spacer, Icon } from '@chakra-ui/react'
import {ChevronDownIcon,HamburgerIcon } from '@chakra-ui/icons'
import React from 'react'
import { FaBars } from "react-icons/fa6";
export default function Navbar({title,onOpen}) {
  return (
    
      <HStack bg={'white'} minH={'16'} boxShadow={'xl'} h={'16'}  alignItems={'center'} maxW={'70rem'} px={'30'}>
  {/* <HamburgerIcon onClick={onOpen} display={{lg:'none'}}/> */}
  <Icon as={FaBars}   onClick={onOpen} display={{lg:'none',base:'block'}}/>
  
 

        <Box>
        
            <Heading as='h2' ml={'60px'}>{title}</Heading>
        </Box>
        <Spacer/>
        <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Actions
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
  
  </MenuList>
</Menu>
      </HStack>
    
  )
}
