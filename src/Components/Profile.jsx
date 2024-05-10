import styles from "./profile.module.css"
const Profile = () => {
    return ( 
        <div id={styles.main}>
            <div >
                <img id={styles.a} src={require("./profile.jpg") }alt ="image not found"/>
            </div>
 <h1 id={styles.name}>Rocky Reddy</h1>
 <h1 id={styles.name}>Description:</h1>
 <button id={styles.butt}>Add Friend</button>
 <button id={styles.butt}>Message</button>


        </div>
     );
}
 
export default Profile;




