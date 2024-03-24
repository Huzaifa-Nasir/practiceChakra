import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar';
import { Box, Container, useDisclosure } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import SideDrawer from './SideDrawer';
export default function DashboardLayout({title,children}) {
    const {isOpen,onClose,onOpen} = useDisclosure();
  return (
    <Flex >
  <Box  display={{
        base:'none',
        lg:'flex'
      }}>
  <Sidebar  />
  </Box>
   
    <SideDrawer isOpen={isOpen} onClose={onClose}/>

    <Box flexGrow={1}> 
    <Navbar title={title} onOpen={onOpen}/>
    <Container   maxW={'70rem'} px={4} overflowX={'hidden'} overflowY={'auto'} h={'calc(100vh-88px)'}>{children}</Container>
    </Box>

   
    </Flex>
  )
}
