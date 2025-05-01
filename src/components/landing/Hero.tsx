import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[70vh] w-full bg-gradient-to-b from-secondary/50 to-white pt-0 sm:pt-32">
      <div className="relative overflow-hidden py-8 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between">
            <div className="sm:text-center md:max-w-2xl lg:col-span-6 lg:text-left pt-16 sm:pt-0">
              <h1>
                <span className="block text-3xl sm:text-4xl tracking-tight font-extrabold xl:text-6xl">
                  <span className="gradient-heading bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Ace Your
                  </span>
                  <span className="block mt-1">Tech Interviews</span>
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Practice realistic technical interviews with AI mentors
                specialized in your tech stack. Get real-time feedback,
                improve your skills, and land your dream job.
              </p>

              <div className="mt-8 sm:max-w-lg sm:text-center lg:text-left">
                <form className="mt-3 sm:flex items-start justify-start">
                  <div className="mt-3 rounded-md shadow sm:mt-0 sm:flex-shrink-0">
                    <Button size="lg" className="w-full flex items-center bg-primary">
                      Get Started
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </form>
                <p className="text-[12px] mt-1 ml-1 text-gray-500">
                  Free to start. No credit card required.
                </p>
              </div>

              <div className="mt-6 sm:mt-8">
                <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2 sm:gap-4">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-500" />
                    <p className="ml-2 text-sm text-gray-600">AI Powered Feedback</p>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-500" />
                    <p className="ml-2 text-sm text-gray-600">Real-world Questions</p>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-500" />
                    <p className="ml-2 text-sm text-gray-600">Tailored to Your Level</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-span-6">
              <div className="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden lg:ml-auto shadow-xl border">
                <div className="px-4 py-8 sm:px-10">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">Mock Interview</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="rounded-md shadow-sm">
                      <div className="code-block text-sm h-64 overflow-y-auto font-mono bg-gray-900 text-gray-100 p-4 rounded-lg shadow-inner">
                        <p className="text-teal-400">Technical Interview</p>
                        <p className="text-white mt-2">Interviewer: </p>
                        <p className="text-gray-300 ml-4 mt-1">
                          Write a function that finds the longest substring
                          without repeating characters in a given string.
                        </p>
                        <p className="text-white mt-4">You: </p>
                        <div className="ml-4 mt-1 text-yellow-300">
                          <span className="type-animation">
                            function lengthOfLongestSubstring(s) {"{"}
                            <br />
                            &nbsp;&nbsp;let maxLength = 0;
                            <br />
                            &nbsp;&nbsp;let start = 0;
                            <br />
                            &nbsp;&nbsp;const charMap = new Map();
                            <br />
                            <br />
                            &nbsp;&nbsp;for (let i = 0; i {"<"} s.length; i++) {"{"}
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;const char = s[i];
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;if (charMap.has(char) && charMap.get(char) {">="} start) {"{"}
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;start = charMap.get(char) + 1;
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;{"}"} else {"{"}
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;maxLength = Math.max(maxLength, i - start + 1);
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;charMap.set(char, i);
                            <br />
                            &nbsp;&nbsp;{"}"}
                            <br />
                            <br />
                            &nbsp;&nbsp;return maxLength;
                            <br />
                            {"}"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-6 bg-gray-50 border-t border-gray-200 sm:px-10">
                  <p className="text-xs leading-5 text-gray-500">
                    Practice with 1000+ interview questions from top tech companies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 