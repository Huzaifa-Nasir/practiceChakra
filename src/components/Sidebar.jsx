import { VStack, List, ListItem, Heading, Box, Spacer, background } from '@chakra-ui/react'
import {DragHandleIcon,AtSignIcon,PhoneIcon} from '@chakra-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div>
      <VStack w={{
        base:'full',
        lg:'16rem'
      }}  bg={'white'} color={'white'} minH={'full'} 
      boxShadow={{base:'none',lg:'lg',}}>
    <Box fontSize={'20px'} fontWeight={'600'}  color={'rgba(95, 0, 217, 1)' } mt={'40px'} mb={'20px'}>@DOSOMECODING</Box>
    <Link to={'/'}>
        <Box _hover={{background:'gray.300',color:'black',cursor:'pointer'}}  fontWeight={'500'} w={'200px'} p={'5px'} h={'40px'}  borderRadius={'5px'} display={'flex'} alignItems={'center'} ml={'20px'} color={'gray'}>
        <DragHandleIcon mr={'10px'}/> Dashboard</Box>
        </Link>
        <Link to={'/transactions'}>
        <Box _hover={{background:'gray.300',color:'black',cursor:'pointer'}}  fontWeight={'500'} w={'200px'} p={'5px'} h={'40px'}  borderRadius={'5px'} display={'flex'} alignItems={'center'} ml={'20px'} color={'gray'}>
        <AtSignIcon mr={'10px'}/>  Transaction</Box>
       </Link>
        <Spacer/>
        <Link to={'/support'}>
        <Box _hover={{background:'gray.300',color:'black',cursor:'pointer'}} mb={'20px'} fontWeight={'500'} w={'200px'} p={'5px'} h={'40px'}  borderRadius={'5px'} display={'flex'} alignItems={'center'} ml={'20px'} color={'gray'}>
        <PhoneIcon mr={'10px'}/>   Support</Box>
        </Link>

      </VStack>
    </div>
  )
}
