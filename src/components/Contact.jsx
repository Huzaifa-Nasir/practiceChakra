import React from 'react'
import { HStack, Stack,Box,Flex, Text, Image,Tag } from '@chakra-ui/react'

export default function Contact(props) {
  return (
    <div>
    
        <Stack p={6}  bg={props.bag} borderRadius={'6'} maxH={'130px'} /*maxWidth={'450px' } */   bgImage={props.imgUrl} bgRepeat={'no-repeat'} bgSize={'cover'}>
          <Tag display={'flex'} justifyContent={'center'} color={props.tagiCol} bg={props.tagiBg} borderRadius={'full'} maxW={'70px'}>
             {props.tagi}
          </Tag>
          <Text color={props.col}>
          Learn more about our real estate, mortgage, and  corporate account services
          </Text>
        </Stack>
      
    </div>
  )
}
