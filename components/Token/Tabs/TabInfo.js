import Link from 'next/link'
import ReactLinkify from 'react-linkify'

const TabInfo = ({ localToken, isNFT }) => {
  const supply = localToken.metadata.copies
    ? `${localToken.metadata.copies}pcs`
    : `Open Edition`
  return (
    <div>
      {/* <div className="flex bg-blueGray-900 border border-blueGray-700 mt-4 p-3 rounded-md shadow-md">
        <div>
          <p className="text-sm text-white font-bold">Collection</p>
          <Link
            href={{
              pathname: '/[id]/collection/[collectionName]',
              query: {
                collectionName: encodeURIComponent(
                  localToken.metadata.collection
                ),
                id: localToken.creatorId,
              },
            }}
          >
            <a className="text-gray-100 font-semibold border-b-2 border-transparent hover:border-gray-100">
              {localToken.metadata.collection}
            </a>
          </Link>
        </div>
      </div> */}
      <div className="bg-white border border-blueGray-200 mt-4 p-3 rounded-md shadow-md">
        <p className="text-sm text-black font-bold">Description</p>
        <ReactLinkify
          componentDecorator={(decoratedHref, decoratedText, key) => (
            <a target="blank" href={decoratedHref} key={key}>
              {decoratedText}
            </a>
          )}
        >
          <p
            className="text-black whitespace-pre-line"
            style={{
              wordBreak: 'break-word',
            }}
          >
            {localToken.metadata.description.replace(/\n\s*\n\s*\n/g, '\n\n')}
          </p>
        </ReactLinkify>
      </div>
      {isNFT && (
        <div className="flex bg-white border border-blueGray-200 mt-4 p-3 rounded-md shadow-md">
          <div>
            <p className="text-sm text-black font-bold">Owner</p>
            <Link href={`/${localToken.owner_id}`}>
              <a className="text-gray-100 font-semibold hover:opacity-80">
                {localToken.owner_id}
              </a>
            </Link>
          </div>
        </div>
      )}
      {localToken.royalty && Object.keys(localToken.royalty).length !== 0 && (
        <div className="flex bg-white border border-blueGray-200 mt-4 p-3 rounded-md shadow-md">
          <div>
            <p className="text-sm text-black font-bold">Royalty</p>
            <p className="text-black font-semibold">
              {Object.keys(localToken.royalty).length !== 0
                ? `${Object.values(localToken.royalty)[0] / 100} %`
                : `None`}
            </p>
          </div>
        </div>
      )}
      <div className="flex bg-white border border-blueGray-200 mt-4 p-3 rounded-md shadow-md">
        <div>
          <p className="text-sm text-black font-bold">Edition</p>
          <Link href={`/token/${localToken.token_series_id}`}>
            <a className="text-black font-semibold hover:opacity-80">
              #{localToken.edition_id} of {supply}
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TabInfo
