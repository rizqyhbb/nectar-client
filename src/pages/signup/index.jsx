import { FormStyled, GlobalStyles, PasswordContainerStyled, SignupStyled } from "../../styles"
import { Input, Button } from "../../components";
import { BsEyeSlash, BsEye } from 'react-icons/bs';
import { useState } from "react";
import Image from "next/image";

const SignupPage = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <SignupStyled>
        <Image src='/icon.png' alt="nectar icon colored" width={47.84} height={55.64} />
        <br />
        <br />
        <br />
        <GlobalStyles />
        <h3>Sign Up</h3>
        <p>Enter your credentials to continue</p>
        <br />
        <br />
        <FormStyled onSubmit={() => { }}>
          <p>Username</p>
          <Input type='text' onChage={(e) => e.value.target} />
          <p>Email</p>
          <Input type='email' onChage={(e) => e.value.target} />
          <p>Password</p>
          <PasswordContainerStyled>
            <Input type={show ? 'text' : 'password'} onChage={(e) => e.value.target} />
            {show ? <BsEye onClick={() => setShow(false)} /> : <BsEyeSlash onClick={() => setShow(true)} />}
          </PasswordContainerStyled>
          <p>By continuing you are agre to our Terms of Service and Privacy Policy</p>
        </FormStyled>
        <br />
        <Button>
          Sign Up
        </Button>
      </SignupStyled>
    </>
  )
}

export default SignupPage;