import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import { CalendarDays } from "lucide-react";

const events = [
  {
    title: "Neetara Pop-Up Store – Kochi",
    date: "March 22–23, 2026",
    description: "Visit us at Lulu Mall, Kochi for an exclusive preview of our new Summer collection. Special launch-day discounts available!",
  },
  {
    title: "Saree Draping Workshop",
    date: "April 5, 2026",
    description: "Join our free online workshop and learn 5 elegant draping styles. Open to all — register via WhatsApp.",
  },
];

const Events = () => {
  useEffect(() => {
    document.title = "Neetara - Events | Wear Your Story | Boutique";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
            Upcoming Events
          </h1>
          <p className="text-muted-foreground text-center mb-10">
            Stay tuned for what's happening at Neetara
          </p>

          {events.length === 0 ? (
            <p className="text-center text-muted-foreground py-16">
              No upcoming events right now. Check back soon!
            </p>
          ) : (
            <div className="space-y-6">
              {events.map((event, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-border bg-card p-6 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-secondary shrink-0 mt-1">
                      <CalendarDays className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-foreground">
                        {event.title}
                      </h2>
                      <p className="text-sm text-primary font-medium mb-2">
                        {event.date}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Events;
