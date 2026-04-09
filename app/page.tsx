import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-xl font-semibold tracking-tighter">About Me</h1>
      <p className="mb-4 text-sm text-justify">
        {`I’m a software engineer and CEO of Onrail. I’m originally from Lagos, Nigeria. I’m a founder and entrepreneur focused on building impactful products, making disciplined decisions, relying on strong typing for early clarity, emphasizing scalable systems and continuous delivery, and optimizing workflows with efficient, results-driven engineering practices.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
