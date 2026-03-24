import { approach } from '~/home/data/approach';
import { Card, CardContent, CardHeader } from '~/shared/components/ui/card';

export const ApproachSection = () => {
  return (
    <section id="approach" className="py-24">
      <Card className="px-5 py-10">
        <CardHeader className="text-2xl font-bold">
          <h2>Mi enfoque</h2>
        </CardHeader>
        <CardContent className="grid gap-8 md:grid-cols-2">
          {approach.map((item, index) => {
            const code = (index + 1).toString().padStart(2, '0');

            return (
              <div key={item.title} className="space-y-3">
                <div className="flex items-center gap-2">
                  <code className="bg-muted rounded px-2 py-1 font-mono text-sm">
                    {code}
                  </code>
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </section>
  );
};
