import React, { use, useState } from 'react'
import Card from './Card'

function Foreground() {

    const ref = useState(null);

    const data = [
        {
            discription: "Lorem ipsum dolor sit amet consectetur.",
            filesize: ".4mb",
            close: true,
            tag: {isOpen: true , tagTitle: "Download Now", tagColor: "blue"},
        },
          {
            discription: "Lorem ipsum dolor sit amet consectetur.",
            filesize: ".4mb",
            close: true,
            tag: {isOpen: true , tagTitle: "Upload Now", tagColor: "green"},
        },
          {
            discription: "Lorem ipsum dolor sit amet consectetur.",
            filesize: ".4mb",
            close: false,
            tag: {isOpen: false , tagTitle: "Download Now", tagColor: "green"},
        },
    ]

    useState()
  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap">
        {data.map((item, index) => (
            <Card data={item}  refrence={ref}/>
        ))}
        {/* {data.map((item, index) => (
    <Card key={item.id || index} data={item} />
        ))} */}
    </div>
  )
}

export default Foreground