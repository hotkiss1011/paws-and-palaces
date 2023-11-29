import houseSVG from '../assets/undraw_house.svg';
import dropSVG from '../assets/undraw_drop_in.svg';
import { useState } from 'react';

function Services() {

    const [displayPricing, setDisplayPricing] = useState(false);
    const pricing = displayPricing ? "grid" : "none";

    const [rotateChevron, setRotateChevron] = useState(false);
    const handleRotate = () => {
        setRotateChevron(!rotateChevron);
        setDisplayPricing(!displayPricing);
    };
    const rotate = rotateChevron ? "rotate(180deg)" : "rotate(0)";

    return (
        <div className="services">
            <h1>Services</h1>
            <ul>
                <li>
                    <img src={houseSVG} alt="house" />
                    <h2>House Sitting</h2>
                    <p>Experience worry-free getaways knowing your home is in the hands of our dedicated house-sitting team. We go beyond pet care – we create a haven for your furry friends right in the heart of their familiar surroundings. Our devoted sitters don't just watch over your home; they infuse it with love and laughter, ensuring your pets feel cherished and cared for. Embrace tranquility on your travels, knowing that your home and pets are not just looked after but cherished in your absence. Because a house is more than a structure; it's a sanctuary, and we're here to keep the joy alive.</p>
                    <a className='pricing-link' onClick={handleRotate}>See pricing<span className="material-symbols-outlined" style={{ transform: rotate, transition: "all 0.2s linear" }}>expand_more</span></a>

                    <div className='pricing-grid' style={{ width: "100%", display: pricing, gridTemplateColumns: "repeat(2, 50%)" }}>
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
                </li>
            </ul>
            <a className='booking-link'><h2>Book with us now!</h2></a>
        </div>
    );
}

export default Services