"use client";

import { useState } from "react";
import { Search, ChevronDown, ArrowUp, MessageCircle, MoreVertical, Link2, Bold, Italic, Underline, Strikethrough, Code2, Quote, List, ListOrdered, Sparkles } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

type ViewState = 'list' | 'related' | 'detail' | 'ask';

const mockQuestions = [
  {
    id: 1,
    title: "How to use React Hooks effectively?",
    subtitle: "I am struggling with useEffect dependency arrays. Can someone explain how to avoid infinite loops?",
    upvotes: 37,
    comments: 4,
    author: "John doe",
    quiz: "Quiz 35.",
    time: "1 year ago",
  },
  {
    id: 2,
    title: "How to use React Hooks effectively?",
    subtitle: "I am struggling with useEffect dependency arrays. Can someone explain how to avoid infinite loops?",
    upvotes: 37,
    comments: 4,
    author: "John doe",
    quiz: "Quiz 52.",
    time: "1 year ago",
  },
  {
    id: 3,
    title: "How to use React Hooks effectively?",
    subtitle: "I am struggling with useEffect dependency arrays. Can someone explain how to avoid infinite loops?",
    upvotes: 37,
    comments: 4,
    author: "John doe",
    quiz: "Lecture 15.",
    time: "1 month ago",
  },
  {
    id: 4,
    title: "How to use React Hooks effectively?",
    subtitle: "I am struggling with useEffect dependency arrays. Can someone explain how to avoid infinite loops?",
    upvotes: 37,
    comments: 4,
    author: "John doe",
    quiz: "Quiz 35.",
    time: "2 year ago",
  }
];

export const CourseQAndA = () => {
  const [view, setView] = useState<ViewState>('list');
  const [selectedQuestionId, setSelectedQuestionId] = useState<string>("1");
  const [questionInput, setQuestionInput] = useState("");

  const renderBanner = () => (
    <div className="bg-[#F86432]/10 rounded-xl p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 w-full">
      <div className="flex items-center gap-4">
        <div className="bg-[#F86432] p-3 rounded-full text-white shrink-0">
          <Sparkles className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Get an instant answer from the assistant</h3>
          <p className="text-gray-500 text-sm max-w-md">Our AI uses context from the course to help answer most questions immediately</p>
        </div>
      </div>
      <Button className="bg-[#F86432] hover:bg-[#F86432]/90 text-white rounded-lg px-6 py-2 gap-2 whitespace-nowrap">
        <Sparkles className="w-4 h-4" />
        Get an instant answer
      </Button>
    </div>
  );

  const renderList = () => (
    <div className="flex flex-col gap-6">
      {renderBanner()}
      
      <div className="relative w-full">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <Input 
          placeholder="Search" 
          className="w-full pl-10 pr-4 py-6 rounded-xl border-gray-200 text-base"
        />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Button variant="outline" className="border-gray-200 text-gray-600 rounded-lg">
          All Lectures <ChevronDown className="ml-2 w-4 h-4" />
        </Button>
        <Button variant="outline" className="border-gray-200 text-gray-600 rounded-lg">
          Sort by recomeded <ChevronDown className="ml-2 w-4 h-4" />
        </Button>
        <Button variant="outline" className="border-[#F86432] text-[#F86432] rounded-lg">
          Filter Questions <ChevronDown className="ml-2 w-4 h-4" />
        </Button>
      </div>

      <div>
        <h4 className="text-xl font-medium text-gray-900 mb-4">Recent Question from all user</h4>
        <div className="flex flex-col gap-4">
          {mockQuestions.map((q) => (
            <div 
              key={q.id} 
              className="border border-gray-100 rounded-xl p-5 hover:border-gray-200 transition-colors cursor-pointer"
              onClick={() => setView('detail')}
            >
              <div className="flex gap-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${q.author}`} />
                  <AvatarFallback>{q.author[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h5 className="font-medium text-gray-900 text-base mb-1">{q.title}</h5>
                      <p className="text-gray-500 text-sm line-clamp-2">{q.subtitle}</p>
                    </div>
                    <div className="flex flex-col items-center gap-2 shrink-0">
                      <div className="flex items-center gap-1.5 font-medium text-gray-700">
                        <span className="text-sm">{q.upvotes}</span>
                        <ArrowUp className="w-4 h-4" />
                      </div>
                      <div className="flex items-center gap-1.5 font-medium text-gray-700">
                        <span className="text-sm">{q.comments}</span>
                        <MessageCircle className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 text-xs text-gray-500 font-medium">
                    <span className="text-black">{q.author}</span> · <span className="text-[#F86432]">{q.quiz}</span> {q.time}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderRelated = () => (
    <div className="flex flex-col gap-6">
      <h3 className="text-xl font-medium text-gray-900">My Question relates to</h3>
      
      <RadioGroup value={selectedQuestionId} onValueChange={setSelectedQuestionId} className="flex flex-col gap-4">
        {mockQuestions.map((q) => (
          <div key={q.id}>
            <RadioGroupItem 
              value={q.id.toString()} 
              id={`q-${q.id}`} 
              className="peer sr-only" 
            />
            <Label
              htmlFor={`q-${q.id}`}
              className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 cursor-pointer peer-data-[state=checked]:border-black peer-data-[state=checked]:border-2 transition-all bg-white"
            >
              <div className="mt-0.5 shrink-0 w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center peer-data-[state=checked]:border-black">
                {selectedQuestionId === q.id.toString() && (
                  <div className="w-2.5 h-2.5 rounded-full bg-black" />
                )}
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="font-medium text-gray-900">{q.title}</span>
                <span className="text-sm text-gray-500 leading-relaxed font-normal">{q.subtitle}</span>
              </div>
            </Label>
          </div>
        ))}
      </RadioGroup>

      <div className="flex items-center gap-4 mt-2">
        <Button variant="ghost" size="icon" className="shrink-0 text-gray-500 hover:text-gray-900">
          <Link2 className="w-5 h-5" />
        </Button>
        <Input 
          placeholder="Ask Question" 
          value={questionInput}
          onChange={(e) => setQuestionInput(e.target.value)}
          className="flex-1 py-6 rounded-xl border-gray-200"
        />
        <Button 
          className="bg-[#F86432] hover:bg-[#F86432]/90 text-white shrink-0 w-12 h-12 rounded-xl p-0 flex items-center justify-center"
          onClick={() => setView('ask')}
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );

  const renderDetail = () => (
    <div className="flex flex-col gap-8">
      <Button variant="ghost" onClick={() => setView('list')} className="w-fit p-0 hover:bg-transparent text-gray-900 font-medium text-lg flex items-center gap-2">
        Back to Questions
      </Button>

      {/* Main Question */}
      <div className="flex gap-4">
        <Avatar className="w-12 h-12">
          <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=John doe`} />
          <AvatarFallback>J</AvatarFallback>
        </Avatar>
        <div className="flex-1 flex flex-col gap-3">
          <div className="flex justify-between items-start">
            <div className="text-sm text-gray-500 font-medium">
              <span className="text-black">John doe</span> · <span className="text-[#F86432]">Quiz 35.</span> 1 year ago
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 font-medium text-gray-700">
                <span className="text-sm">37</span>
                <ArrowUp className="w-4 h-4" />
              </div>
              <Button variant="ghost" size="icon" className="w-6 h-6 text-gray-400 p-0">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">How to use React Hooks effectively?</h4>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              There is something that confuses me in the is_subset solution. Why is the solution made so complex? Maybe I think this way because I don't understand the question, but wouldn't the code I shared below be enough to check whether each element in lst1 is in lst2? If my approach is wrong, where am I making a mistake? (By the way, the code passed the tests successfully)
            </p>
            <div className="bg-gray-50 p-4 rounded-xl text-sm font-mono text-gray-600 whitespace-pre-wrap">
{`def is_subset(lst1, lst2):

    # Your code goes here

    for i in lst1:

        if i not in lst2:

            return False

    return True`}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-gray-100" />

      {/* Reply */}
      <div className="flex gap-4">
        <Avatar className="w-12 h-12">
          <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=Gorkem`} />
          <AvatarFallback>G</AvatarFallback>
        </Avatar>
        <div className="flex-1 flex flex-col gap-3">
          <div className="flex justify-between items-start">
            <div className="text-sm text-gray-500 font-medium">
              <span className="text-black">John doe</span> · <span className="text-[#F86432]">Quiz 52.</span> 1 year ago
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 font-medium text-gray-700">
                <span className="text-sm">37</span>
                <ArrowUp className="w-4 h-4" />
              </div>
              <Button variant="ghost" size="icon" className="w-6 h-6 text-gray-400 p-0">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div>
            <p className="text-gray-900 text-sm leading-relaxed whitespace-pre-wrap">
{`Hi Gorkem,

The reason I have made solution complex and it took me good time to write solution in its complete form because through this course I just don't want you all to solve the problem but rather make sure that you are able to understand the approach and are less and less dependent on language specific syntax.

Though the above is passing all the test cases, it doesn't made you think on alternative approach which could have helped you maybe in solving any other process. Along with that, what if tomorrow you are coding in some other language where these inbuilt are not supported or else say interviewer doesn't want you to use this way of solving due to some complexity.

Coding is more about understanding the different approach than just passing test cases and hence I have asked everywhere to write more and more brute force wherever possible.
Hope the above helps. :)`}
            </p>
          </div>
        </div>
      </div>

      {/* Add Reply Input */}
      <div className="border border-gray-100 rounded-xl p-4 flex items-center gap-4 cursor-pointer hover:border-gray-200 transition-colors" onClick={() => setView('related')}>
        <Avatar className="w-10 h-10">
          <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=Me`} />
          <AvatarFallback>Me</AvatarFallback>
        </Avatar>
        <span className="text-gray-500 text-sm font-medium">Add Reply</span>
      </div>
    </div>
  );

  const renderAsk = () => (
    <div className="flex flex-col gap-6">
      <Button variant="outline" onClick={() => setView('list')} className="w-fit text-[#F86432] border-[#F86432] hover:bg-[#F86432]/5 rounded-lg px-6">
        Back to all questions
      </Button>

      <div className="flex flex-col gap-3 mt-2">
        <h3 className="font-semibold text-gray-900">Tips on getting your answer faster</h3>
        <ul className="list-disc pl-5 flex flex-col gap-2 text-gray-500 text-sm">
          <li>Our AI uses context from the course to help answer most questions immediately.</li>
          <li>Search all course questions</li>
          <li>Our AI uses context from the course to help answer most questions immediately.</li>
          <li>Search all course questions</li>
        </ul>
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <Label className="text-sm font-medium text-gray-900">Title or summary</Label>
        <Input placeholder="Enter Title" className="py-6 rounded-xl border-gray-200" />
      </div>

      <div className="flex flex-col gap-2">
        <Label className="text-sm font-medium text-gray-900">Details</Label>
        <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
          <div className="border-b border-gray-200 px-3 py-2 flex flex-wrap items-center gap-1.5 bg-gray-50/50">
            <Button variant="ghost" size="sm" className="h-8 text-xs font-medium text-gray-600 gap-1 px-2">
              Normal text <ChevronDown className="w-3 h-3" />
            </Button>
            <div className="w-px h-4 bg-gray-300 mx-1" />
            <Button variant="ghost" size="icon" className="w-8 h-8 text-gray-600">
              <Bold className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="w-8 h-8 text-gray-600">
              <Italic className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="w-8 h-8 text-gray-600">
              <Underline className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="w-8 h-8 text-gray-600">
              <Strikethrough className="w-4 h-4" />
            </Button>
            <div className="w-px h-4 bg-gray-300 mx-1" />
            <Button variant="ghost" size="icon" className="w-8 h-8 text-gray-600">
              <Code2 className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="w-8 h-8 text-gray-600">
              <Link2 className="w-4 h-4" />
            </Button>
            <div className="w-px h-4 bg-gray-300 mx-1" />
            <Button variant="ghost" size="icon" className="w-8 h-8 text-gray-600">
              <List className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="w-8 h-8 text-gray-600">
              <ListOrdered className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="w-8 h-8 text-gray-600">
              <Quote className="w-4 h-4" />
            </Button>
          </div>
          <textarea 
            className="w-full p-4 min-h-[160px] text-sm focus:outline-none resize-y"
            placeholder="Details"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-2">
        <Label className="text-sm font-medium text-gray-900">Attachments (Optional)</Label>
        <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center text-center gap-3 bg-gray-50/50 hover:bg-gray-50 transition-colors cursor-pointer">
          <div className="bg-white p-3 rounded-full shadow-sm border border-gray-100">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
              <path d="M7 18H17V16H7V18ZM7 14H17V12H7V14ZM7 10H14V8H7V10ZM3 22V2H15L21 8V22H3ZM14 9H19.5L14 3.5V9ZM5 20H19V9H14V4H5V20Z" fill="currentColor"/>
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Drag & drop files 5MB here, or browse files</p>
            <p className="text-xs text-gray-400 mt-1">Allowed formats: PDF, DOC, DOCX, PNG, JPG (Max 10MB)</p>
          </div>
        </div>
      </div>

      <Button className="w-full bg-[#F86432] hover:bg-[#F86432]/90 text-white rounded-xl py-6 mt-4">
        Publish
      </Button>
    </div>
  );

  return (
    <div className="w-full pb-20">
      {view === 'list' && renderList()}
      {view === 'related' && renderRelated()}
      {view === 'detail' && renderDetail()}
      {view === 'ask' && renderAsk()}
    </div>
  );
};
