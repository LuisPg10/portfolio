import { statsInfo } from '~/home/data/stats-info';

export const Stats = () => {
  return (
    <div className="border-border mt-10 border-t pt-16">
      <div className="grid max-w-5xl gap-6 sm:grid-cols-3">
        {statsInfo.map((stat) => (
          <div key={stat.context} className="space-y-2">
            <p className="font-mono text-3xl font-bold">{stat.important}</p>
            <p className="text-muted-foreground text-sm">{stat.context}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
