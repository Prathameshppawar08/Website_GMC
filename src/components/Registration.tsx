import { useState } from "react";
import { UserPlus } from "lucide-react";

export default function Registration() {
  const [selectedCategory, setSelectedCategory] = useState<
    "UG" | "PG" | "OTHER" | null
  >(null);

  // 🔥 Replace these with your actual Google Form links
  const forms = {
    UG: [
      { name: "Batch 103", link: "https://docs.google.com/forms/d/19W3ZxE_DDxaJ3agZiFzd-dFhaufKbTU5WiTPRWEiPvc/viewform?usp=header" },
      { name: "Batch 104", link: "https://docs.google.com/forms/d/1htxdMCqPIIzdRE5NR6UxEa-cFoj9pNvDydczF_kXidM/viewform?usp=header" },
      { name: "Batch 105", link: "https://docs.google.com/forms/d/1RUPwL9zAcHVGwsjH2iUtGUV07D0Q1-32hBk8ge8Kbxw/viewform?usp=header" },
      { name: "Batch 106", link: "https://docs.google.com/forms/d/1XhxcBk-lMhvLVzb26qa-ExkKFpDfqkKoQkomAWyzXhY/viewform?usp=header" },
      { name: "Batch 107", link: "https://docs.google.com/forms/d/1tJAegqXvEMyk3Huyd0LxkMMUL4nIe_BEDVG3DqlPjXc/viewform?usp=header" },
    ],
    PG: [
      { name: "PGY", link: "https://docs.google.com/forms/d/13O2StsfXDT_xcnbRE0KPusXRSd_BGL6G_viRv7W6ByU/viewform?usp=header" }
    ],
    OTHER: [
      { name: "Other College Registration", link: "https://docs.google.com/forms/d/1zaNdx0IjS1Uomfuo40MPJ69JCuY6nAS8ujM0if5gnmQ/viewform?usp=header" }
    ],
  };

  return (
    <section
      id="registration"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-black relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-red-600 mb-4">
            REGISTRATION
          </h2>
          <p className="text-gray-400 text-lg">
            Mandatory for all participants • Valid for 4-day event access
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* UG */}
          <div
            onClick={() => setSelectedCategory("UG")}
            className={`p-8 rounded-lg border-2 cursor-pointer transition-all duration-300 transform hover:scale-105 ${
              selectedCategory === "UG"
                ? "border-red-500 bg-red-950/20"
                : "border-gray-700 bg-gray-900/50 hover:border-red-500"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-3xl font-bold text-red-500">
                UG Registration
              </h3>
              <UserPlus className="text-red-500" size={32} />
            </div>
            <p className="text-5xl font-bold text-white mb-4">₹400</p>
            <p className="text-gray-400">For undergraduate students</p>
          </div>

          {/* PG */}
          <div
            onClick={() => setSelectedCategory("PG")}
            className={`p-8 rounded-lg border-2 cursor-pointer transition-all duration-300 transform hover:scale-105 ${
              selectedCategory === "PG"
                ? "border-blue-500 bg-blue-950/20"
                : "border-gray-700 bg-gray-900/50 hover:border-blue-500"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-3xl font-bold text-blue-500">
                PG Registration
              </h3>
              <UserPlus className="text-blue-500" size={32} />
            </div>
            <p className="text-5xl font-bold text-white mb-4">₹600</p>
            <p className="text-gray-400">For postgraduate students</p>
          </div>

          {/* OTHER */}
          <div
            onClick={() => setSelectedCategory("OTHER")}
            className={`p-8 rounded-lg border-2 cursor-pointer transition-all duration-300 transform hover:scale-105 ${
              selectedCategory === "OTHER"
                ? "border-green-500 bg-green-950/20"
                : "border-gray-700 bg-gray-900/50 hover:border-green-500"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-3xl font-bold text-green-500">
                Other College
              </h3>
              <UserPlus className="text-green-500" size={32} />
            </div>
            <p className="text-5xl font-bold text-white mb-4">₹500</p>
            <p className="text-gray-400">
              For participants from other colleges
            </p>
          </div>
        </div>

        {/* Links Section */}
        {selectedCategory && (
          <div className="max-w-2xl mx-auto bg-gray-900/50 backdrop-blur-md p-8 rounded-lg border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              {selectedCategory === "UG"
                ? "UG Event Registrations"
                : selectedCategory === "PG"
                ? "PG Registration"
                : "Other College Registration"}
            </h3>

            <div className="space-y-4">
              {forms[selectedCategory].map((form, index) => (
                <a
                  key={index}
                  href={form.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block p-4 rounded-lg text-white font-semibold text-center transition-all duration-300 ${
                    selectedCategory === "UG"
                      ? "bg-red-600 hover:bg-red-700"
                      : selectedCategory === "PG"
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "bg-green-600 hover:bg-green-700"
                  }`}
                >
                  {form.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}