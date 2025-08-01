import styles from "../css/About.module.css"

import BookLink from "./BookLink";

import CompanyJSON from '../json/CompanyInfo.json';

export default function About() {
    return (
        <>
            <div className="container">
                <h1 className={`header`}>About {CompanyJSON.name}</h1>

                <div className={`${styles['about-section']}`}>
                    <img className={`${styles["about-image"]}`} src={`${process.env.PUBLIC_URL}/images/headshot.jpg`} alt={`${CompanyJSON.name} Owner Headshot`}/>
                    <p>Hey there! I'm Robert Lafferty, and I've been building games for a while now, including big titles like <em>Call of Duty: Modern Warfare III</em> and <em>Call of Duty: Black Ops 6</em>. If you're looking to get into game development or just want to sharpen your skills, I can help. I've worked on everything from indie games to massive franchises, so I know the ins and outs of getting a game made and shipped. Whether it's AI programming in Unreal Engine 5 or gameplay systems in Unity, I've done it, and now I want to help you do it too.</p>

                    <p>I offer one-on-one tutoring for all skill levels. I'm really comfortable with C++, C#, and game engine tech, and I'll meet you wherever you are in your journey. We can cover the basics or dive deep into more advanced stuff like AI behavior trees, networking, or gameplay mechanics. I've mentored folks on development teams and even led a university game dev club, so I'm excited to bring that same kind of tailored and flexible mentorship to you, helping you gain confidence and unleash your creativity.</p>

                    <p>Game development can be tough, but you don't have to tackle it alone. Let's build your dream game together. Reach out today for a free chat, ask me anything, or let's just jump into that project you've been dreaming about (or that's been sitting on your hard drive). Whether it's Unreal, Unity, or even a custom engine project, I'm here to help you level up with some real-world developer know-how.</p>

                    <div className={styles["about-connect"]}>
                        <BookLink
                            link={"https://linkedin.com/in/rclafferty"}
                            title="Click here to connect with me on LinkedIn"
                            classInfo={`hover-lift ${styles["about-connect-button"]}`}
                            displayTextLine1={
                                <>
                                    Connect on LinkedIn{" "}
                                    <i className="fab fa-linkedin" aria-hidden="true"></i>
                                </>
                            }
                            displayTextLine2={"https://www.linkedin.com/in/rclafferty"}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}