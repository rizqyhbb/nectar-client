import { Button, Input } from "../../components"
import { BsGoogle } from 'react-icons/bs';
import { ImageStyled, GlobalStyles, SigninStyled, FormStyled, PasswordContainerStyled } from "../../styles";
import { useState } from 'react'
import { BsEyeSlash, BsEye } from 'react-icons/bs'
import Link from "next/link";


const SigninPage = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <SigninStyled>
        <GlobalStyles />
        <h2>Get your groceries<br />with nectar</h2>
        <br />
        <FormStyled onSubmit={() => { }}>
          <p>Email</p>
          <Input type='email' onChange={(e) => e.target.value} setShow={true} />
          <p>Password</p>
          <PasswordContainerStyled>
            <Input type={show ? 'text' : 'password'} onChange={(e) => e.target.value} />
            {show ? <BsEye onClick={() => setShow(false)} /> : <BsEyeSlash onClick={() => setShow(true)} />}
          </PasswordContainerStyled>
        </FormStyled>
        <br />
        <Button onClick={() => { }}>
          <h4>Sign In</h4>
        </Button>
        <br />
        <p>Or connect with social media or <Link href={'/signup'}>sign up</Link> here</p>
        <Button bgColor='rgba(83, 131, 236, 1)' activeBgColor='rgba(32, 97, 240, 1)'>
          <BsGoogle />
          <h4>Continue with Google</h4>
        </Button>
      </SigninStyled>
      <ImageStyled
        src="/groceries.png"
        alt="groceries image"
        position="fixed"
        top="0"
        left="0"
        transform="translate(-227px, -184.4px) rotate(218.71deg)"
        width='927.35px'
        zIndex="-1"
      />
    </>
  )
}

export default SigninPage;