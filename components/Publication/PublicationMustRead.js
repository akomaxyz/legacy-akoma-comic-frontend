import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { parseImgUrl } from 'utils/common'
import PublicationLoader from './PublicationLoader'

const PublicationMustRead = ({ data }) => {
  const [height, setHeight] = useState(0)
  const ref = useRef()

  useEffect(() => {
    if (ref.current.clientWidth !== 0) {
      setHeight(ref.current.clientWidth / 2)
    }
  }, [ref])

  if (!data) return <PublicationLoader />

  return (
    <div className="publication-card rounded-md overflow-hidden shadow-xl drop-shadow-xl">
      <div className="relative z-10 bg-primary">
        <Link href={`/publication/${data.slug}-${data._id}`}>
          <a>
            <div
              ref={ref}
              className="aspect-[2/1] overflow-hidden m-auto cursor-pointer shadow-inner w-full"
              style={{ height }}
            >
              <img
                className="w-full h-full object-cover"
                src={parseImgUrl(data.thumbnail, null, { width: `600` })}
              />
            </div>
          </a>
        </Link>
      </div>
      <div className="flex flex-col p-4 -mt-1">
        <Link href={`/publication/${data.slug}-${data._id}`}>
          <a>
            <div className="cursor-pointer">
              <div className="overflow-hidden" style={{ maxHeight: `3.75rem` }}>
                <p className="text-black text-lg font-bold truncate border-b-2 border-transparent ">
                  {data.title}
                </p>
              </div>
              <div className="overflow-hidden mt-2">
                <p className="text-black line-clamp-2 text-sm">
                  {data.description}
                </p>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default PublicationMustRead
