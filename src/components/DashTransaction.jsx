import React from 'react'
import { Box, Button, Grid, HStack, Icon, Stack, Tag, Text,Flex, Container, Divider, Spacer } from "@chakra-ui/react";
import { FaRupeeSign,FaBtc } from "react-icons/fa";
import { Fragment } from 'react';

export default function DashTransaction() {
    const datas = [
        {
            id:1,
            logo:FaRupeeSign,
            title:'INR Deposit',
            date:'2022-06-09 7:06 PM',
            price:'+ ₹81,123.10'
    
       },
        {
            id:2,
            logo:FaBtc,
            title:'BTC Sell',
            date:'2022-05-27 12:32 PM',
            price:'- 12.48513391'
    
       },
        {
            id:3,
            logo:FaRupeeSign,
            title:'INR Deposit',
            date:'2022-06-09 7:06 PM',
            price:'+ ₹81,123.10'
    
       }
    ]
  return (
    <div>
       <Stack p={6}  bg={'white'} borderRadius={'6'}  display={'flex'} justifyContent={'center'} /*maxWidth={'450px' } */ >
         <HStack>
            <Text fontSize={'14px'} color={'rgba(83, 93, 102, 1)'}>Recent Transactions</Text>
         </HStack>

    <Stack >
        
             {datas.map((elem,index)=>(
                <Fragment key={elem.id}>
                    {index!==0 && <Divider/>}
                    <Flex   p={'5px'}  justifyContent={'space-between'}>
                     <Flex>
             <Flex mr={4} alignItems={'center'} justifyContent={'center'} w={'40px'} h={'40px'} bg={'gray.200'} borderRadius={'full'}><Icon as={elem.logo}/></Flex>
             
             <Stack >
                <Text fontSize={'16px'} fontWeight={'400'}>
                {elem.title}
                </Text>
                <Text fontSize={'16px'} fontWeight={'400'} color={'rgba(121, 126, 130, 1)'}>
                {elem.date}
                </Text>
                
               
             </Stack>
             </Flex>
             <Stack>
               
                <Text >{elem.price}</Text>
             </Stack>
             </Flex>
             
                </Fragment>
                
             ))}
        
             
             
        
    </Stack>
    <Button fontSize={'14px'} fontWeight={'500'}>View All</Button>
    </Stack> 

    </div>
  )
}
