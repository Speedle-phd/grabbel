import Underline from "./Underline"


const Header = () => {
  return (
    <nav className="flex flex-col items-center gap-4">
      <h1 className="
      text-2xl font-semibold
      ">Grabbel-Tracker</h1>
      <Underline />
    </nav>
  )
}

export default Header
