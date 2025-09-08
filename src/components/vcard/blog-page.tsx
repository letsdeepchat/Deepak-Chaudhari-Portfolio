import Image from "next/image";
import Link from "next/link";

const articles = [
    {
        title: "Advanced Level Interview Key Points for MERN Full Stack Developers",
        category: "Web Development",
        date: "2023-10-22",
        imageUrl: "https://picsum.photos/400/250?random=1",
        link: "https://medium.com/@letsdeepchat/advanced-level-interview-key-points-for-mern-full-stack-developers-b8b8b8b8b8b8",
        description: "A comprehensive guide covering advanced topics for MERN stack interviews, helping developers to ace their next technical round."
    },
    {
        title: "The Power of Prototypal Inheritance in JavaScript",
        category: "JavaScript",
        date: "2023-09-15",
        imageUrl: "https://picsum.photos/400/250?random=2",
        link: "#",
        description: "An in-depth look at one of JavaScript's core concepts, explaining how it differs from classical inheritance and its practical uses."
    },
    {
        title: "Building Scalable APIs with FastAPI",
        category: "Python",
        date: "2023-08-01",
        imageUrl: "https://picsum.photos/400/250?random=3",
        link: "#",
        description: "A tutorial on creating high-performance APIs with FastAPI, covering everything from basic routing to advanced features."
    },
];


export default function BlogPage() {
    return (
        <article className="rounded-2xl bg-card p-6 shadow-md md:p-8">
            <header>
                <h2 className="text-2xl font-semibold text-foreground">Blog</h2>
                <div className="my-4 h-1 w-10 rounded-full bg-accent"></div>
            </header>

            <section>
                <ul className="grid gap-8">
                    {articles.map((article) => (
                        <li key={article.title}>
                            <Link href={article.link} target="_blank" rel="noopener noreferrer" className="group block">
                                <div className="grid gap-6 md:grid-cols-3">
                                    <figure className="overflow-hidden rounded-lg md:col-span-1">
                                        <Image
                                            src={article.imageUrl}
                                            alt={article.title}
                                            width={400}
                                            height={250}
                                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </figure>
                                    <div className="md:col-span-2">
                                        <p className="mb-2 text-sm text-muted-foreground">
                                            {article.category} <span className="mx-2">•</span> <time dateTime={article.date}>{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                                        </p>
                                        <h3 className="mb-3 text-xl font-semibold text-foreground transition-colors group-hover:text-accent">
                                            {article.title}
                                        </h3>
                                        <p className="text-muted-foreground">{article.description}</p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </article>
    )
}
