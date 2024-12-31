import { useState } from "react";
import { Button } from "../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { ChevronDownIcon } from "lucide-react";

const Task = () => {
  const [task, changeTask] = useState("ngu vkl");
  const [filter, setFilter] = useState("All");
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    changeTask("abc");
  };

  const handleDropdownItemClick = (option: string) => {
    setFilter(option);
    setIsOpen(false);
  };

  return (
    <>
      <div className="p-8 flex justify-between">
        <Button
          onClick={clickHandler}
          className="bg-black text-white hover:bg-gray-900"
        >
          Add Task
        </Button>
        <DropdownMenu onOpenChange={(open) => setIsOpen(open)}>
          <DropdownMenuTrigger asChild>
            <Button className="bg-black text-white hover:bg-gray-900 flex items-center">
              {filter}
              <ChevronDownIcon
                className={`w-5 h-5 ml-2 transition-transform ${
                  isOpen ? "transform rotate-180" : ""
                }`}
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white text-black">
            <DropdownMenuItem onClick={() => handleDropdownItemClick("All")}>
              All
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => handleDropdownItemClick("Completed")}>
              Completed
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => handleDropdownItemClick("Incompleted")}>
              Incompleted
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div>
        <p>List Task: {task}</p>
        <p className="mt-2">Filter: {filter}</p>
      </div>
    </>
  );
};

export default Task;
