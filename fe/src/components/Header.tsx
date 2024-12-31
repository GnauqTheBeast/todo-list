import { House, ClipboardCheck } from "lucide-react"
import { Button } from "./ui/button"
import IconButton from "./IconButton"

const Header = () => {
  return (
    <div className="sticky top-0 bg-white shadow-sm z-50 w-full">
      <div className="flex justify-between items-center p-5 max-w-5xl mx-auto w-full">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold ml-4">To-do List</h1>  
        </div>
        <div className="flex justify-between" >
          <IconButton
            to="/"
            ariaLabel="Home"
            title="Home"
            icon={<House size={25} />}
          />
          
          <IconButton
            to="/tasks"
            ariaLabel="Tasks"
            title="Tasks"
            icon={<ClipboardCheck size={25} />}
          />
        </div>
        <Button>Login</Button>
      </div>
    </div>
  )
}

export default Header
