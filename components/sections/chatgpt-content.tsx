import React from "react";
import { Spectral_SC } from "next/font/google";
import { cn } from "@/lib/utils";
import { AppSection } from "../app-section";
import { ChatGPTAd, ChatGPTMiniAd } from "./chatgpt-ad";
import Image from "next/image";
import { ChatGPTVideo } from "./chat-gpt-video";
import { AppActionButton } from "../app-action-button";
import { Share2 } from "lucide-react";

const spectralSc = Spectral_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-spectral-sc",
});

export const ChatGPTContent = () => {
  return (
    <AppSection variant="white">
      {/* First Paragraph */}
      <div className="pb-4">
        <ContentHeading
          title="How to write ChatGPT prompts"
          headingLevel="h2"
          className="text-3xl lg:text-[44px]"
        />
        <div className="my-4">
          <p className="text-lg lg:text-xl">
            In this guide, we’ll go over key ChatGPT prompting strategies,
            including foundational processes you need for any project and
            advanced strategies for optimizing the outputs.
            <br />
            <br />
            Effective ChatGPT prompts include a few core components that provide
            the generative AI tool with the information it needs to produce your
            desired output. Starting with a project in mind, compose each of the
            following prompt components and then compile them into a single set
            of instructions (up to around 3,000 words) that ChatGPT will use to
            generate an output. 
          </p>
        </div>
      </div>

      {/* Second Paragraph */}
      <div className="pb-4">
        <ContentHeading
          title="1. Project description"
          headingLevel="h3"
          className="text-2xl lg:text-[34px]"
        />
        <div className="my-4">
          <p className="text-lg lg:text-xl">
            Write one or two sentences that describe your project, its purpose,
            your intended audience or end users for the final product, and the
            individual outputs you need ChatGPT to generate in order to complete
            the project. 
            <br />
            <br />
            Example: Develop a{" "}
            <span className="text-primary font-semibold">
              content marketing strategy
            </span>
             for a tech startup for the purpose of increasing brand awareness
            and engaging a{" "}
            <span className="text-primary font-semibold">niche market</span> of
            tech enthusiasts. ChatGPT will assist in drafting blog post ideas,
            captions for{" "}
            <span className="text-primary font-semibold">social media</span>{" "}
            posts, and <span className="text-primary font-semibold">email</span>{" "}
            newsletter concepts.
          </p>
        </div>
      </div>

      {/* Third Paragraph */}
      <div className="pb-4">
        <ContentHeading
          title="2. ChatGPT’s role"
          headingLevel="h3"
          className="text-2xl lg:text-[34px]"
        />
        <div className="my-4">
          <p className="text-lg lg:text-xl">
            Assign ChatGPT a role—as in an identity, point of view, or
            profession—to help guide the tool’s responses. ChatGPT can generate
            outputs based on the area of expertise related to the role you
            assign it. 
            <br />
            <br />
            <b>Example:</b> ChatGPT will act as a content generator and
            strategist, helping to generate captivating headlines and viral post
            ideas, as well as identify opportunities to fill content gaps in
            this niche.
            <br />
            <br />
            <b>
              Build effective prompts and think through the lifecycle of a
              generative AI Project:
            </b>
          </p>
        </div>
      </div>

      {/* ChatGptAd deep learning ai */}
      <ChatGPTAd
        className="pt-8 lg:pt-16 pb-4 lg:pb-6"
        iconSrc="/assets/icons/deeplearning-ai.png"
        courseTitle="Generative AI for Everyone"
        courseDescription="Instructed by AI pioneer Andrew Ng, Generative AI for Everyone offers his unique perspective on empowering you and your work with generative AI. Andrew will ..."
        courseRating="4.8"
        courseRatingsCount="4,674 ratings"
        courseEnrolledCount="733,521 already enrolled"
        courseLevel="Beginner level"
        courseAverageTime="5 hour(s)"
        courseSkills={[
          "Responsible AI",
          "Artificial Intelligence",
          "AI Product Strategy",
          "Generative AI",
          "Cloud Applications",
          "Automation",
          "Social Impact",
          "Prompt....",
        ]}
      />
      <div className="lg:container pb-8 lg:pb-16">
        <p className="text-lg">
          <span className="font-bold">Read More:</span>{" "}
          <span className="text-primary">
            What Is Competitor Analysis? Definition + Step-by-Step Guide
          </span>
        </p>
      </div>

      {/* Fourth Paragraph */}
      <div className="pb-4">
        <ContentHeading
          title="3. Project context"
          headingLevel="h3"
          className="text-2xl lg:text-[34px]"
        />
        <div className="my-4">
          <p className="text-lg lg:text-xl">
            As with an assigned role, providing context for a project can help
            ChatGPT generate appropriate responses. Context might include
            background information on why you’re completing a given project or
            important facts and statistics.
            <br />
            <br />
            <b>Example:</b> The content strategy will support a tech start-up
            prioritizing building a strong online presence over sales in its
            early phases of growth, so the content strategy needs to reflect
            this focus.
          </p>
        </div>
      </div>

      {/* Fifth Paragraph */}
      <div className="pb-4">
        <ContentHeading
          title="4. Output specifications"
          headingLevel="h3"
          className="text-2xl lg:text-[34px]"
        />
        <div className="my-4">
          <p className="text-lg lg:text-xl">
            Your prompt should specify details of the output you want ChatGPT to
            generate and how it should be generated, including the tone, length,
            style, and structure, as well as research that needs to be
            conducted.
            <br />
            <br />
            <b>Example:</b> The content strategy should use accessible terms and
            avoid jargon while still sounding professional so that all project
            stakeholders can easily understand it. It should start with the
            strategy objectives and provide specific ideas for content that will
            appear on multiple{" "}
            <span className="text-primary font-semibold">
              marketing channels
            </span>
            , along with a short rationale for each suggestion. It should be
            informed by the content marketing of popular tech brands: Company A,
            Company B, and Company C.
          </p>
        </div>
      </div>

      {/* Sixth Paragraph */}
      <div className="pb-4">
        <ContentHeading
          title="5. Rules and constraints"
          headingLevel="h3"
          className="text-2xl lg:text-[34px]"
        />
        <div className="my-4">
          <p className="text-lg lg:text-xl">
            Including rules and constraints, alongside the output
            specifications, can further aid ChatGPT in producing your desired
            output. These might include certain types of content, examples, or
            even words you want ChatGPT to exclude.
            <br />
            <br />
            <b>Example:</b> The content marketing strategy should not include
            any ideas for email, blog, or social media content that would
            mention our competitors in the content itself.
          </p>
        </div>
      </div>

      {/* Seventh Paragraph */}
      <div className="pb-4">
        <ContentHeading
          title="5. Rules and constraints"
          headingLevel="h3"
          className="text-2xl lg:text-[34px]"
        />
        <div className="my-4">
          <p className="text-lg lg:text-xl">
            Giving ChatGPT some examples of the kind of output you are looking
            for can reduce the risk of it misinterpreting your prompt. You can
            include examples of writing styles and tones you’ve specified in the
            instructions, examples of the kind of content you want, and even
            examples from your previous work.
            <br />
            <br />
            <b>Example:</b> Generate a list of email subject lines for the tech
            start-up brand awareness campaign that mimics the upbeat and
            inviting style of this example: “Your Gateway to Tech Excellence:
            [Tech Startup's Name]."
          </p>
        </div>
      </div>

      {/* Info Banner */}
      <ContentInfoBanner
        children={
          <>
            <h3 className="text-xl lg:text-xl font-extrabold pb-2 text-black">
              How to make ChatGPT write like a human: Prompt tip
            </h3>
            <p className="text-lg text-black">
              Remember that ChatGPT can understand and respond to human language
              because of a technology called{" "}
              <span className="font-semibold text-primary">
                natural language processing
              </span>
              . When prompting, you can be conversational with ChatGPT. The
              prompt doesn’t need to be overly formal; it just needs to be clear
              and specific.
            </p>
          </>
        }
      />

      {/* Eighth Paragraph */}
      <div className="pb-4">
        <div className="my-4">
          <p className="text-lg lg:text-xl italic font-medium">
            Now that we’ve gone over the individual components of effective
            ChatGPT prompts, let’s put the entire sample prompt together into a
            cohesive set of instructions:
            <br />
            <br />
            Acting as a content strategist, develop a 200-word content marketing
            strategy for a tech start-up to increase brand awareness among tech
            enthusiasts. The strategy should start with the objectives and then
            provide specific ideas for blog posts with captivating headlines,
            captions for viral social media posts, and concepts for email
            newsletter blasts. Provide a short rationale for each suggestion.
            Use this email subject line as an example of an upbeat and inviting
            style for the whole strategy: “Your Gateway to Tech Excellence:
            [tech start-up’s name].” The strategy should identify opportunities
            to fill content gaps in this niche without including sales-focused
            content. It should be informed by the content marketing of popular
            tech brands such as Google, Apple, and Amazon. At the same time, do
            not mention these brands in the content itself. The content strategy
            should avoid jargon while still being professional.
            <br />
            <br />
            Here’s the resulting output that ChatGPT generated based on the
            above prompt: 
          </p>
        </div>
      </div>

      {/* Prompt Example */}
      <div className="my-6 py-6">
        <PropmptExample />
      </div>

      {/* Nineth Paragraph */}
      <div className="pb-4">
        <ContentHeading
          title="Advanced ChatGPT prompting strategies"
          headingLevel="h2"
          className="text-[25px] lg:text-[44px]"
        />
        <div className="my-4">
          <p className="text-lg lg:text-xl">
            As you gain proficiency in composing thorough and explicit prompts
            like the example above, start using more advanced prompting
            strategies to get even more out of ChatGPT. In addition, this will
            contribute to the advancement and improvement of the generative AI
            tool.
            <br />
            <br />
            Below are six strategies you could consider trying.
          </p>
        </div>
      </div>

      {/* Tenth Paragraph */}
      <div className="pb-4">
        <ContentHeading
          title="1. Set custom instructions."
          headingLevel="h3"
          className="text-2xl lg:text-[34px]"
        />
        <div className="my-4">
          <p className="text-lg lg:text-xl">
            All users—including free tier and Plus subscribers—can set custom
            instructions from their ChatGPT accounts as a way to personalize
            their interactions with the tool, filter content, and control the
            context. For example, your custom instructions can tell ChatGPT to
            adopt a particular tone when generating outputs or to focus its
            outputs on a specific field like dentistry or creative writing.
            <br />
            <br />
            Unlike providing these kinds of instructions in an individual
            conversation, setting custom instructions for your account might be
            useful if the majority of your conversations with ChatGPT adhere to
            specific parameters. If your projects, tasks, and reasons for using
            ChatGPT to generate content are diverse, then custom instructions
            may not be necessary or advantageous for you.
            <br />
            <br />
            Note that once you set custom instructions, they will apply to new
            conversations with ChatGPT going forward until you edit or delete
            the instructions. 
          </p>
        </div>
      </div>

      {/* Elleventh Paragraph */}
      <div className="pb-4">
        <ContentHeading
          title="2. Use an AI prompt generator or ask ChatGPT to generate prompts. "
          headingLevel="h3"
          className="text-2xl lg:text-[34px]"
        />
        <div className="my-4">
          <div className="text-lg lg:text-xl">
            While writing your own prompts from scratch is the best way to hone
            your skills, you might find it helpful to ask ChatGPT on occasion to
            generate prompts for you. In so doing, you can observe the tool in
            action and learn more about what makes a prompt effective and the
            kinds of outputs to expect.
            <br />
            <br />
            Related methods of prompt research include:
            <br />
            <br />
            <ul className="space-y-6 px-6 lg:px-12">
              <li className="list-disc">
                Reverse engineering responses by giving ChatGPT a sample output
                and asking it to create a prompt that could lead to that output.
              </li>
              <li className="list-disc">
                Searching the internet for industry-specific examples of
                effective prompts, then experimenting with different versions of
                those prompts.
              </li>
            </ul>
            <br />
            <br />
            With each of these methods, be sure to evaluate the suitability of
            the outputs, as well as what qualities the prompts have that lead to
            desired outputs.
            <br />
            <br />
            <b>
              Watch this video to understand how ChatGPT can help you refine
              your questions:
            </b>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <ChatGPTVideo />

      {/* Mini Ad */}
      <ChatGPTMiniAd />

      {/* Twelveth Paragraph */}
      <div className="py-4 my-4">
        <ContentHeading
          title="3. Create your own prompt library."
          headingLevel="h3"
          className="text-2xl lg:text-[34px]"
        />
        <div className="my-4">
          <div className="text-lg lg:text-xl">
            Each time you create and use a ChatGPT prompt, consider saving it,
            along with the output, in your own files for later use. This
            strategy offers several benefits:
            <br />
            <br />
            <ul className="space-y-6 px-6 lg:px-12">
              <li className="list-disc">
                Sharing effective prompts with others
              </li>
              <li className="list-disc">
                Being able to review and improve your own prompts for future
                projects
              </li>
              <li className="list-disc">
                Maintaining a knowledge base for your own work
              </li>
              <li className="list-disc">
                Scaling your interactions with ChatGPT
              </li>
              <li className="list-disc">
                Creating multiple versions of an effective prompt for different
                uses
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Info Banner2 */}
      <ContentInfoBanner
        children={
          <>
            <h3 className="text-xl lg:text-xl font-extrabold pb-2 text-black">
              Interested in becoming a prompt engineer?
            </h3>
            <p className="text-lg text-black">
              In your research into ChatGPT prompts, you may notice that{" "}
              <span className="font-semibold text-primary">
                prompt engineering
              </span>
              —the act of crafting inputs to optimize generative AI outputs—is
              emerging as a career field with jobs opening across industries.
              Employers are hiring people with skills in writing, data science,
              machine learning, and more to fine-tune interactions with AI tools
              and achieve their business goals. Try out{" "}
              <span className="font-semibold text-primary">
                Prompt Engineering for ChatGPT
              </span>{" "}
              from Vanderbilt University to advance your skills today.
            </p>
          </>
        }
      />

      {/* Thirteenth Paragraph */}
      <div className="pb-4">
        <ContentHeading
          title="4. Ask ChatGPT to generate summaries of long conversations."
          headingLevel="h3"
          className="text-2xl lg:text-[34px]"
        />
        <div className="my-4">
          <p className="text-lg lg:text-xl">
            After chatting with ChatGPT over a series of prompts and follow-up
            prompts, you might find it useful to ask for a summary to retrieve
            important points rather than manually scrolling through the chat and
            reviewing it in its entirety. You can use the summary to collaborate
            with others, make decisions, recall information, and learn.
          </p>
        </div>
      </div>

      {/* Fourteenth Paragraph */}
      <div className="pb-4">
        <ContentHeading
          title="5. Request outputs that represent multiple perspectives."
          headingLevel="h3"
          className="text-2xl lg:text-[34px]"
        />
        <div className="my-4">
          <p className="text-lg lg:text-xl">
            For some prompts, try asking ChatGPT to provide information and
            examples from different viewpoints on the given subject. Doing so
            can lead to a greater understanding of the subject, as well as
            reduced bias, informed decision-making, and more creativity.
            <br />
            <br />
            <b>For example:</b> In{" "}
            <span className="text-primary font-semibold">
              product development
            </span>
            , you could ask ChatGPT to generate an output that reflects the
            knowledge and mindset of different stakeholders in the project
            you’re completing, such as a customer, a CEO, or a product manager.
            An output could be a detailed description of the product development
            process and could cover what a customer wants, the CEO’s vision, and
            the product manager’s responsibility.
          </p>
        </div>
      </div>

      {/* Fifteenth Paragraph */}
      <div className="pb-4">
        <ContentHeading
          title="6. Review and rate ChatGPT’s responses."
          headingLevel="h3"
          className="text-2xl lg:text-[34px]"
        />
        <div className="my-4">
          <p className="text-lg lg:text-xl">
            All of your interactions with ChatGPT can contribute to the tool’s
            continual improvement, as users’ chat histories can be used to train
            the model. Taking time to review and rate ChatGPT’s responses for
            quality and accuracy can lead to more significant upgrades. When
            users point out errors or provide suggestions, AI developers can
            collect more data to guide improvements and support accurate
            responses. To provide feedback, click one of the feedback
            indicators—the thumbs up or thumbs down icons in the upper right
            corner of the output—and add your suggestions.
          </p>
        </div>
      </div>

      {/* Last Paragraph */}
      <div className="py-20">
        <ContentHeading
          title="Start advancing your prompt writing skills with Coursera"
          headingLevel="h2"
          className="text-3xl lg:text-[44px]"
        />
        <div className="my-4">
          <p className="text-lg lg:text-xl">
            Taking online courses can be a great way to discover ChatGPT career
            opportunities, whether you employ prompting strategies in your
            current career or decide to find employment as a prompt engineer.
            <br />
            <br />
            Learn more intricate prompt engineering strategies and how to create
            prompt-based applications in Vanderbilt University’s popular{" "}
            <span className="text-primary font-semibold">
              Prompt Engineering for ChatGPT
            </span>{" "}
            course.
            <br />
            <br />
            Or, build prompting skills you can use in your current career in as
            little as nine hours while earning credentials from Google by
            enrolling in the online{" "}
            <span className="text-primary font-semibold">
              Google Prompting Essentials
            </span>{" "}
            course.
          </p>
        </div>
      </div>

      {/* ChatGPT Ad */}
      <ChatGPTAd />

      {/* ChatGPT Ad Google */}
      <ChatGPTAd
        className="pt-8 lg:pt-16 pb-4 lg:pb-6"
        iconSrc="/assets/icons/google.png"
        type="Specialization"
        courseTitle="Google Prompting Essentials"
        courseDescription="Unlock AI’s Potential with Effective Prompts. Learn from Google experts how to use AI effectively by writing clear and specific prompts."
        courseRating="4.8"
        courseRatingsCount="5,249 ratings"
        courseEnrolledCount="594,608 already enrolled"
        courseLevel="Beginner level"
        courseAverageTime="1 month(s)"
        courseSkills={[
          "Prompt Patterns",
          "AI Personalization",
          "Solution Design",
          "Prompt Engineering",
          "Machine Learning",
          "Document Management",
          "Critical....",
        ]}
      />

      {/* Staff Banner */}
      <CourseraStaff />
    </AppSection>
  );
};

interface ContentHeadingProps {
  headingLevel: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  title: string;
  className?: string;
}
const ContentHeading = ({
  headingLevel,
  title,
  className,
}: ContentHeadingProps) => {
  switch (headingLevel) {
    case "h1":
      return (
        <h1
          className={cn(
            "font-medium text-[35px] lg:text-[48px]",
            className,
            spectralSc.className
          )}
        >
          {title}
        </h1>
      );

      break;
    case "h2":
      return (
        <h2
          className={cn(
            "font-medium text-[28px] lg:text-[35px]",
            className,
            spectralSc.className
          )}
        >
          {title}
        </h2>
      );

      break;
    case "h3":
      return (
        <h3
          className={cn(
            "font-medium text-[22px] lg:text-[28px]",
            className,
            spectralSc.className
          )}
        >
          {title}
        </h3>
      );

      break;
    case "h4":
      return (
        <h4
          className={cn(
            "font-medium text-[20px] lg:text-[22px]",
            className,
            spectralSc.className
          )}
        >
          {title}
        </h4>
      );

      break;
    case "h5":
      return (
        <h5
          className={cn(
            "font-medium text-[18px] lg:text-[20px]",
            className,
            spectralSc.className
          )}
        >
          {title}
        </h5>
      );

      break;
    case "h6":
      return (
        <h6
          className={cn(
            "font-medium text-[16px] lg:text-[18px]",
            className,
            spectralSc.className
          )}
        >
          {title}
        </h6>
      );

      break;

    default:
      break;
  }
};

interface ContentInfoBannerProps {
  children: React.ReactNode;
}
const ContentInfoBanner = ({ children }: ContentInfoBannerProps) => {
  return (
    <div className="p-6 lg:p-9 border border-primary rounded-[16px] bg-[#FFF0E5] my-6">
      {children}
    </div>
  );
};

const PropmptExample = () => {
  return (
    <Image
      src="/assets/images/prompt-example.png"
      alt="ChatGPT Prompt Example"
      width={800}
      height={800}
      className="object-contain w-full h-full"
    />
  );
};

const CourseraStaff = () => {
  return (
    <div className="py-8 lg:py-12 border-b-4 border-[#E96200]">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8">
        {/* Profile Info */}
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0">
            <Image
              src="/assets/images/who-we-are-1.png"
              alt="Coursera Staff"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="text-xl font-bold text-gray-900">Coursera Staff</h4>
            <p className="text-gray-500">Editorial Team</p>
          </div>
        </div>

        {/* Action & Date */}
        <div className="flex items-center gap-6 self-start lg:self-auto">
          <div className="text-right hidden sm:block">
            <p className="text-gray-900 font-bold">Updated On:</p>
            <p className="text-gray-600">Dec 5, 2025</p>
          </div>
          <AppActionButton
            variant="fading"
            className="bg-linear-to-r! from-[#FF9048]! to-[#FF741E]! text-white! px-6! py-2! h-auto! rounded-lg! flex items-center gap-2 font-bold shadow-md hover:opacity-90 transition-opacity"
          >
            Share
            <Share2 className="text-white rotate-180" />
          </AppActionButton>
        </div>
      </div>

      {/* Description */}
      <div className="space-y-6">
        <p className="text-gray-500 text-sm font-medium">
          Coursera’s Editorial Team Is Comprised Of Highly Experienced
          Professional Editors, Writers, And Fact...
        </p>

        <p className="text-gray-500 text-sm leading-relaxed">
          This Content Has Been Made Available For Informational Purposes Only.
          Learners Are Advised To Conduct Additional Research To Ensure That
          Courses And Other Credentials Pursued Meet Their Personal,
          Professional, And Financial Goals.
        </p>
      </div>
    </div>
  );
};
