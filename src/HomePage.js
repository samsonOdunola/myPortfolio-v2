import CvBtn from "./cv_btn"
const HomePage = () => {
    return <header className="homepage">
        <div className="design"></div>
        <div className="main-content">
            <h1>Hi, i'm <span>Samson Odunola</span>.<br />
                A Web Developer</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt omnis fugiat reprehenderit earum esse praesentium amet expedita, necessitatibus, modi quia corporis atque eius non soluta,
                quis repellendus alias impedit? Molestias!</p>
            {<CvBtn />}
        </div>


    </header>

}
export default HomePage