import houseSVG from '../assets/undraw_house.svg';
import dropSVG from '../assets/undraw_drop_in.svg';
import { useState } from 'react';
import { Tooltip } from 'react-tooltip';

function Services() {

    const [displaySitting, setDisplaySitting] = useState(false);
    const sitting = displaySitting ? "grid" : "none";

    const [rotateSittingChevron, setRotateSittingChevron] = useState(false);
    const handleSitting = () => {
        setRotateSittingChevron(!rotateSittingChevron);
        setDisplaySitting(!displaySitting);
    };
    const rotateSitting = rotateSittingChevron ? "rotate(180deg)" : "rotate(0)";

    const [displayDropPricing, setDisplayDropPricing] = useState(false);
    const pricing = displayDropPricing ? "grid" : "none";

    const [rotateDropChevron, setRotateDropChevron] = useState(false);
    const handleDrop = () => {
        setRotateDropChevron(!rotateDropChevron);
        setDisplayDropPricing(!displayDropPricing);
    };
    const rotateDrop = rotateDropChevron ? "rotate(180deg)" : "rotate(0)";

    return (
        <div className="services">
            <h1>Services</h1>
            <ul>
                <li>
                    <img src={houseSVG} alt="house" />
                    <h2>House Sitting</h2>
                    <p>Experience worry-free getaways knowing your home is in the hands of our dedicated house-sitting team. We go beyond pet care – we create a haven for your furry friends right in the heart of their familiar surroundings. Our devoted sitters don't just watch over your home; they infuse it with love and laughter, ensuring your pets feel cherished and cared for. Embrace tranquility on your travels, knowing that your home and pets are not just looked after but cherished in your absence. Because a house is more than a structure; it's a sanctuary, and we're here to keep the joy alive.</p>
                    <a className='pricing-link' onClick={handleSitting}>See pricing<span className="material-symbols-outlined" style={{ transform: rotateSitting, transition: "all 0.2s linear" }}>expand_more</span></a>

                    <div className='pricing-grid' style={{ width: "100%", display: sitting, gridTemplateColumns: "repeat(2, 50%)" }}>
                        <strong>House sitting</strong><span><strong style={{fontSize: "18px"}}>$45</strong> per night</span>

                        <strong>Holiday pricing</strong><span><strong style={{fontSize: "18px"}}>$40</strong> per night</span>

                        <strong>Additional dog rate</strong><span><strong style={{fontSize: "18px"}}>+ $5</strong> per dog per night</span>

                        <strong>Puppy rate</strong><span><strong style={{fontSize: "18px"}}>$40</strong> per night</span>

                        <strong>Cat care</strong><span><strong style={{fontSize: "18px"}}>$30</strong> per night</span>

                        <strong>Additional cat</strong><span><strong style={{fontSize: "18px"}}>+ $5</strong> per night</span>

                        <strong>Extended care</strong><span><strong style={{fontSize: "18px"}}>50-100%</strong> of night</span>
                    </div>
                </li>
                <li>
                    <img src={dropSVG} alt="drop in to check on dog" />
                    <h2>Drop-In Visits</h2>
                    <p>Experience a burst of joy delivered right to your doorstep with our Drop-In service! Whether it's a midday check-in or an evening visit, our dedicated team ensures your pets feel the love and attention they deserve. We go beyond the basics, creating a mini oasis of happiness in your home. From playtime to cuddles, our Drop-Ins are a perfect solution to keep your pets content and cared for, even when you can't be there.</p>
                    <a className='pricing-link' onClick={handleDrop}>See pricing<span className="material-symbols-outlined" style={{ transform: rotateDrop, transition: "all 0.2s linear" }}>expand_more</span></a>

                    <div className='pricing-grid' style={{ width: "100%", display: pricing, gridTemplateColumns: "repeat(2, 50%)" }}>
                        <strong>Drop-in visits</strong><span><strong style={{fontSize: "18px"}}>$15</strong> per visit</span>

                        <strong>60 minute rate</strong><span><strong style={{fontSize: "18px"}}>+ $10</strong> per visit</span>

                        <strong>Holiday rate</strong><span><strong style={{fontSize: "18px"}}>$25</strong> per visit</span>

                        <strong>Additonal dog rate</strong><span><strong style={{fontSize: "18px"}}>$15</strong> per dog per visit</span>

                        <strong>Puppy care</strong><span><strong style={{fontSize: "18px"}}>$15</strong> per visit</span>

                        <strong>Cat care</strong><span><strong style={{fontSize: "18px"}}>$15</strong> per visit</span>

                        <strong>Additional cat</strong><span><strong style={{fontSize: "18px"}}>+ $5</strong> per cat per visit</span>
                    </div>
                </li>
            </ul>
            <a className='booking-link'><h2>Book with us now!</h2></a>
        </div>
    );
}

export default Services