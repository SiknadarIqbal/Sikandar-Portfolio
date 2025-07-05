import React from "react";
import { FaRegFilePdf } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { motion } from "motion/react"

function Card({ data, refrence }) {
  return (
    <motion.div drag dragConstraints={refrence} className="relative w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden">
      <FaRegFilePdf />
      <p className="text-sm leading-tight mt-5 font-semibold">
        {data.discription}
      </p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex justify-between items-center py-3 px-8 mb-3">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-sky-600 rounded-full flex items-center justify-center">
            {data.close ? (
              <RxCross2 />
            ) : (
              <LuDownload size=".7em " color="#fff" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-4 ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } flex items-center justify-center`}
          >
            <h3 className="text-sm font-semibold ">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
