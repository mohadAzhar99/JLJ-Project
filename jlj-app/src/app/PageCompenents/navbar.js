import React from 'react'
import {Box, Flex, VStack ,Text,Stack,Link,Button } from "@chakra-ui/react"
import { withTheme } from '@emotion/react'




export default function navbar() {
  return (
<>
    <VStack className='nav-header' h={"136px"} w={"100%"} border={"1px solid red"}>

                <Stack   h={"60px"} justify={"center"} align={"center"}>    
                    <Text>JAIPURI LOHAR JAMA-AT</Text>
                </Stack>

        <Stack   direction={'row'}  h={"60px"} w={"100%"} align={"center"} justifyContent={"space-around"}  bg={"#FFFFFF"} borderRadius={"12px"} position={""} padding={"0px 50px 0px 50px"} >

            <Flex   justifySelf={"start"}>
                <Box className='Logo'>Jaipuri-App</Box>
            </Flex>

            <Flex className='nav-links' gap={10} justify={"center"}  > 
                <Link fontWeight={"500"} fontSize={"16px"}  color={"black"} >Home</Link>
                <Link fontWeight={"500"} fontSize={"16px"} color={"black"}>Services</Link>
                <Link fontWeight={"500"} fontSize={"16px"} color={"black"}>Contact</Link>
                <Link fontWeight={"500"} fontSize={"16px"} color={"black"}>About</Link>
                <Link fontWeight={"500"} fontSize={"16px"} color={"black"}>Gallery</Link>
                <Link fontWeight={"500"} fontSize={"16px"} color={"black"}>Events</Link>
                <Link fontWeight={"500"} fontSize={"16px"} color={"black"}>News</Link>
            </Flex>

            <Flex className='nav-buttons'  gap={5}>
                <Button  bg={" #0A84FF"} color={"white"}>Login</Button>
                <Button bg={" #0A84FF"} color={"white"} >Register</Button>
            </Flex>
        </Stack>    
    </VStack>
  </>
  )
}
