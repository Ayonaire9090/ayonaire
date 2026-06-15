interface FeedHashTagProps {
  hashTag?: string;
}
export const FeedPostHashTag = ({ hashTag }: FeedHashTagProps) => {
  return (
    <div className="bg-[#F86432]/10 text-[#F86432] px-2 py-0.5 rounded-xl w-fit">
      <p className="font-semibold text-sm">#{hashTag}</p>
    </div>
  );
};
