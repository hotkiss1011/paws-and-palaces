import houseSVG from '../assets/undraw_house.svg';
import walkSVG from '../assets/undraw_dog_walk.svg';
import dropSVG from '../assets/undraw_drop_in.svg';

function Services() {
    return (
        <div className="services">
            <h1>Services</h1>
            <ul>
                <li>
                    <img src={houseSVG} alt="house" />
                    <h2>House Sitting</h2>
                    <p>Experience worry-free getaways knowing your home is in the hands of our dedicated house-sitting team. We go beyond pet care – we create a haven for your furry friends right in the heart of their familiar surroundings. Our devoted sitters don't just watch over your home; they infuse it with love and laughter, ensuring your pets feel cherished and cared for. Embrace tranquility on your travels, knowing that your home and pets are not just looked after but cherished in your absence. Because a house is more than a structure; it's a sanctuary, and we're here to keep the joy alive.</p>
                </li>
                <li>
                    <img src={dropSVG} alt="drop in to check on dog" />
                    <h2>Drop-In Visits</h2>
                    <p>Experience a burst of joy delivered right to your doorstep with our Drop-In service! Whether it's a midday check-in or an evening visit, our dedicated team ensures your pets feel the love and attention they deserve. We go beyond the basics, creating a mini oasis of happiness in your home. From playtime to cuddles, our Drop-Ins are a perfect solution to keep your pets content and cared for, even when you can't be there.</p>
                </li>
                <li>
                    <img src={walkSVG} alt="person walking dog" />
                    <h2>Dog Walking</h2>
                    <p>Give your furry friend the gift of adventure with our Dog Walking service! Tailored to your pup's pace and preferences, our experienced walkers turn every stroll into a delightful journey. From neighborhood explorations to park playdates, we prioritize not just exercise, but also the joy of discovery. Watch your dog's tail wag with excitement as our walkers provide not just a walk but an enriching experience, ensuring your four-legged family member stays happy, healthy, and energized!</p>
                </li>
            </ul>
            <a className='booking-link'><h2>Book with us now!</h2></a>
        </div>
    );
}

export default Services