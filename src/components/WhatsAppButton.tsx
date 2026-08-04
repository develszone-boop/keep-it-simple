import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "919390595302"; // India country code + number
  const defaultMessage = "Hi! I'm interested in trikalnetra's services. Can we discuss?";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
  
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:bg-[#128C7E] transition-colors duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
      
      {/* Tooltip on hover */}
      <span className="absolute right-16 bg-slate-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppButton;
