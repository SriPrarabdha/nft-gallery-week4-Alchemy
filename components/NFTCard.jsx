import React from 'react'

const NFTCard = ({nft}) => {

  return (
    <div className='flex flex-col items-center justify-center gap-y-2 flex-shrink w-1/4 px-2 hover:scale-105 bg-slate-100'>
      <div className='rounded-lg '>
        <img className='rounded-lg border object-cover' src={nft.media[0].gateway} ></img>
      </div>
      <div className='flex gap-x-2'>
        <h1>{nft.title}</h1>
        <p>{nft.id.tokenId.substr(nft.id.tokenId.length - 3)}</p>
        <p>{`${nft.contract.address.substr(0,5)}....${nft.contract.address.substr(nft.contract.address.length -4)}`}</p>
        <button className='tet-light' onClick={()=>{
          const address = nft.contract.address
          navigator.clipboard.writeText(address);
          alert("Copied the text: " );
        }}>copy</button>
      </div>
      <div className=''>
        <p>{`${nft.description?.substr(0 , 150)}....`}</p>
      </div>
      <div className='flex justify-center mb-1'>
        <a className='py-2 px-4 bg-blue-400 w-60 rounded-md text-center text-white cursor-pointer' target={"_blank"} href={`https://etherscan.io/token/${nft.contract.address}`}>View On Etherscan</a>
      </div>
    </div>
  )
}

export default NFTCard