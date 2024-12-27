import { useState } from "react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Task = () => {
  const [task, changeTask] = useState("ngu vkl");
  // Thêm state mới để theo dõi filter
  const [filter, setFilter] = useState("All");

  const clickHandler = () => {
    changeTask("abc");
  };

  // Hàm xử lý khi bấm vào item trong dropdown
  const handleDropdownItemClick = (option: string) => {
    setFilter(option);
    // Tuỳ vào logic của bạn, có thể gọi hàm filter thực tế ở đây
    // hoặc dispatch action Redux, v.v.
  };

  return (
    <>
      <div className="max-w-xl w-full mx-auto p-8 flex justify-between">
        <Button
          onClick={clickHandler}
          className="bg-black text-white hover:bg-gray-900"
        >
          Add Task
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button className="bg-black text-white hover:bg-gray-900">
                {filter}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white color-black">
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
        <p>List Task {task}</p>
        <p className="mt-2">Filter: {filter}</p>
      </div>
    </>
  );
};

export default Task;
