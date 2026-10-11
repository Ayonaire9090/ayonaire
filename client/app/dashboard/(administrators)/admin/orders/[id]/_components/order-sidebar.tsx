"use client";

import React, { useState } from "react";
import { OrderData } from "../../_components/orders-types";
import { AppSelect } from "@/components/ui/app-select";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";
import { AppInput } from "@/components/ui/app-input";
import { OrderCustomerHistory } from "./order-customer-history";
import { useAddOrderNoteMutation } from "@/hooks/api/use-payments";
import { toast } from "sonner";

export const OrderSidebar = ({ order }: { order: OrderData }) => {
  const [noteContent, setNoteContent] = useState("");
  const [noteVisibility, setNoteVisibility] = useState("Private Note");
  const addOrderNote = useAddOrderNoteMutation();

  const handleAddNote = () => {
    if (!noteContent.trim()) return;
    addOrderNote.mutate(
      {
        orderId: order.id,
        content: noteContent.trim(),
        isPrivate: noteVisibility === "Private Note",
      },
      {
        onSuccess: () => {
          toast.success("Note added");
          setNoteContent("");
        },
        onError: (err) => {
          toast.error(err instanceof Error ? err.message : "Failed to add note");
        },
      }
    );
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Order Actions */}
      <div className="flex flex-col">
        <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4 cursor-pointer">
          <h3 className="text-[15px] font-medium text-gray-900">
            Order actions
          </h3>
          <ChevronUp className="size-4 text-gray-400" />
        </div>

        <div className="flex flex-col gap-4">
          <AppSelect
            placeholder="Choose an action..."
            options={[
              { label: "Resend order emails", value: "resend" },
              { label: "Regenerate download permissions", value: "regenerate" },
            ]}
            className="border-gray-100 h-12! bg-[#FBFBFB]"
          />
          <div className="flex items-center justify-between mt-2">
            <button className="text-[14px] text-red-500 hover:text-red-600 font-medium transition-colors">
              More to trash
            </button>
            <Button className="h-10 px-6 bg-[#ff6b22] hover:bg-[#ff6b22]/90 text-white rounded-lg font-medium shadow-none">
              Update
            </Button>
          </div>
        </div>
      </div>

      {/* Customer History */}
      <OrderCustomerHistory />

      {/* Order Notes */}
      <div className="flex flex-col mt-4">
        <div className="flex items-center justify-between pb-3 cursor-pointer">
          <h3 className="text-[15px] font-medium text-gray-900">Order notes</h3>
          <ChevronUp className="size-4 text-gray-400" />
        </div>

        <div className="flex flex-col gap-4 bg-[#FBFBFB] p-4 rounded-2xl">
          {/* List notes */}
          {order.notes && order.notes.length > 0 ? (
            <div className="flex flex-col gap-5">
              {order.notes.map((note) => (
                <div key={note.id} className="flex flex-col gap-2">
                  <div className="flex flex-col gap-2">
                    <AppInput
                      className="bg-white border border-gray-200 h-11!"
                      defaultValue={note.content}
                    />
                  </div>
                  <div className="flex items-center flex-wrap gap-1.5 text-[13px] text-gray-400 px-1 mt-[-2px]">
                    <span>
                      {note.createdAt} By {note.author}
                    </span>
                    <button
                      onClick={() => toast.info("Deleting notes isn't available yet.")}
                      className="text-red-400 hover:text-red-500 font-medium transition-colors ml-1"
                    >
                      Delete Note
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-[13px] text-gray-400 py-1">
              No notes available.
            </div>
          )}

          <div className="flex flex-col gap-3 mt-2">
            <AppInput
              className="bg-white border border-gray-200 h-11!"
              placeholder="Add a note..."
              value={noteContent}
              onChange={(e) => setNoteContent(e.target.value)}
            />
            <div className="flex w-full gap-3">
              <div className="flex-1">
                <AppSelect
                  value={noteVisibility}
                  onChange={setNoteVisibility}
                  options={[
                    { label: "Private Note", value: "Private Note" },
                    { label: "Note to customer", value: "Note to customer" },
                  ]}
                  className="border-gray-100 h-11! bg-[#FBFBFB]"
                />
              </div>
              <Button
                onClick={handleAddNote}
                disabled={addOrderNote.isPending || !noteContent.trim()}
                className="h-11 px-6 bg-[#ff6b22] hover:bg-[#ff6b22]/90 text-white rounded-xl font-medium shadow-none disabled:opacity-60"
              >
                {addOrderNote.isPending ? "Adding..." : "Add"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
