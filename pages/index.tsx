import Head from "next/head";

export default function Index() {
    return (
        <>
        <Head>
            <title>Rina Takikawa</title>
            <meta name="description" content= "Welcome to the club"/>
        </Head>
        <div id="container">
            <div id="top-section">
                 <img src="/desktoplogo.png" id="logo-pic"/>
                 <h1> Hi, I'm Rina! <br/> Welcome to the club.</h1>
                 <p>Currently <a href="https://www.amoochlife.com/"> at Mooch </a> A budgeting app powered by Blockchain  </p>
            </div>
            
        </div>
           
    
            <img src="/teampic.jpg" id="team-pic"/>
            <img src="/profile.jpg" id="profile-pic"/>
            <img src="/coworking.jpg" id="cowork-pic"/>
            <img src="/florida.jpg" id="florida-pic"/>
            <img src="/ballet.jpg" id="ballet-pic"/>
        </>
    );
}
