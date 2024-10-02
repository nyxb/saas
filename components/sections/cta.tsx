import { Icons } from 'components/icons'
import Section from 'components/section'
import { buttonVariants } from 'components/ui/button'
import { cn } from 'lib/utils'
import Link from 'next/link'

export default function CtaSection() {
   return (
      <Section
         id="cta"
         title="Ready to get started?"
         subtitle="Start your free trial today."
         className="rounded-xl bg-primary/10 py-16"
      >
         <div className="flex w-full flex-col items-center justify-center space-y-4 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Link
               href="/signup"
               className={cn(
                  buttonVariants({ variant: 'default' }),
                  'flex w-full gap-2 text-background sm:w-auto',
               )}
            >
               <Icons.logo className="size-6" />
               Get started for free
            </Link>
         </div>
      </Section>
   )
}
