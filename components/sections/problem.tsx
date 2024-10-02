import { Brain, Shield, Zap } from 'lucide-react'
import BlurFade from '~/components/ui/blur-fade'
import Section from '~/components/section'
import { Card, CardContent } from '~/components/ui/card'

const problems = [
   {
      title: 'Data Overload',
      description:
      'Businesses struggle to make sense of vast amounts of complex data, missing out on valuable insights that could drive growth and innovation.',
      icon: Brain,
   },
   {
      title: 'Slow Decision-Making',
      description:
      'Traditional data processing methods are too slow, causing businesses to lag behind market changes and miss crucial opportunities.',
      icon: Zap,
   },
   {
      title: 'Data Security Concerns',
      description:
      'With increasing cyber threats, businesses worry about the safety of their sensitive information when adopting new technologies.',
      icon: Shield,
   },
]

export default function Component() {
   return (
      <Section
         title="Problem"
         subtitle="Manually entering your data is a hassle."
      >
         <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {problems.map((problem, index) => (
               <BlurFade key={index} delay={0.2 + index * 0.2} inView>
                  <Card className="border-none bg-background shadow-none">
                     <CardContent className="space-y-4 p-6">
                        <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                           <problem.icon className="size-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">{problem.title}</h3>
                        <p className="text-muted-foreground">{problem.description}</p>
                     </CardContent>
                  </Card>
               </BlurFade>
            ))}
         </div>
      </Section>
   )
}
