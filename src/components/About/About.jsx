import Work from "../Work/Work";

function About() {
  return (
    <div className="mx-auto w-full max-w-7xl lg:px-8 ">
      <div className="relative px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl lg:max-w-5xl">
          <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col gap-8 ">
              <h1 className="text-5xl font-bold text-black mb-4 text-start dark:text-white">
                About me
              </h1>
              <p className="text-zinc-600 dark:text-white">
                Welcome to my page! — Just a little introduction about myself,
                I'm a curious, self-driven learner with a growing passion for
                tech and creative problem solving.
              </p>

              <p className="text-zinc-600 dark:text-white">
                My journey hasn’t followed the traditional path, but it’s one
                I’m proud of. With a background in aerospace engineering and
                project management, I’ve transitioned into software engineering
                because I love building things that make life a little smoother,
                smarter, or more meaningful.
              </p>

              <p className="text-zinc-600 dark:text-white">
                Right now, I’m focused on growing my skills in Python, and I
                enjoy diving deep into frontend development and thoughtful
                UI/UX. Beyond the code, I value independence, empathy, and
                growth — both personally and professionally. I’m here to keep
                learning, stay adaptable, and create work that I can be proud
                of!
              </p>
            </div>
            <div className="space-y-10 lg:pl-16 xl:pl-24">
              <Work />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
