import {
  ListFilter,
  X,
  Shield,
  Sparkles,
  Database,
  ChevronDown,
} from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";

export const FeedFilter = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="flex justify-between items-center p-2 lg:p-0">
          <h2 className="font-semibold text-gray-900 text-lg">Feed</h2>
          <div className="bg-white rounded-full p-2 cursor-pointer transition-colors hover:bg-gray-50">
            <ListFilter className="w-4 h-4 lg:w-5 lg:h-5 text-gray-900" />
          </div>
        </div>
      </SheetTrigger>

      <SheetContent
        side="right"
        hideCloseButton
        className="w-[85%] rounded-tl-3xl rounded-bl-3xl sm:max-w-md p-0 flex flex-col bg-white"
      >
        {/* Custom Header */}
        <div className="flex items-center gap-4 p-6 pb-2 border-b border-transparent">
          <SheetClose className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
            <X className="w-4 h-4 text-gray-900" />
          </SheetClose>
          <h2 className="text-xl font-semibold text-gray-950">
            Filter posts by
          </h2>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          {/* Select Service */}
          <div className="flex flex-col gap-3">
            <label className="text-base font-medium text-gray-900">
              Select service
            </label>
            <div className="relative">
              <select defaultValue="" className="w-full appearance-none rounded-xl border border-gray-100 p-4 text-gray-500 bg-white outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all cursor-pointer">
                <option value="" disabled>
                  Select service
                </option>
                <option value="1">Service 1</option>
                <option value="2">Service 2</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <ChevronDown className="w-5 h-5 text-gray-500" />
              </div>
            </div>
          </div>

          {/* Select Post Type */}
          <div className="flex flex-col gap-3">
            <label className="text-base font-medium text-gray-900">
              Select post type
            </label>
            <div className="relative">
              <select className="w-full appearance-none rounded-xl border border-gray-100 p-4 text-gray-500 bg-white outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all cursor-pointer">
                <option value="" disabled selected>
                  Select service
                </option>
                <option value="1">Type 1</option>
                <option value="2">Type 2</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <ChevronDown className="w-5 h-5 text-gray-500" />
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-col gap-3 pt-2">
            <label className="text-base font-medium text-gray-900">Tags</label>
            <div className="flex flex-col gap-3">
              <button className="flex items-center gap-3 w-full p-4 rounded-xl border border-gray-100 hover:border-orange-200 hover:bg-orange-50/50 transition-all text-left">
                <Shield className="w-5 h-5 text-gray-500" />
                <span className="text-gray-600 font-medium">
                  Cyber Security
                </span>
              </button>
              <button className="flex items-center gap-3 w-full p-4 rounded-xl border border-gray-100 hover:border-orange-200 hover:bg-orange-50/50 transition-all text-left">
                <Sparkles className="w-5 h-5 text-gray-500" />
                <span className="text-gray-600 font-medium">
                  AI Engineering
                </span>
              </button>
              <button className="flex items-center gap-3 w-full p-4 rounded-xl border border-gray-100 hover:border-orange-200 hover:bg-orange-50/50 transition-all text-left">
                <Database className="w-5 h-5 text-gray-500" />
                <span className="text-gray-600 font-medium">Data Science</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 pt-4 mt-auto flex gap-3">
          <SheetClose asChild>
            <button className="flex-1 py-3.5 px-4 rounded-xl bg-[#F3F4F6] hover:bg-gray-200 text-gray-600 font-medium transition-colors">
              Cancel
            </button>
          </SheetClose>
          <button className="flex-1 py-3.5 px-4 rounded-xl bg-[#F86432] hover:bg-[#e05626] text-white font-medium transition-colors">
            Apply Filter
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
