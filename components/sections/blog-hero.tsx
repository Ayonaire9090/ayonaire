import { AppHeading } from "../app-heading";


export const BlogHero = () => {
  return (
    <section className="flex flex-col justify-center items-center space-y-6  py-16 lg:py-34">
        <AppHeading
          title="BLOG"
          description="Get tips, tutorials, and resources on digital marketing, AI, SEO, Meta Ads, web design, local ads, and paid marketing."
          className="text-center"
          descriptionClassName="text-[#141414] text-center text-base! lg:text-lg! w-full lg:max-w-[60%] mx-auto"
        />
        <div className="flex items-center gap-4">
            <div className="rounded-xl border border-primary p-4 w-[100px] h-[90px]">
                <div className="flex flex-col justify-between items-center h-full">
                    <p className="text-primary text-base lg:text-lg">Posts</p>
                    <p className="text-primary font-extrabold text-lg lg:text-xl">4</p>
                </div>
            </div>
            <div className="rounded-xl border border-primary p-4 w-[100px] h-[90px]">
                <div className="flex flex-col justify-between items-center h-full">
                    <p className="text-primary text-base lg:text-lg">Authors</p>
                    <p className="text-primary font-extrabold text-lg lg:text-xl">9</p>
                </div>
            </div>
        </div>
    </section>
  );
};
