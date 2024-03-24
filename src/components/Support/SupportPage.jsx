import React from "react";
import DashboardLayout from "../DashboardLayout";
import { IoChatbubbleSharp } from "react-icons/io5";
import Theme from "../Theme";
import {
  Box,
  Button,
  Card,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  Spacer,
  Stack,
  StackDivider,
  Tag,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { IoMdMail } from "react-icons/io";

export default function SupportPage() {
  return (
    <DashboardLayout>
      <Flex m={{md:'10',base:'4px'}}  flexDir={'column'}  >
        

 <Flex justifyContent={'flex-end'} flexDir={{md:'row',base:'column'}}>
        <Stack mb={4}>
          <Icon as={IoMdMail} boxSize={8} color={"rgba(95, 0, 217, 1)"} />
          <Heading fontSize={{md:'32px',base:'24px'}}>Contact Us</Heading>
          <Text fontSize={'14px'} color={'gray.600'}>
            Have a question or just want to know more? Feel free to reach out to
            us.
          </Text>
        </Stack>

        <Stack >
          <Card p={3}  maxW={{md:'full',base:'440px',}}>
            <Flex mb={7} direction="column"> 
              <Text>
                You will receive response within 24 hours of time of submit.
              </Text>
            </Flex>
            <Flex dir="row" gap={3}> 
              <FormControl isRequired >
                <Stack direction="column"> 
                  <FormLabel color={'rgba(95, 0, 217, 1)'}>First name</FormLabel> 
                  <Input fontWeight={'500'} placeholder="First name"  border={'1.5px solid rgba(95, 0, 217, 1)'}/>
                </Stack>
              </FormControl>
              <Spacer />
              <FormControl isRequired>
                <Stack direction="column"> 
                  <FormLabel color={'rgba(95, 0, 217, 1)'}>Second name</FormLabel>
                  <Input fontWeight={'500'} placeholder="Second name"  border={'1.5px solid rgba(95, 0, 217, 1)'} />
                </Stack>
              </FormControl>
             
            </Flex>
            <FormControl isRequired mt={4}>
                <Stack direction="column"> 
                  <FormLabel color={'rgba(95, 0, 217, 1)'}>Email</FormLabel> 
                  <Input fontSize={'15px'} fontWeight={'500'} placeholder="Enter your email..."   border={'1.5px solid rgba(95, 0, 217, 1)'}/>
                </Stack>
              </FormControl>
              <FormControl isRequired mt={4} >
                <Stack direction="column"> 
                  <FormLabel color={'rgba(95, 0, 217, 1)'}>Message</FormLabel> 
                  <Textarea fontWeight={'500'} placeholder="Type message..."  border={'1.5px solid rgba(95, 0, 217, 1)'}/>
                </Stack>
              </FormControl>


      <FormControl as='fieldset' mt={4} mb={4} isRequired>
       <Checkbox ><Flex fontSize={'14px'}><Text mr={1}>I agree with </Text><Text color={'rgba(95, 0, 217, 1)'}>Terms & Conditions</Text></Flex></Checkbox>
    </FormControl>
    <Stack >
    <Button  fontSize={'15px'}  fontWeight={500}>Send a Message</Button>
    <Button fontSize={'15px'}  fontWeight={500}>Book a Meeting</Button>
    </Stack>
          </Card>
        </Stack>
        </Flex>
       

      


        <Flex mt={10}  flexDir={{md:'row',base:'column'}} justifyContent={{md:'space-between',sm:'center',base:'center',xl:'space-between'}}>
          <Stack>
            <Icon as={IoChatbubbleSharp} boxSize={8} color={'rgba(95, 0, 217, 1)'}/>
            <Heading fontSize={{md:'32px',base:'24px'}}>Live Chat</Heading>
            <Text fontSize={'14px'} color={'gray.600'}> Don’t have time to wait for the answer? Chat with us now.</Text>
          </Stack>
         
         <Card mt={{md:'none',base:'3'}} p={6}  bg={'rgba(95, 0, 217, 1)'} borderRadius={'6'}  w={{md:'410px',lg:'430px',sm:'440px',base:'320px',xl:'488px'}}    bgImage={"url('./images/second.svg')"} bgRepeat={'no-repeat'} bgSize={'cover'}>
          <Tag display={'flex'} justifyContent={'center'} color={'rgba(95, 0, 217, 1)'} bg={'white'} borderRadius={'full'} maxW={'70px'}>
             Chatbot
          </Tag>
          <Text mt={3} color={'white'}>
          Chat with us
          </Text>
        </Card>
         
        </Flex>
      </Flex>
    </DashboardLayout>
  );
}
