import { Hero } from "@/components/sections/Hero";
import { Events } from "@/features/home/components/Events";
import { AboutUs } from "@/features/home/components/AboutUs";
import { Habitats } from "@/features/home/components/Habitats";
import { FashionBeauty } from "@/features/home/components/FashionBeauty";
import { ServiceDomains } from "@/features/home/components/ServiceDomains";


export default function HomePage () {
  return (
    <>
      <Hero />
      <AboutUs />
      <ServiceDomains />
      <Habitats />
      <Events />
      <FashionBeauty />
    </>
  )
}