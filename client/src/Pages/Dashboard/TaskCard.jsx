import { useQuery } from "@tanstack/react-query";
import { FaRegClock } from "react-icons/fa";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const TaskCard = ({ item, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const handleStatus = async (e) => {
    e.preventDefault();
    const status = {
      status: e.target.value,
    };
    console.log(status);
    const res = await axiosSecure.patch(`/status?id=${item._id}`, status);
    console.log(res);
    refetch();
  };
  return (
    <div className="mb-1  rounded-sm p-3 outline-2 outline-orange-500">
      <h3 className="text-bold">{item.title}</h3>
      <p className="text-sm">{item.description}</p>
      <div className="flex justify-between pt-2">
        <span
          className={`px-1 rounded-md text-white ${
            item.priority === "low" && "bg-green-500"
          } ${item.priority === "moderate" && "bg-blue-500"} ${
            item.priority === "high" && "bg-red-500"
          }`}
        >
          {item.priority}
        </span>
        <span className="flex items-center gap-1">
          <FaRegClock />
          {item.deadline}
        </span>
      </div>
      <div className="flex justify-center pt-1 ">
        <select
          onChange={handleStatus}
          className="rounded-lg outline-orange-500"
          name="status"
          id=""
          defaultValue={item.status}
        >
          <option disabled>Set Status</option>
          <option value="todo">Todo</option>
          <option value="progress">progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
    </div>
  );
};

export default TaskCard;
