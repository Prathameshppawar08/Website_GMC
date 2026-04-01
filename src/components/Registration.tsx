import { useState } from "react";
import { UserPlus } from "lucide-react";

export default function Registration() {
  const [selectedCategory, setSelectedCategory] = useState<
    "UG" | "PG" | "OTHER" | null
  >(null);

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

  const colorClasses = {
    UG: {
      border: "border-red-500",
      text: "text-red-500",
      button: "bg-red-600 hover:bg-red-700",
    },
    PG: {
      border: "border-blue-500",
      text: "text-blue-500",
      button: "bg-blue-600 hover:bg-blue-700",
    },
    OTHER: {
      border: "border-green-500",
      text: "text-green-500",
      button: "bg-green-600 hover:bg-green-700",
    },
  };

  const handleClick = (category: "UG" | "PG" | "OTHER") => {
    setSelectedCategory((prev) => (prev === category ? null : category));
  };

  return (
    <section
      id="registration"
      className="py-16 px-4 bg-black" // ✅ removed min-h-screen
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl sm:text-5xl font-bold text-red-600 text-center mb-12">
          REGISTRATION
        </h2>

        {/* Cards */}
        <div className="flex flex-col gap-5">
          {["UG", "PG", "OTHER"].map((category) => {
            const isActive = selectedCategory === category;

            return (
              <div
                key={category}
                className={`rounded-xl border transition-all duration-300 ${
                  isActive
                    ? colorClasses[category].border
                    : "border-gray-700 hover:border-gray-500"
                } bg-gray-900/60`}
              >
                {/* Header */}
                <div
                  onClick={() =>
                    handleClick(category as "UG" | "PG" | "OTHER")
                  }
                  className="p-5 cursor-pointer flex justify-between items-center"
                >
                  <h3
                    className={`text-xl sm:text-2xl font-semibold ${colorClasses[category].text}`}
                  >
                    {category === "UG"
                      ? "UG Registration"
                      : category === "PG"
                      ? "PG Registration"
                      : "Other College"}
                  </h3>

                  <UserPlus
                    className={colorClasses[category].text}
                    size={24}
                  />
                </div>

                {/* Expand Section */}
                <div
                  className={`transition-all duration-400 ease-in-out overflow-hidden ${
                    isActive ? "max-h-[400px] px-5 pb-5" : "max-h-0"
                  }`}
                >
                  <div className="space-y-3">
                    {forms[category as keyof typeof forms].map(
                      (form, index) => (
                        <a
                          key={index}
                          href={form.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`block text-center py-3 rounded-lg text-white font-medium ${
                            colorClasses[category].button
                          }`}
                        >
                          {form.name}
                        </a>
                      )
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}