'use client'

import Marquee from 'components/ui/marquee'
import Section from 'components/section'
import { cn } from 'lib/utils'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import Image from 'next/image'

export function Highlight({
   children,
   className,
}: {
   children: React.ReactNode
   className?: string
}) {
   return (
      <span
         className={cn(
            'bg-primary/20 p-1 py-0.5 font-bold text-primary dark:bg-primary/20 dark:text-primary',
            className,
         )}
      >
         {children}
      </span>
   )
}

export interface TestimonialCardProps {
   name: string
   role: string
   img?: string
   description: React.ReactNode
   className?: string
   [key: string]: any
}

export function TestimonialCard({
   description,
   name,
   img,
   role,
   className,
   ...props // Capture the rest of the props
}: TestimonialCardProps) {
   return (
      <div
         className={cn(
            'mb-4 flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4',
            // light styles
            ' border border-neutral-200 bg-white',
            // dark styles
            'dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]',
            className,
         )}
         {...props}
      >
         <div className="select-none text-sm font-normal text-neutral-700 dark:text-neutral-400">
            {description}
            <div className="flex flex-row py-1">
               <Star className="size-4 fill-yellow-500 text-yellow-500" />
               <Star className="size-4 fill-yellow-500 text-yellow-500" />
               <Star className="size-4 fill-yellow-500 text-yellow-500" />
               <Star className="size-4 fill-yellow-500 text-yellow-500" />
               <Star className="size-4 fill-yellow-500 text-yellow-500" />
            </div>
         </div>

         <div className="flex w-full select-none items-center justify-start gap-5">
            <Image
               width={40}
               height={40}
               src={img || ''}
               alt={name}
               className="size-10 rounded-full ring-1 ring-border ring-offset-4"
            />

            <div>
               <p className="font-medium text-neutral-500">{name}</p>
               <p className="text-xs font-normal text-neutral-400">{role}</p>
            </div>
         </div>
      </div>
   )
}

const testimonials = [
   {
      name: 'Alex Rivera',
      role: 'CISO at InnovateTech',
      img: 'https://randomuser.me/api/portraits/men/91.jpg',
      description: (
         <p>
            The AI-driven analytics from #nexus.ai have revolutionized our
            security assessment process.
            <Highlight>
               Vulnerabilities are now detected faster and more accurately than ever.
            </Highlight>
            {' '}
            A game-changer for cybersecurity.
         </p>
      ),
   },
   {
      name: 'Samantha Lee',
      role: 'Security Director at NextGen Solutions',
      img: 'https://randomuser.me/api/portraits/women/12.jpg',
      description: (
         <p>
            Implementing #nexus.ai&apos;s penetration testing model has drastically
            improved our security posture.
            <Highlight>We've seen a 70% reduction in successful breach attempts!</Highlight>
            {' '}
            Highly recommend their platform.
         </p>
      ),
   },
   {
      name: 'Raj Patel',
      role: 'Founder & CEO at SecureStartup',
      img: 'https://randomuser.me/api/portraits/men/45.jpg',
      description: (
         <p>
            As a startup, we need robust security without breaking the bank. #nexus.ai&apos;s
            automated pentesting helps us do just that.
            <Highlight>Our security confidence has doubled.</Highlight>
            {' '}
            Essential tool for any security-conscious startup.
         </p>
      ),
   },
   {
      name: 'Emily Chen',
      role: 'Compliance Manager at Global Systems',
      img: 'https://randomuser.me/api/portraits/women/83.jpg',
      description: (
         <p>
            #nexus.ai&apos;s AI-driven compliance mapping has made meeting regulatory requirements a breeze.
            <Highlight>Audit preparation is now seamless and efficient.</Highlight>
            {' '}
            A must-have for managing complex compliance landscapes.
         </p>
      ),
   },
   {
      name: 'Michael Brown',
      role: 'Head of Cybersecurity at FinTech Innovations',
      img: 'https://randomuser.me/api/portraits/men/1.jpg',
      description: (
         <p>
            Leveraging #nexus.ai&apos;s AI for our security operations has given us
            an edge in threat detection and response.
            <Highlight>
               Our incident response time has decreased by 60% with real-time AI insights.
            </Highlight>
            {' '}
            Transformative for the finance industry's security.
         </p>
      ),
   },
   {
      name: 'Linda Wu',
      role: 'VP of IT Security at LogiChain Solutions',
      img: 'https://randomuser.me/api/portraits/women/5.jpg',
      description: (
         <p>
            #nexus.ai&apos;s supply chain security assessment tools have drastically
            improved our third-party risk management.
            <Highlight>
               Vendor security audits are now 5x faster and more thorough.
            </Highlight>
            {' '}
         </p>
      ),
   },
   {
      name: 'Carlos Gomez',
      role: 'Chief Information Security Officer at EcoTech',
      img: 'https://randomuser.me/api/portraits/men/14.jpg',
      description: (
         <p>
            By integrating #nexus.ai&apos;s continuous security testing,
            we&apos;ve seen a significant reduction in our attack surface.
            <Highlight>
               Leading the way in proactive cybersecurity practices.
            </Highlight>
            {' '}
            Pioneering change in the industry.
         </p>
      ),
   },
   {
      name: 'Aisha Khan',
      role: 'IT Security Manager at FashionForward',
      img: 'https://randomuser.me/api/portraits/women/56.jpg',
      description: (
         <p>
            #nexus.ai&apos;s threat intelligence has transformed how we approach
            emerging cyber risks.
            <Highlight>
               Our security strategy is now data-driven with higher threat prevention rates.
            </Highlight>
            {' '}
            Revolutionizing fashion industry cybersecurity.
         </p>
      ),
   },
   {
      name: 'Tom Chen',
      role: 'Director of InfoSec at HealthTech Solutions',
      img: 'https://randomuser.me/api/portraits/men/18.jpg',
      description: (
         <p>
            Implementing #nexus.ai in our healthcare systems has improved
            patient data protection significantly.
            <Highlight>
               AI and healthcare security working hand in hand for better patient trust.
            </Highlight>
            {' '}
            A milestone in medical data security.
         </p>
      ),
   },
   {
      name: 'Sofia Patel',
      role: 'CEO at EduSafe Innovations',
      img: 'https://randomuser.me/api/portraits/women/73.jpg',
      description: (
         <p>
            #nexus.ai&apos;s AI-driven security assessments have doubled
            our ability to protect sensitive student data.
            <Highlight>
               Cybersecurity tailored to educational institutions&apos; unique needs.
            </Highlight>
            {' '}
            Transforming the educational security landscape.
         </p>
      ),
   },
   {
      name: 'Jake Morrison',
      role: 'CTO at SecureNet Tech',
      img: 'https://randomuser.me/api/portraits/men/25.jpg',
      description: (
         <p>
            With #nexus.ai&apos;s AI-powered penetration testing, our clients&apos;
            data protection levels are unmatched.
            <Highlight>Ensuring safety and trust in digital spaces.</Highlight>
            {' '}
            Redefining cybersecurity standards for our industry.
         </p>
      ),
   },
   {
      name: 'Nadia Ali',
      role: 'Security Operations Manager at Creative Solutions',
      img: 'https://randomuser.me/api/portraits/women/78.jpg',
      description: (
         <p>
            #nexus.ai&apos;s AI has streamlined our incident response process, enhancing
            our security posture and operational efficiency.
            <Highlight>Bringing AI and human expertise together in cybersecurity.</Highlight>
            {' '}
            A game-changer for managing security operations.
         </p>
      ),
   },
   {
      name: 'Omar Farooq',
      role: 'Founder at SecureStartup Hub',
      img: 'https://randomuser.me/api/portraits/men/54.jpg',
      description: (
         <p>
            #nexus.ai&apos;s insights into startup security landscapes have been invaluable
            for our members&apos; growth and investor confidence.
            <Highlight>Empowering startups with AI-driven security assessments.</Highlight>
            {' '}
            A catalyst for secure startup success.
         </p>
      ),
   },
]

export default function Testimonials() {
   return (
      <Section
         title="Testimonials"
         subtitle="What our customers are saying"
         className="max-w-8xl"
      >
         <div className="relative mt-6 max-h-screen overflow-hidden">
            <div className="gap-4 md:columns-2 xl:columns-3 2xl:columns-4">
               {Array(Math.ceil(testimonials.length / 3))
                  .fill(0)
                  .map((_, i) => (
                     <Marquee
                        vertical
                        key={i}
                        className={cn({
                           '[--duration:60s]': i === 1,
                           '[--duration:30s]': i === 2,
                           '[--duration:70s]': i === 3,
                        })}
                     >
                        {testimonials.slice(i * 3, (i + 1) * 3).map((card, idx) => (
                           <motion.div
                              key={idx}
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{
                                 delay: Math.random() * 0.8,
                                 duration: 1.2,
                              }}
                           >
                              <TestimonialCard {...card} />
                           </motion.div>
                        ))}
                     </Marquee>
                  ))}
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t from-background from-20%"></div>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 w-full bg-gradient-to-b from-background from-20%"></div>
         </div>
      </Section>
   )
}
