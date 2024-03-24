import React from 'react'
import DashboardLayout from './DashboardLayout'
import DashboardComponents from './DashboardComponents'
import DashPricing from './DashPricing'
import { Grid, GridItem, Stack } from '@chakra-ui/react'
import DashTransaction from './DashTransaction'

import Contact from './Contact'

export default function Dashboard() {
  return (
    <>
   <DashboardLayout title='Dashboard'>
   
   <Grid  gridTemplateColumns={{md:'repeat(2,1fr)',base:'repeat(1,1fr)',
xl:'repeat(2,1fr)'}} gap={3} maxW={{xl:'full',sm:'full',base:'full',basic:'full',pro:'100px'}} >
    <GridItem colSpan={{md:2,xl:2,base:1}} mt={3}>
    <DashboardComponents/>
    </GridItem>
    <GridItem  colSpan={1} >
    <DashPricing/>
    </GridItem>
    <GridItem colSpan={1}  >
    <DashTransaction/>
    </GridItem>
    <GridItem colSpan={1} >
    <Contact imgUrl={'./images/Visual.svg'} tagi='Loans' bag='white' col='black' tagiCol='white' tagiBg='rgba(95, 0, 217, 1)'/>
    </GridItem>
    <GridItem  colSpan={1} >
    <Contact imgUrl={'./images/second.svg'} tagi='Contact' bag='rgba(95, 0, 217, 1)' col='white' tagiCol='rgba(95, 0, 217, 1)' tagiBg='white' />
    </GridItem>
   </Grid>
  
   </DashboardLayout>
     
   
   </>
  )
}
