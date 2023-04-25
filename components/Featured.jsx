import Image from "next/image"
import styles from "../styles/Featured.module.css"

const Featured = () => {
    return (
        <div className={styles.container}>
            <div className={styles.arrowContainer} style={{left:0}}>
                <Image src="/img/leftarrow.png" alt=" " height="400" width="400" />
            </div>
            <div>test</div>
            <div></div>
            <div className={styles.arrowContainer}style={{right:0}}>
                <Image src="/img/rightarrow.png" alt=" " height="400" width="400" />
            </div>

        </div>

    )
}

export default Featured