import Image from 'next/image'
import { MdOutlineFormatQuote } from 'react-icons/md'
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from '~/components/ui/carousel'
import Section from '~/components/section'
import BlurFade from '~/components/ui/blur-fade'

const companies = [
   'Google',
   'Microsoft',
   'Amazon',
   'Netflix',
   'YouTube',
   'Instagram',
   'Uber',
   'Spotify',
]

export default function Component() {
   return (
      <Section
         title="Testimonial Highlight"
         subtitle="What our customers are saying"
      >
         <Carousel>
            <div className="relative mx-auto max-w-2xl">
               <CarouselContent>
                  {Array.from({ length: 7 }).map((_, index) => (
                     <CarouselItem key={index}>
                        <div className="p-2 pb-5">
                           <div className="text-center">
                              <MdOutlineFormatQuote className="text-themeDarkGray mx-auto my-4 text-4xl" />
                              <BlurFade delay={0.25} inView>
                                 <h4 className="text-1xl mx-auto max-w-lg px-10 font-semibold">
                                    {getTestimonialQuote(index)}
                                 </h4>
                              </BlurFade>
                              <BlurFade delay={0.25 * 2} inView>
                                 <div className="mt-8">
                                    <Image
                                       width={0}
                                       height={40}
                                       key={index}
                                       src={`https://cdn.magicui.design/companies/${
                                          companies[index % companies.length]
                                       }.svg`}
                                       alt={`${companies[index % companies.length]} Logo`}
                                       className="mx-auto h-[40px] w-auto opacity-30 grayscale"
                                    />
                                 </div>
                              </BlurFade>
                              <div className="">
                                 <BlurFade delay={0.25 * 3} inView>
                                    <h4 className="text-1xl my-2 font-semibold">
                                       {getTestimonialName(index)}
                                    </h4>
                                 </BlurFade>
                              </div>
                              <BlurFade delay={0.25 * 4} inView>
                                 <div className=" mb-3">
                                    <span className="text-themeDarkGray text-sm">
                                       {getTestimonialRole(index)}
                                    </span>
                                 </div>
                              </BlurFade>
                           </div>
                        </div>
                     </CarouselItem>
                  ))}
               </CarouselContent>
               <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-2/12 bg-gradient-to-r from-background"></div>
               <div className="pointer-events-none absolute inset-y-0 right-0 h-full  w-2/12 bg-gradient-to-l from-background"></div>
            </div>
            <div className="hidden md:block">
               <CarouselPrevious />
               <CarouselNext />
            </div>
         </Carousel>
      </Section>
   )
}

function getTestimonialQuote(index: number): string {
   const quotes = [
      'nexus.ai has revolutionized our security testing process. We\'re now able to identify and address vulnerabilities faster than ever before.',
      'With nexus.ai, we\'ve significantly improved our security posture. It\'s like having an AI-powered ethical hacker working around the clock.',
      'The AI-driven insights from nexus.ai have transformed how we approach cybersecurity. It\'s a game-changer for our platform\'s security.',
      'nexus.ai\'s automated penetration testing has saved us countless hours and dramatically enhanced our security measures.',
      'Implementing nexus.ai was seamless, and the results were immediate. We\'re now proactively addressing potential security issues before they become threats.',
      'The continuous monitoring capabilities of nexus.ai give us peace of mind. We\'re always one step ahead in protecting our users\' data.',
      'nexus.ai\'s compliance mapping feature has streamlined our security audit processes. It\'s an essential tool for maintaining trust with our users.',
   ]
   return quotes[index % quotes.length]
}

function getTestimonialName(index: number): string {
   const names = [
      'Alex Rivera',
      'Samantha Lee',
      'Raj Patel',
      'Emily Chen',
      'Michael Brown',
      'Linda Wu',
      'Carlos Gomez',
   ]
   return names[index % names.length]
}

function getTestimonialRole(index: number): string {
   const roles = [
      'Head of Cybersecurity',
      'Chief Information Security Officer',
      'VP of Engineering',
      'Security Operations Manager',
      'Director of IT Security',
      'Lead Security Architect',
      'Chief Technology Officer',
   ]
   return roles[index % roles.length]
}
