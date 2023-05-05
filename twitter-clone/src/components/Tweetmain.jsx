import Header from "./header";
import Body from "./Body";
import Footer from "./Footer";

const Tweetmain = ({ name, username, tweet }) => {
    return (
        <div className="tweet">
            <img
                className="profile-pic"
                src="https://placekitten.com/50/50"
                alt="Profile Picture"
            />
            <div className="tweet-content">
                <Header name={name} username={username} />
                <Body tweet={tweet} />
                    <Footer />
            </div>
        </div>


    );
};





export default Tweetmain;