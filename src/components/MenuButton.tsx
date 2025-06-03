import { Menu } from "lucide-react";

export function MenuButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#debbb9] px-6 py-3 rounded-full flex items-center space-x-2 shadow-md header"
    >
      <Menu size={26} className="text-gray-800" />
      <span>MENU</span>
    </button>
  );
}
