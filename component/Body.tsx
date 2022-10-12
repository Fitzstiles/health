import Link from "next/link";
import classes from './Body.module.css'

const Body = () => {
    return (
        <div className={classes.body__container}>
            <div className={classes.left_container}>
                {/* <img src="image/arrow.PNG" alt="" /> */}
                <p>welcome to health.clinic</p>
                <h1>Get medical attention from your comfort</h1>
                <div className={classes.parag}>
                    <p>good health is a state of mental, physical and social well being and it does not just mean the absence of disease</p>
                </div>
                <Link href='/'>Book an Appointment</Link>
            </div>
            <div className={classes.right__container}>
                <div className={classes.rightContainerImg}>
                    <img src="https://i.pinimg.com/736x/1b/52/fd/1b52fd81c2282b432b85dc6a8a01f13d.jpg" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Body;