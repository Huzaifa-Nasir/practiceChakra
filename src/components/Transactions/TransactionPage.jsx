import React from 'react'
import DashboardLayout from '../DashboardLayout'
import { Button, Card, Flex, Input, Stack, TabIndicator, Tag } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import TransactionTable from './TransactionTable'


// maxW={'53rem'} display={'flex'}  alignItems={'end'}
export default function TransactionPage() {
  return (
    <div>
    <DashboardLayout title='Transactions'>
        <Stack mx={{md:'40px',sm:'4px'}}  maxW={{md:'full',sm:'full',base:'full'}} overflow={'hidden'}>
        <Flex justifyContent={'end'}  mt={6} mb={3}>
        <Button borderRadius={'10px'} bg={'rgba(95, 0, 217, 1)'} color={'white'} _hover={{borderRadius:'10px', bg:'rgba(95, 0, 217, 1)', color:'white'}}>  Export CSV</Button>
        </Flex>
    <Card  p={5} >
    <Tabs overflowX={'auto'}>
  <TabList gap={{md:'8',base:'0'}} color='gray.500' >
    <Tab _selected={{color:'black'}} fontSize={{md:'16px',sm:'12px',base:'12px'}}>All <Tag bg={'gray.100'} color={'gray.500'} borderRadius={'full'} ml={2}>349</Tag> </Tab>
    <Tab _selected={{color:'black'}} fontSize={{md:'16px',sm:'12px',base:'12px'}}>Deposit <Tag bg={'gray.100'} color={'gray.500'} borderRadius={'full'} ml={2}>114</Tag></Tab>
    <Tab _selected={{color:'black'}} fontSize={{md:'16px',sm:'12px',base:'12px'}}>Withdraw <Tag bg={'gray.100'} color={'gray.500'} borderRadius={'full'} ml={2}>213</Tag></Tab>
    <Tab _selected={{color:'black'}} fontSize={{md:'16px',sm:'12px',base:'12px'}}>Trade <Tag bg={'gray.100'} color={'gray.500'} borderRadius={'full'} ml={2}>22</Tag></Tab>
  </TabList>
  <TabIndicator
      mt="-1.5px"
      height="2px"
      bg="rgba(95, 0, 217, 1)"
      borderRadius="1px"
    />

  <TabPanels>
    <TabPanel>
     <TransactionTable/>
    </TabPanel>
    <TabPanel>
    <TransactionTable/>
    </TabPanel>
    <TabPanel>
    <TransactionTable/>
    </TabPanel>
    <TabPanel>
    <TransactionTable/>
    </TabPanel>
  </TabPanels>
</Tabs>
{/* <Stack>
<Input  width='auto'placeholder={'Search by ID or destination'} mr={5} fontWeight={'400'} fontSize={'14px'} />
</Stack> */}
    </Card>
    </Stack>
        </DashboardLayout>
        
    </div>
  )
}
