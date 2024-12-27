import { Button } from "./ui/button"

const Header = () => {
  return (
    <div className="sticky top-0 bg-white shadow-sm z-50 w-full">
      <div className="flex justify-between items-center p-5 max-w-5xl mx-auto w-full">
        <h1 className="text-3xl font-bold">To-do List</h1>
        <Button>Login</Button>
      </div>
    </div>
  )
}

export default Header
