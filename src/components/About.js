import { useNavigate } from 'react-router';

import styles from "../css/About.module.css"

import BookLink from "./BookLink";

import CompanyJSON from '../json/CompanyInfo.json';

import scrollToTop from '../helpers/scrollToTop';

export default function About() {
    const navigate = useNavigate();

    return (
        <>
            <div className="container margin-bottom-3">
                <h1 className={`header`}>Meet Your Mentor: Robert Lafferty</h1>

                <div className={`${styles['about-section']}`}>
                <div style={{display: 'block', width: '100%', height: 'auto', overflow: 'auto'}}>
                <img className={`${styles["about-image"]}`} src={`${process.env.PUBLIC_URL}/images/headshot.jpg`} alt={`${CompanyJSON.name} Owner Headshot`}/>
                    
                    <p>Hi! I'm Robert Lafferty, a professional game developer with experience on major AAA titles, including <i>Call of Duty: Modern Warfare III</i> and <i>Call of Duty: Black Ops 6</i>. I've also built indie games, prototyped new tech, and worked across multiple studios, so I understand exactly what it takes to turn an idea into a real, playable game.</p>

                    <p>Now, I'm here to help <i>you</i> do the same.</p>

                    <p>Whether you're just starting out or looking to sharpen advanced skills, I offer 1-on-1 mentoring customized to your goals. I specialize in Unreal Engine 5, Unity, C++, C#, AI systems, gameplay mechanics, and the real-world workflows used across the industry.</p>
                    
                    <p>I've mentored developers on professional teams and led a university game dev club, so you'll get guidance that's not just technical, but clear, supportive, and tailored to how <i>you</i> learn.</p>
                    </div>
                    <h2>What We Can Build Together</h2>
                    <ul>
                        <li>Your first playable project</li>
                        <li>Advanced AI behavior trees</li>
                        <li>Gameplay systems & mechanics</li>
                        <li>Networking & multiplayer basics</li>
                        <li>Tools, workflow, and engine best practices</li>
                        <li>Or that dream project sitting on your hard drive</li>
                    </ul>
                    
                    <p>Game development is challenging, but you don't have to do it alone! With expert support and real production experience behind you, you'll learn faster, build smarter, and gain the confidence to bring your ideas to life.</p>

                    <h2>Ready to Start?</h2>
                    <p>Let's talk about your goals, your ideas, and how to level up your skills.</p>

                    <p><strong>Book a free chat anytime: ask questions, get advice, or jump right into building your dream game.</strong></p>

                    <p>Unreal, Unity, or even custom engine work: whatever your path looks like, I'm here to guide you every step of the way.</p>
                    
                    <button
                        className={`extra-wide center`}
                        onClick={() => {navigate(`/book`); scrollToTop()}}
                        style={{ marginTop: '2rem' }}
                    >
                        Click here to book your free consultation!
                    </button>
                </div>
            </div>
        </>
    );
}