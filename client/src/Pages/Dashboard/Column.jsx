import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";

const Column = ({ column, tasks }) => {
  return (
    <div className="rounded w-96 h-[629px] flex flex-col">
      <div className="text-center h-[60px] rounded px-3 mb-3">
        <p className="text-xl font-semibold">{column.title}</p>
      </div>

      <Droppable droppableId={column.id}>
        {(droppableProvided, droppableSnapshot) => (
          <div
            className="px-4 flex flex-1 flex-col"
            ref={droppableProvided.innerRef}
            {...droppableProvided.droppableProps}
          >
            {tasks.map((task, index) => (
              <Draggable
                key={task.id}
                draggableId={`${task.id}`}
                index={index + 1}
              >
                {(draggableProvided, draggableSnapshot) => (
                  <div
                    className="mb-2 h-[72px] rounded-sm p-5 outline-2 outline-white"
                    // outlineColor={
                    //   draggableSnapshot.isDragging
                    //     ? "card-border"
                    //     : "transparent"
                    // }
                    // boxShadow={
                    //   draggableSnapshot.isDragging
                    //     ? "0 5px 10px rgba(0, 0, 0, 0.6)"
                    //     : "unset"
                    // }
                    ref={draggableProvided.innerRef}
                    {...draggableProvided.draggableProps}
                    {...draggableProvided.dragHandleProps}
                  >
                    <p>{task.content}</p>
                  </div>
                )}
              </Draggable>
            ))}
            {droppableProvided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
