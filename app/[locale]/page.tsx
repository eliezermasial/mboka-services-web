import { Hero } from "@/components/sections/Hero";
import { AboutUs } from "@/features/home/components/AboutUs";
import { Events } from "@/features/home/components/Events";
import { Habitats } from "@/features/home/components/Habitats";
import { ServiceDomains } from "@/features/home/components/ServiceDomains";


export default function HomePage () {
  return (
    <>
      <Hero />
      <AboutUs />
      <ServiceDomains />
      <Habitats />
      <Events />
    </>
  )
}