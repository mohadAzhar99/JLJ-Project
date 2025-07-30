import React from 'react'
import {VStack,Stack, Text} from "@chakra-ui/react"

import { NativeSelectField,
  NativeSelectRoot, } from "@chakra-ui/react"

import { Button} from "@chakra-ui/react"
  import { Input } from "@chakra-ui/react"
  import Image from "next/image"


export default function loginpage() {
  return (
    <>
   {/* <VStack h={"100vh"} w={"100%"} bg={"#F5F5F5"} border={"1px solid red"} ali >
        <Stack h={"300px"} w={"777px"} bg={"#FFFFFF"} border={"1px solid green"} borderRadius={"12px"}  >


        </Stack>
   </VStack> */}
   <div className='LoginContainer'  style={{height:"411px", width:"776px",  backgroundColor:"#FFFFFF",  marginTop:"120px"}}>

<div className='LoginBox1' style={{display:"flex", flexDirection:"row", height:"60px", borderRadius:"12px", backgroundColor:"#FFFFFF"}}>

  <Text style={{height:"20px", fontWeight:"500", fontSize:"16px", lineHeight:"20px", color:"#000000",marginLeft:"26px", marginTop:"20px"}}>Login/ Register</Text>
</div>

<div style={{height:"1px", width:"743px", backgroundColor:"#EEEEEE",  marginLeft:"16px" }}></div>

{/* new */}
<div style={{display:"flex", flexDirection:"row", backgroundColor:"#FFFFFF", }}>

  <div style={{marginLeft:"61px", width:"355px" , height:"227px", backgroundColor:"#FFFFFF", borderRadius:"5px", display:"flex", flexDirection:"column",}}>

         <Text style={{ marginTop:"23px", height:"19px", fontWeight:"700", fontSize:"16px", lineHeight:"19px", color:"#333333",}}>Login with Phone Number</Text>
         <Text style={{ marginTop:"8px",height:"16px", fontWeight:"500", fontSize:"12px", lineHeight:"16px", color:"#666666",}}> This won’t take long!</Text>

            <div style={{  marginTop:"28px  ",display:"flex", flexDirection:"row", alignItems:"center"}}>

                <NativeSelectRoot style={{width:"85px" , border:"none",}}>
                <NativeSelectField style={{border:"none", }}>
                <option value="1">91+</option>  
                <option value="2">91+</option>
                </NativeSelectField>
                </NativeSelectRoot> 

                <Input style={{height:"16px", fontWeight:"400", fontSize:"14px", lineHeight:"19px", border:"none", }} placeholder="Continue with mobile number" />

            </div>
                   <div style={{height:"1px", width:"250px", backgroundColor:"#EEEEEE",  marginLeft:"16px" }}></div>
            <Button style={{ marginTop:"33px",height:"40px", width:"332px",backgroundColor:"#EEEEEE", border:"none", }}><Text style={{fontWeight:"700", fontSize:"12px", lineHeight:"15px",color:"#999999"}} >CONTINUE</Text></Button>
    </div>

    <div style={{height:"158px", width:"1px", backgroundColor:"#EEEEEE", alignSelf:"center"}}></div>


    <div className='G-Button' style={{  marginLeft:"30px    ",display:"flex", flexDirection:"column", alignSelf:"center"   }}>

        <Button style={{ marginTop:"33px",height:"48px", width:"260px", border:"solid 1px #CCCCCC " , borderRadius:"4px ", display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center" }}>
               <Text style={{fontWeight:"700", fontSize:"12px", lineHeight:"15px",color:"#999999"}} >Registration</Text>
          </Button>

          <Button style={{ marginTop:"33px",height:"48px", width:"260px", border:"solid 1px #CCCCCC " , borderRadius:"4px ", display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center" }}>
               <Text style={{fontWeight:"700", fontSize:"12px", lineHeight:"15px",color:"#999999"}} >--</Text>
          </Button>

       </div>

</div>
</div>
    
    
    </>
  )
}

