import React from "react"
import { motion } from "framer-motion"

/* PROJECT IMAGES */
import project1 from "../assets/images/projects/green-valley-estates-shamshabad-hyderabad-farmland-investment.webp"
import project2 from "../assets/images/projects/riverstone-farms-warangal-agricultural-land-investment.webp"
import project3 from "../assets/images/projects/nature-crest-kurnool-eco-farmland-estate.webp"

/* PROJECT DATA */
const projects = [
{
title: "Green Valley Estates",
location: "Shamshabad, Hyderabad",
acres: "120 Acres",
img: project1
},
{
title: "RiverStone Farms",
location: "Warangal",
acres: "80 Acres",
img: project2
},
{
title: "Nature Crest",
location: "Kurnool",
acres: "65 Acres",
img: project3
},
]

export default function ProjectsGallery() {
return (

<section className="py-24 bg-white">

<div className="container-site">

{/* SECTION HEADER */}

<div className="text-center mb-16">
<span className="section-label">
Our Developments
</span>

<h2 className="section-heading">
Signature Land Projects
</h2>
</div>

{/* PROJECT GRID */}

<div className="grid md:grid-cols-3 gap-8">

{projects.map((p,i)=>(

<motion.div
key={i}
whileHover={{ y:-10 }}
transition={{ duration:0.35 }}
className="group bg-white shadow-xl overflow-hidden rounded-sm"

>

{/* IMAGE */}

<div className="overflow-hidden">

<img
src={p.img}
alt={p.title}
loading="lazy"
className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
/>

</div>

{/* CONTENT */}

<div className="p-6">

<h3 className="font-display text-xl mb-2">
{p.title}
</h3>

<p className="text-sm text-gray-500 mb-3">
{p.location}
</p>

<p className="text-sm text-brand-600 font-semibold">
{p.acres}
</p>

<button className="mt-4 text-sm text-brand-600 hover:underline">
View Project →
</button>

</div>

</motion.div>

))}

</div>

</div>

</section>

)
}
