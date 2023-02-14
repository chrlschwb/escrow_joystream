import imgLogo from '../assets/logo.png'

function Header() {
  return (
    <div className="header">
      <img src={imgLogo} alt="logo" height={"100px"} />
    </div>
  )
}

export default Header