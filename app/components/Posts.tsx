import { getSortedPostsData } from "@/lib/posts"
import ListItem from "./ListItem"

export default function Posts() {
    const posts = getSortedPostsData()

    return (
        <section className="mt-6 mx-auto max-w-2xl px-6 prose prose-xl prose-slate dark:prose-invert ">
            <h2 className="text-4xl font-bold text-[#2c2d34]">Blog</h2>
            <ul className="w-full">
                {posts.map(post => (
                    <ListItem key={post.id} post={post} />
                ))}
            </ul>
        </section>
    )
}