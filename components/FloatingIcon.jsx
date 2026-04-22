"use client";
import { MessageCircle } from "lucide-react"; // Example using Lucide icons

export default function FloatingIcon() {
  return (
    <div className="fixed bottom-6 left-6 z-50">
      <button
        className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center"
        onClick={() => console.log("Icon clicked!")}
      >
        {/* Your Icon Here */}
        <MessageCircle size={24} />

        {/* The small white 'n' notification dot shown in your image */}
        <span className="absolute top-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white bg-white text-[8px] text-red-500 font-bold text-center">
          n
        </span>
      </button>
    </div>
  );
}
