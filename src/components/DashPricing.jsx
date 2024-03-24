import { Box, Button, Container, HStack, Icon, Image, Stack, Tag, Text,Flex } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { BsArrowUpRight } from "react-icons/bs";
import { FaPlusCircle,FaMinusCircle } from "react-icons/fa";
export default function DashPricing() {
    const times = ['7.15 AM','8.15 AM','9.15 AM','10.15 AM','11.15 AM']
    const tabses = ['1H','1D','1W','1M' ]
  return (
   

    
      <Stack p={6}  minH={'full'}   bg={'white'} borderRadius={'6'} /*maxWidth={'450px' } */  >
         <HStack>
            <Text fontSize={'14px'} color={'rgba(83, 93, 102, 1)'}>Current Price</Text>
         </HStack>

    <HStack spacing={4}  flexDir={{
       
       lg:'row',
       md:'row',
       sm:'row',
       base:'column'
      }}
      display={'flex'} justifyContent={'space-between'}>
         <HStack >
           
             <Text fontSize={'24px'}>₹26,670.25</Text>
            
             
             <Icon color={"green.500"} as={BsArrowUpRight}/>
             <Text color={"green.500"}>0.04%</Text>
             
             
            
           
             </HStack>
             <HStack>
             <Button borderRadius={'10px'} bg={'rgba(95, 0, 217, 1)'} color={'white'} _hover={{borderRadius:'10px', bg:'rgba(95, 0, 217, 1)', color:'white'}}> <Icon as={FaPlusCircle} mr={2}/> Buy</Button>
             <Button borderRadius={'10px'} bg={'rgba(95, 0, 217, 1)'} color={'white'} _hover={{borderRadius:'10px', bg:'rgba(95, 0, 217, 1)', color:'white'}}><Icon as={FaMinusCircle} mr={2}/>Sell</Button>    
             </HStack>
             
            
        
    </HStack>
    
    <Tabs variant='soft-rounded' align="right" mt={4} >
        <Flex justifyContent={'end'}>
  <TabList  bg="gray.100" borderRadius={'5px'} >
    {tabses.map((tabs)=>(
   <Tab key={tabs} _selected={{ color: 'black', bg: 'white' }} borderRadius={'8px'} fontSize={'12px'} p={'6px'}>{tabs}</Tab>
    ))}
    
    
  </TabList>
  </Flex>
  
  <TabPanels mt={8}>
    <TabPanel display={'flex'} justifyContent={'flex-start'} flexDir={'column'}> 
    <Image src="./images/Graph.svg"/>
    <HStack justifyContent={'space-between'} >
        {times.map((tim)=>(
        <Text fontSize={{base:'12px',lg:'12px',md:'12px'}} color={'rgba(121, 126, 130, 1)'}  key={tim}>{tim}</Text>

        ))}
    </HStack>
    </TabPanel>
    <TabPanel>
      <Text>Sorry Nothing Here for now </Text>
    </TabPanel>
    <TabPanel>
      <Text>Sorry Nothing Here for now </Text>
    </TabPanel>
    <TabPanel>
      <Text>Sorry Nothing Here for now </Text>
    </TabPanel>
  </TabPanels>
</Tabs>
    
    
    
    </Stack> 

     
  
  )
}
