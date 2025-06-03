import { X } from "lucide-react";
import Image from "next/image";

export default function Sidebar({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-[280px] bg-[#fdfbf9] text-[#8DA071] z-50 shadow-xl transform transition-transform duration-300 ${
        open ? "translate-x-0" : "-translate-x-full"
      } flex flex-col justify-between`}
    >
      {/* Top Section */}
      <div className="px-6 pt-8">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h2 className="text-[1.6rem] leading-tight font-serif header">
              Bolaji &<br /> Oyinda
            </h2>
          </div>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-[#8DA071]" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-4 text-base">
          <a href="#" onClick={onClose}>Home</a>
          <a href="#story" onClick={onClose}>Story</a>
          <a href="#tidbit" onClick={onClose}>Tidbits</a>
          <a href="#whereToStay" onClick={onClose}>Where to Stay</a>
          <a href="#registry" onClick={onClose}>Registry</a>
          <a href="#qa" onClick={onClose}>Q & A</a>
          <a href="https://withjoy.com/bolaji-and-oyinda/moments" target="_blank">Moments</a>
          
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="px-6 pb-6 text-xs text-[#8DA071]">
        {/* <button className="w-full border border-[#8DA071] rounded-full py-2 mb-4 text-sm">
          You Are Attending
        </button>

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#8DA071] text-white flex items-center justify-center font-bold text-sm">
            SS
          </div>
          <div>
            <p className="font-medium leading-snug">olumidelisamni10+10@...</p>
            <a href="#" className="underline">
              Not You?
            </a>
          </div>
        </div> */}
       <a href="https://withjoy.com/bolaji-and-oyinda/rsvp" target="_blank">
        <button className="w-full border-2 border-[#8DA071] rounded-full py-2 mb-4 text-sm">RSVP</button>
        </a>
      </div>
    </div>
  );
}
