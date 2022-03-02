import { Button, Input } from "../../components"
import { BsGoogle } from 'react-icons/bs';
import { ImageStyled, GlobalStyles, SigninStyled, FormStyled, PasswordContainerStyled } from "../../styles";
import { useState } from 'react'
import { BsEyeSlash, BsEye } from 'react-icons/bs'


const SigninPage = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <SigninStyled>
        <GlobalStyles />
        <h3>Get your groceries<br />with nectar</h3>
        <FormStyled onSubmit={() => { }}>
          <p>Email</p>
          <Input type='email' onChange={(e) => e.target.value} setShow={true} />
          <p>Password</p>
          <PasswordContainerStyled>
            <Input type={show ? 'text' : 'password'} onChange={(e) => e.target.value} />
            {show ? <BsEye onClick={() => setShow(false)} /> : <BsEyeSlash onClick={() => setShow(true)} />}
          </PasswordContainerStyled>
        </FormStyled>
        <Button onClick={() => { }}>
          <h4>Sign In</h4>
        </Button>
        <p>Or connect with social media</p>
        <Button bgColor='rgba(83, 131, 236, 1)' activeBgColor='rgba(32, 97, 240, 1)'>
          <BsGoogle />
          <h4>Continue with Google</h4>
        </Button>
      </SigninStyled>
      <ImageStyled src="/groceries.png" alt="groceries image" />
    </>
  )
}

export default SigninPage;