import { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import TaskColumn from "./TaskColumn";
import CreateTaskModal from "./Modals/CreateTaskModal";
import useAuth from "../../Hooks/useAuth";

const reorderColumnList = (sourceCol, startIndex, endIndex) => {
  const newTaskIds = Array.from(sourceCol.taskIds);
  const [removed] = newTaskIds.splice(startIndex, 1);
  newTaskIds.splice(endIndex, 0, removed);

  const newColumn = {
    ...sourceCol,
    taskIds: newTaskIds,
  };

  return newColumn;
};
const Home = () => {
  const [todo, setTodo] = useState([]);
  const [progress, setProgress] = useState([]);
  const [completed, setCompleted] = useState([]);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data, refetch } = useQuery({
    queryKey: ["all-task", user],
    queryFn: async () => {
      const res = await axiosSecure(`/tasks?email=${user?.email}`);
      return res.data;
    },
  });
  useEffect(() => {
    if (data) {
      const filteredTodo = data.filter((item) => item.status === "todo");
      const filteredProgress = data.filter(
        (item) => item.status === "progress"
      );
      const filteredCompleted = data.filter(
        (item) => item.status === "completed"
      );
      setTodo([...filteredTodo]);
      setProgress([...filteredProgress]);
      setCompleted([...filteredCompleted]);
    }
  }, [data]);
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="flex flex-col min-h-screen w-[80%] mx-auto bg-orange-200 text-white pb-5">
      <div className="flex justify-center py-5 text-xl">
        <button
          className="px-3 py-2 bg-orange-400 rounded-md hover:bg-orange-100 hover:text-orange-500"
          onClick={() => openModal()}
        >
          Create Task
        </button>
      </div>

      <div className="flex justify-center gap-10 px-8 ">
        <TaskColumn title={"Todo"} task={todo} refetch={refetch} />
        <TaskColumn title={"IN-PROGRESS"} task={progress} refetch={refetch} />
        <TaskColumn title={"Completed"} task={completed} refetch={refetch} />
      </div>
      <CreateTaskModal
        isOpen={isOpen}
        closeModal={closeModal}
        refetch={refetch}
      />
    </div>
  );
};

export default Home;
