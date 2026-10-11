import React from "react";
import { IoHeartOutline, IoWarning } from "react-icons/io5";

interface AppNotesProps {
  noteTitle?: string;
  noteDescription?: string;
  warningTitle?: string;
  warningDescription?: string;
}
export const AppNotes = ({
  noteTitle = "A Note on Ethics",
  noteDescription = "At Ayonaire, we value every voice. We are an equal opportunity platform and do not discriminate based on race, gender, nationality, ability, or orientation. All selection and compensation decisions are based on merit, impact, and relevance.",
  warningTitle = "Warning Against Scams",
  warningDescription = "Ayonaire will never ask for payments, credit card details, or donations during the application or onboarding process. If you encounter suspicious messages, email us directly at:",
}: AppNotesProps) => {
  return (
    <div className="container section-spacing pb-8 lg:pb-16">
      <div className="flex flex-col gap-4 lg:gap-16">
        <div className="self-center lg:self-start w-full lg:max-w-[60%] bg-[#F0F0F0] rounded-[16px] p-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 font-bold">
              <IoHeartOutline className="text-primary w-6 h-6" />
              <span className="text-[#0F1729]">{noteTitle}</span>
            </div>
            <p className="text-[#626D84] font-medium">{noteDescription}</p>
          </div>
        </div>
        <div className="self-center lg:self-end w-full lg:max-w-[60%] bg-[#FFE6D5] rounded-[16px] p-8 border border-primary">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 font-bold">
              <IoWarning className="text-[#EF4343] w-6 h-6" />
              <span className="text-[#EF4343]">{warningTitle}</span>
            </div>
            <div className="text-[#0F1729] font-medium">
              {warningDescription}
              <br />
              <span className="text-[#F59F0A] font-bold">
                careers@ayonaire.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
