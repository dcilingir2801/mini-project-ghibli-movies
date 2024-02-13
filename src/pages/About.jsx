import { Link } from "react-router-dom";

function About() {
    return (
        <div>
            <img src="/src/assets/About Banner.png" />
                    <div className="about-page">
            <h1>About Studio Ghibli</h1>
            <div className="about-description">
                <p>Studio Ghibli is a renowned Japanese animation film studio known for its enchanting storytelling, stunning visuals, and emotionally resonant themes. Founded in 1985 by directors Hayao Miyazaki and Isao Takahata, along with producer Toshio Suzuki, Studio Ghibli has become synonymous with artistic excellence in the world of animation.</p><br/><br/>
                <p>The studio's name, "Ghibli," is derived from the Italian word for the hot desert wind, reflecting the founders' desire to blow fresh, new ideas into the animation industry. From its inception, Studio Ghibli set out to create animated films that transcend age barriers and cultural boundaries, appealing to audiences worldwide.</p><br/><br/>
                <p>Central to Studio Ghibli's success is its commitment to hand-drawn animation, often combined with intricate details and vibrant colors, setting it apart from the more prevalent computer-generated animation of recent years. This dedication to traditional techniques has resulted in visually stunning and timeless classics that continue to captivate audiences.</p><br/><br/>
                <p>Studio Ghibli's films are known for their richly imaginative worlds, complex characters, and profound storytelling. Themes of nature, the environment, coming-of-age, and the human condition are recurrent motifs in their works. Whether exploring the wonders of childhood imagination in "My Neighbor Totoro," the epic adventure of "Princess Mononoke," or the whimsical journey of "Spirited Away," Studio Ghibli films often delve into profound philosophical and moral questions while maintaining a sense of wonder and magic.</p><br/><br/>
                <p>With a legacy spanning over three decades, Studio Ghibli has amassed a global following and garnered numerous awards, including several Academy Awards and Golden Globes. Their films continue to inspire generations of filmmakers and enchant audiences with their timeless charm and universal appeal.</p>
            </div>
            <Link to="/">
            <button type="button" className="back-button">Back</button>
            </Link>
        </div>
        </div>
    )
}

export default About;