"use client";

import { MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface AssignmentsActionsProps {
  assignmentId: string;
}

export const AssignmentsActions = ({ assignmentId }: AssignmentsActionsProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none focus-visible:ring-0">
        <div className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-gray-100 transition-colors">
          <MoreVertical className="h-4 w-4 text-gray-600" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-40 border-none shadow-lg rounded-xl p-2 bg-[#F2F2F2]"
      >
        <DropdownMenuItem
          className="cursor-pointer text-[14px] text-gray-700 focus:bg-white focus:text-black rounded-lg py-2 transition-colors"
          onClick={() => console.log("Publish", assignmentId)}
        >
          Publish
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer text-[14px] text-gray-700 focus:bg-white focus:text-black rounded-lg py-2 transition-colors"
          onClick={() => console.log("Edit", assignmentId)}
        >
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer text-[14px] text-red-600 focus:bg-white focus:text-red-700 rounded-lg py-2 transition-colors"
          onClick={() => console.log("Delete", assignmentId)}
        >
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
