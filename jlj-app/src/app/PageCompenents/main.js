import React from 'react'
import { Button, VStack,  } from "@chakra-ui/react"
import Navbar from "./navbar"
import Loginpage from "./loginpage"



export default function main() {
  return (
    <>
    <VStack h={"880px"}  bg={"gray.100"}>

    <Navbar/>
    <Loginpage/>

    </VStack>
   

    </>
  )
}
