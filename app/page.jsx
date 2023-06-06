import Feed from "@components/Feed"

const Home = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">Discover and share AI
                <br className="max-md:hidden" />
                <span className="orange_gradient text-center">AI-Powered Prompt</span>
            </h1>
            <p className="desc text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias asperiores et alias. Optio illum, commodi aliquid delectus odio eum, quis quam explicabo sit dignissimos aliquam officia necessitatibus quaerat quas repudiandae!</p>

            <Feed />
        </section>
    )
}

export default Home