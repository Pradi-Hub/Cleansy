import React from 'react'
import { MdLocationOn } from 'react-icons/md'
import { Link } from 'react-router-dom'

const ApartmentListingCard_02 = ({listing}) => {
  return (
    <div className='border border-teal-500 transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]'>
      <Link to={`/apartmentListing/${listing._id}`}>
         <img src={listing.imageUrls[0]} alt="Apartment Listing Cover" className='h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300'/>
         <div className="p-3 flex flex-col gap-2 w-full">
            <p className="truncate text-lg font-semibold text-slate-700 dark:text-teal-500">{listing.ownerName}</p>
            <div className="flex items-center justify-between">
               <div className='flex items-center space-x-1'>
                  <MdLocationOn className="h-4 w-4 text-green-500" />
                  <p className='text-sm text-gray-600 truncate w-full'>{listing.blockNumber}</p>
               </div>
               <div className='text-xs text-slate-700 font-semibold'>
                  {listing.ownerContactNumber}
               </div>
            </div>
            <p className='text-sm text-gray-600 line-clamp-2'>{listing.description}</p>
            <p className='text-slate-500 mt-2 font-semibold '>${listing.offer ? listing.discountPrice.toLocaleString('en-US') : listing.regularPrice.toLocaleString('en-US')} {listing.type === 'rent' && ' / month'}</p>
            <div className='text-slate-700 dark:text-teal-500 flex gap-4'>
               <div className='font-bold text-xs'>{listing.bedrooms > 1 ? `${listing.bedrooms} beds ` : `${listing.bedrooms} bed `}</div>
               <div className='font-bold text-xs'>{listing.bathrooms > 1 ? `${listing.bathrooms} baths ` : `${listing.bathrooms} bath `}</div>
            </div>
         </div>
      </Link>
    </div>
  )
}

export default ApartmentListingCard_02