import { notFound } from "next/navigation";

import DocsTopicPage from "@/components/docs/DocsTopicPage";
import { DOCS_TOPICS, getDocsTopic } from "@/components/docs/docsData";

export function generateStaticParams() {
  return DOCS_TOPICS.map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const topic = getDocsTopic(slug);

  if (!topic) {
    return {
      title: "Documentation | Securelyze",
      description:
        "Explore product guides for the Securelyze external attack surface management platform.",
    };
  }

  return {
    title: `${topic.title} | Securelyze Docs`,
    description: topic.description,
  };
}

export default async function DocsTopicRoute({ params }) {
  const { slug } = await params;
  const topic = getDocsTopic(slug);

  if (!topic) {
    notFound();
  }

  return <DocsTopicPage topic={topic} />;
}
