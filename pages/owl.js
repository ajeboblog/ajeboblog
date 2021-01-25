import React from 'react'
import dynamic from 'next/dynamic'
dynamic(() => import('owl.carousel'),
{ ssr: false })


export default function owl() {
    return (
        <>
 <div class="owl-carousel owl-theme">
  <div> Your Content </div>
  <div> Your Content </div>
  <div> Your Content </div>
  <div> Your Content </div>
  <div> Your Content </div>
  <div> Your Content </div>
  <div> Your Content </div>
  </div>
        </>
    )
}
