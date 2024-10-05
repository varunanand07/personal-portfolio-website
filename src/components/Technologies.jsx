import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaDocker } from "react-icons/fa";





const Technologies = () => {
  return (
  <div className="border-b border-neutral-800 pb-24">
    <h2 className="my-20 text-center text-4xl">Tech Stack</h2>
    <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaHtml5 className="text-7xl text-orange-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <IoLogoCss3 className="text-7xl text-blue-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <IoLogoJavascript className="text-7xl text-yellow-300" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaNodeJs className="text-7xl text-green-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <BiLogoPostgresql className="text-7xl text-sky-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaAws className="text-7xl text-white-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaPython className="text-7xl text-yellow-300" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaDocker className="text-7xl text-blue-700" />
        </div>
    </div>
  </div>
  )
}

export default Technologies
