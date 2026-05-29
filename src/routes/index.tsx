import SkillCard from "#/components/SkillCard";
import { dummySkills } from "#/lib/dummySkills";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Terminal } from "lucide-react";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div id="home">
      <section className="hero">
        <div className="copy">
          <h1 className="text-7xl font-bold">
            The Registry for{" "}
            <span className="text-7xl font-bold text-gradient text-violet-400 block mt-1">
              Agentic Intelligence
            </span>
          </h1>
          <p className="text-center mt-8 w-2xl mx-auto text-neutral-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque esse
            ipsum numquam nobis dolorum, aliquam libero, quod nisi harum debitis
            iure? Excepturi dolore quaerat architecto ipsum impedit fugiat ipsa
            neque?
          </p>
        </div>
        <div className="my-10 mx-auto flex gap-4 justify-center">
          <Link to="/skills" className="btn-primary">
            <Terminal size={18} />
            <span>Browse Registry</span>
          </Link>
          <Link to="/skills/new" className="btn-secondary">
            Publish skills
          </Link>
        </div>
      </section>

      <section className="latest mx-8">
        <div className="space-y-2 ">
          <h2 className="text-2xl">
            Recently Created{" "}
            <span className="text-gradient text-2xl font-bold text-violet-400 ">
              Skills
            </span>
          </h2>
          <p className="text-zinc-600">
            Latest skills loaded from database in descending creation order
          </p>
        </div>

        <div className="mt-8">
          {dummySkills.length > 0 ? (
            <div className="skill-grid">
              {dummySkills.map((skill) => (
                <div key={skill.id}>
                  <SkillCard key={skill.id} {...skill} />
                </div>
              ))}
            </div>
          ) : (
            <p>No skills found.</p>
          )}
        </div>
      </section>
    </div>
  );
}
