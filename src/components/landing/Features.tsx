import {
  Brain,
  Code,
  FileText,
  LineChart,
  MessageSquare,
  MonitorPlay,
  Star,
  Users,
} from "lucide-react";

const features = [
  {
    name: "AI Interview Simulator",
    description:
      "Get interviewed by our AI that adapts to your skill level and provides real-time feedback.",
    icon: Brain,
  },
  {
    name: "Interactive Coding Environment",
    description:
      "Write and test code in our browser-based editor with syntax highlighting and autocomplete.",
    icon: Code,
  },
  {
    name: "Question Bank",
    description:
      "Access a vast library of questions from top companies like Google, Amazon, and Microsoft.",
    icon: FileText,
  },
  {
    name: "Progress Tracking",
    description:
      "Monitor your performance over time with detailed analytics and suggestions.",
    icon: LineChart,
  },
  {
    name: "Behavioral Interview Practice",
    description:
      "Practice answering common behavioral questions with AI feedback on your responses.",
    icon: MessageSquare,
  },
  {
    name: "System Design Challenges",
    description:
      "Build your system design skills with interactive scenarios and guidance.",
    icon: MonitorPlay,
  },
  {
    name: "Personalized Recommendations",
    description:
      "Get custom study plans based on your strengths and weaknesses.",
    icon: Star,
  },
  {
    name: "Community Support",
    description:
      "Connect with peers and mentors to share tips and get additional feedback.",
    icon: Users,
  },
];

const Features = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Features That Get You Hired
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            Everything you need to ace your technical interviews and land your
            dream job.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100;"
              >
                <div>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-muted text-primary">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-5 text-lg font-medium text-gray-900">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
