import { FormStyled, GlobalStyles, PasswordContainerStyled, SignupStyled, ImageStyled, ImageContainerStyled } from "../../styles"
import { Input, Button } from "../../components";
import { BsEyeSlash, BsEye } from 'react-icons/bs';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";




const SignupPage = () => {
  const [show, setShow] = useState(false);



  return (
    <>
      <SignupStyled>
        <Image src='/icon.png' alt="nectar icon colored" width={47.84} height={55.64} />
        <GlobalStyles />
        <h2>Sign Up</h2>
        <p>Enter your credentials to continue</p>
        <br />
        <br />
        <FormStyled onSubmit={() => { }}>
          <div>
            <p>Username</p>
            <Input type='text' onChage={(e) => e.value.target} />
            <p>Email</p>
            <Input type='email' onChage={(e) => e.value.target} />
            <p>Password</p>
            <PasswordContainerStyled>
              <Input type={show ? 'text' : 'password'} onChage={(e) => e.value.target} />
              {show ? <BsEye onClick={() => setShow(false)} /> : <BsEyeSlash onClick={() => setShow(true)} />}
            </PasswordContainerStyled>
          </div>
          <p>By continuing you are agre to our Terms of Service and Privacy Policy</p>
        </FormStyled>
        <br />
        <Button>
          Sign Up
        </Button>
        <p>Or you can <Link href="/signin">sign in</Link> here</p>
      </SignupStyled>
      <ImageStyled
        src="/background1.png"
        alt="bluered rainbow background"
        position="fixed"
        top="0"
        left="0"
        width='725.77px'
        zIndex="-2"
      />
    </>
  )
}

export default SignupPage;