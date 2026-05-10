import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Facebook, Linkedin, X, Youtube, Instagram } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import Button from "./Button";
const Form = () => {
  return (
    <form className="flex flex-col">
      <div className="flex flex-col gap-[20px] mb-[20px]">
       <div className="flex flex-wrap gap-6 justify-start items-center">
  {/* LinkedIn */}
  <a 
    href="https://linkedin.com/in/yourprofile" 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center gap-3 p-3 transition-all duration-300 hover:text-[#0077B5] hover:scale-110"
  >
    <Linkedin size={28} />
    <span className="font-medium">LinkedIn</span>
  </a>

  {/* X / Twitter */}
  <a 
    href="https://twitter.com/yourhandle" 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center gap-3 p-3 transition-all duration-300 hover:text-black hover:scale-110"
  >
    <FaXTwitter size={28} />
    <span className="font-medium">Twitter</span>
  </a>

  {/* facebook */}
  <a 
    href="https://facebook.com/yourprofile" 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center gap-3 p-3 transition-all duration-300 hover:text-[#3b5998] hover:scale-110"
  >
    <Facebook size={28} />
    <span className="font-medium">Facebook</span>
  </a>

  {/* YouTube */}
  <a 
    href="https://youtube.com/yourchannel" 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center gap-3 p-3 transition-all duration-300 hover:text-[#FF0000] hover:scale-110"
  >
    <Youtube size={28} />
    <span className="font-medium">YouTube</span>
  </a>
  {/* Instagram */}
  <a 
    href="https://instagram.com/yourusername" 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center gap-3 p-3 transition-all duration-300 hover:text-[#E1306C] hover:scale-110"
  >
    <Instagram size={28} />
    <span className="font-medium">Instagram</span>
  </a>
</div>
        {/* btn */}
        {/* <Button className=""text="Send message"/> */}
      </div>
    </form>
  );
};

export default Form;
