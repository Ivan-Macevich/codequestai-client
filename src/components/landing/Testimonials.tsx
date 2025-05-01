import { Star } from "lucide-react";
import Image from "next/image";
const testimonials = [
  {
    name: "Sarah Chen",
    role: "Frontend Developer",
    content:
      "CodeQuestAI helped me nail my interview. The AI feedback was spot-on and the practice questions were very similar to what I got in the actual interview.",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    name: "Michael Johnson",
    role: "Software Engineer",
    content:
      "The system design simulator was game-changing for my interviews. I felt so much more confident and prepared after practicing with CodeQuestAI.",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Priya Patel",
    role: "Full Stack Developer at Stripe",
    content:
      "I credit CodeQuestAI for helping me land my dream job. The behavioral interview practice especially helped me structure my answers better.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Success Stories
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            See how CodeQuestAI has helped developers land their dream jobs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 relative">
              <div className="absolute -top-4 -left-4">
                <Star className="h-8 w-8 fill-yellow-400 text-yellow-400" />
              </div>
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                  width={48}
                  height={48}
                />
                <div>
                  <h3 className="font-medium text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">&quot;{testimonial.content}&quot;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 