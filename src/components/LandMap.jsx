import React from "react"

export default function LandMap(){

return(

<section className="py-24 bg-gray-100">

<div className="container-site text-center">

<h2 className="section-heading mb-12">
Project Locations
</h2>

<iframe
src="https://maps.google.com/maps?q=hyderabad&t=&z=7&ie=UTF8&iwloc=&output=embed"
className="w-full h-[450px] rounded-lg shadow-lg"
/>

</div>

</section>

)

}