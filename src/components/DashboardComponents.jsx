import { Button, HStack, Stack, Tag, Text } from '@chakra-ui/react'
import React from 'react'
import { InfoIcon,ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons'

export default function DashboardComponents() {
  return (
    <HStack p={6}  justifyContent={'space-between'} 
     bg={'white'}
     borderRadius={'6'}
     
      align={{lg:'flex-start',
      xl:'center'}}
     flexDir={{
       
       
       lg:'column',
       xl:'row',
       base:'column'
    

     }}
     
     >
        <HStack spacing={6} flexDir={{
       
       md:'row',
       base:'column'
      }}
      align={{base:'flex-start',
      xl:'center'}}>
        <Stack>
        <HStack>
            <Text fontSize={'14px'} color={'rgba(83, 93, 102, 1)'}>Total Portfolio Value</Text>
            <InfoIcon color={'rgba(83, 93, 102, 1)'}/>
            </HStack>
             <Text fontSize={'24px'}>₹ 112,312.24</Text> 
             </Stack>


  <Stack   >
         <HStack>
            <Text fontSize={'14px'} color={'rgba(83, 93, 102, 1)'}>Wallet Balances</Text>
         </HStack>

    <HStack spacing={4}  flexDir={{
       
       lg:'row',
       md:'row',
       sm:'row',
       base:'column'
      }}>
         <HStack>
             <Text fontSize={'24px'}>22.39401000</Text> 
             <Tag>BTC</Tag>
             </HStack>
             
         <HStack>
             <Text fontSize={'24px'}>₹ 1,300.00</Text> 
             <Tag>INR</Tag>
             </HStack>
    </HStack>
    </Stack>     
    </HStack>    

<HStack>
    <Button borderRadius={'10px'} bg={'rgba(95, 0, 217, 1)'} color={'white'} _hover={{borderRadius:'10px', bg:'rgba(95, 0, 217, 1)', color:'white'}}>Deposit</Button>  
    <Button borderRadius={'10px'} bg={'rgba(95, 0, 217, 1)'} color={'white'} _hover={{borderRadius:'10px', bg:'rgba(95, 0, 217, 1)', color:'white'}}>Wihdraw</Button>  
    </HStack>
    </HStack>
  )
}
