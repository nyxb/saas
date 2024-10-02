'use client'

import FlickeringGrid from 'components/ui/flickering-grid'
import Ripple from 'components/ui/ripple'
import Safari from 'components/safari'
import Section from 'components/section'
import { cn } from 'lib/utils'
import { motion } from 'framer-motion'

const features = [
   {
      title: 'Advanced AI Algorithms',
      description:
      'Our platform utilizes cutting-edge AI algorithms to provide accurate and efficient solutions for your business needs.',
      className: 'hover:bg-red-500/10 transition-all duration-500 ease-out',
      content: (
         <>
            <Safari
               src="/dashboard.png"
               url="https://cybershield.ai"
               className="-mb-32 mt-4 max-h-64 w-full select-none px-4 drop-shadow-[0_0_28px_rgba(0,0,0,.1)] transition-all duration-300 group-hover:translate-y-[-10px]"
            />
         </>
      ),
   },
   {
      title: 'Secure Data Handling',
      description:
      'We prioritize your data security with state-of-the-art encryption and strict privacy protocols, ensuring your information remains confidential.',
      className:
      'order-3 xl:order-none hover:bg-blue-500/10 transition-all duration-500 ease-out',
      content: (
         <Safari
            src="/dashboard.png"
            url="https://cybershield.ai"
            className="-mb-32 mt-4 max-h-64 w-full select-none px-4 drop-shadow-[0_0_28px_rgba(0,0,0,.1)] transition-all duration-300 group-hover:translate-y-[-10px]"
         />
      ),
   },
   {
      title: 'Seamless Integration',
      description:
      'Easily integrate our AI solutions into your existing workflows and systems for a smooth and efficient operation.',
      className:
      'md:row-span-2 hover:bg-orange-500/10 transition-all duration-500 ease-out',
      content: (
         <>
            <FlickeringGrid
               className="absolute inset-0 z-0 [mask:radial-gradient(circle_at_center,#fff_400px,transparent_0)]"
               squareSize={4}
               gridGap={6}
               color="#000"
               maxOpacity={0.1}
               flickerChance={0.1}
               height={800}
               width={800}
            />
            <Safari
               src="/dashboard.png"
               url="https://cybershield.ai"
               className="-mb-48 ml-12 mt-16 h-full select-none px-4 drop-shadow-[0_0_28px_rgba(0,0,0,.1)] transition-all duration-300 group-hover:translate-x-[-10px]"
            />
         </>
      ),
   },
   {
      title: 'Customizable Solutions',
      description:
      'Tailor our AI services to your specific needs with flexible customization options, allowing you to get the most out of our platform.',
      className:
      'flex-row order-4 md:col-span-2 md:flex-row xl:order-none hover:bg-green-500/10 transition-all duration-500 ease-out',
      content: (
         <>
            <Ripple className="absolute -bottom-full" />
            <Safari
               src="/dashboard.png"
               url="https://cybershield.ai"
               className="-mb-32 mt-4 max-h-64 w-full select-none px-4 drop-shadow-[0_0_28px_rgba(0,0,0,.1)] transition-all duration-300 group-hover:translate-y-[-10px]"
            />
         </>
      ),
   },
]

export default function Component() {
   return (
      <Section
         title="Solution"
         subtitle="Empower Your Business with AI Workflows"
         description="Generic AI tools won't suffice. Our platform is purpose-built to provide exceptional AI-driven solutions for your unique business needs."
         className="bg-neutral-100 dark:bg-neutral-900"
      >
         <div className="mx-auto mt-16 grid max-w-sm grid-cols-1 gap-6 text-gray-500 md:max-w-3xl md:grid-cols-2 md:grid-rows-3 xl:max-w-6xl xl:auto-rows-fr xl:grid-cols-3 xl:grid-rows-2">
            {features.map((feature, index) => (
               <motion.div
                  key={index}
                  className={cn(
                     'group relative items-start overflow-hidden rounded-2xl bg-neutral-50 p-6 dark:bg-neutral-800',
                     feature.className,
                  )}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                     duration: 0.5,
                     type: 'spring',
                     stiffness: 100,
                     damping: 30,
                     delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
               >
                  <div>
                     <h3 className="mb-2 font-semibold text-primary">
                        {feature.title}
                     </h3>
                     <p className="text-foreground">{feature.description}</p>
                  </div>
                  {feature.content}
                  <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-neutral-50 dark:from-neutral-900"></div>
               </motion.div>
            ))}
         </div>
      </Section>
   )
}
