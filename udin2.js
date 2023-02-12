  @import url(&#39;https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&quot;display=swap&#39;);

*
{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* LOADING */
.ring{
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 150px;
	height: 150px;
	background: transparent;
	border: 3px solid #3c3c3c;
	border-radius: 50%;
	text-align: center;
	line-height: 150px;
	font-family: sans-serif;
	font-size: 20px;
	color: rgb(19, 241, 56);
	letter-spacing: 5px;
	text-transform: uppercase;
	text-shadow: 0 0 10px rgb(19, 241, 56);
	box-shadow: 0 0 20px rgba(0,0,0,0.5);
}

.ring:before{
	content: &#39;&#39;;
	position: absolute;
	top: -3px;
	left: -3px;
	width: 100%;
	height: 100%;
	border: 3px solid transparent;
	border-top: 3px solid rgb(19, 241, 56);
	border-right: 3px solid rgb(19, 241, 56);
	border-radius: 50%;
	animation: animateCircle 2s linear infinite;
}

.span_ring{
	display: block;
	position: absolute;
	top: calc(50% - 2px);
	left: 50%;
	width: 50%;
	height: 4px;
	background-color: transparent;
	transform-origin: left;
	animation: animateRing 2s linear infinite;
}

.span_ring:before{
	content: &#39;&#39;;
	position: absolute;
	width: 16px;
	height: 16px;
	border-radius: 50%;
	background-color: rgb(19, 241, 56);
	top: -6px;
	right: -8px;
	box-shadow: 0 0 20px rgb(19, 241, 56);
}

@keyframes animateCircle{
	0%{
		transform: rotate(0deg);
	}100%{
		transform: rotate(360deg);
	}
}

@keyframes animateRing{
	0%{
		transform: rotate(45deg);
	}100%{
		transform: rotate(405deg);
	}
}

/* menu */
:root
{
    /* --bg: #183449; */

}
.body_menu
{
    /* display: flex; */
    justify-content: center;
    align-items: center;
    /* min-height: 60vh;  */
    /* background: var(--bg);  */
}
.ul_menu
{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding : 0;
    /* gap: 40px; */
}
.dark .ul_menu .li_menu
{
    position: relative;
    list-style: none;
    width: 110px;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.5s;
    border-radius: 10%;
    z-index: 100;
    background-color: rgba(17, 71, 102, 0.7);
}
.sunrise .ul_menu .li_menu
{
    position: relative;
    list-style: none;
    width: 110px;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.5s;
    border-radius: 10%;
    z-index: 100;
    background-color: rgba(252, 255, 103, 0.7);
}
.siang .ul_menu .li_menu
{
    position: relative;
    list-style: none;
    width: 110px;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.5s;
    border-radius: 10%;
    z-index: 100;
    background-color: rgba(132, 188, 226, 0.7);
}
.sunset .ul_menu .li_menu
{
    position: relative;
    list-style: none;
    width: 110px;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.5s;
    border-radius: 10%;
    z-index: 100;
    background-color: rgba(245, 174, 112, 0.993);
}
.dark .ul_menu .li_menu:hover
{
    z-index: 600;
    transform: scale(1.05);
    border: 2.5px solid #94d9f5;
    /* filter: drop-shadow(0 0 30px var(--clr)); */
}
.sunrise .ul_menu .li_menu:hover
{
    z-index: 600;
    transform: scale(1.05);
    border: 2.5px solid #3d4fee;
    /* filter: drop-shadow(0 0 30px var(--clr)); */
}
.siang .ul_menu .li_menu:hover
{
    z-index: 600;
    transform: scale(1.05);
    border: 2.5px solid #03131a;
    /* filter: drop-shadow(0 0 30px var(--clr)); */
}
.sunset .ul_menu .li_menu:hover
{
    z-index: 600;
    transform: scale(1.05);
    border: 2.5px solid #0a638a;
    /* filter: drop-shadow(0 0 30px var(--clr)); */
}
.ul_menu .li_menu::before
{
    content: &#39;&#39;;
    position: absolute;
    inset: 20px;
    border-radius: 30%;
    /* box-shadow: 0 0 0 20px var(--clr), 0 0 0 30px var(--bg), 0 0 0 32px #a6d8ff; */
    transition: 0.5s;
}
.ul_menu .li_menu:hover:before
{
   inset: 0px;
   /* border-radius: 50%; */
}
.ul_menu .li_menu::after
{
    content: &#39;&#39;;
    position: absolute;
    inset: 0;
    background: var(--bg);
    /* transform: rotate(45deg); */
}
.dark .ul_menu .li_menu .a_menu
{
    position: relative;
    text-decoration: none;
    color: var(--clr);
    z-index: 10;
    font-size: 2em;
    transition: 0.5s;
}
.sunrise .ul_menu .li_menu .a_menu
{
    position: relative;
    text-decoration: none;
    color: var(--clr3);
    z-index: 10;
    font-size: 2em;
    transition: 0.5s;
}
.siang .ul_menu .li_menu .a_menu
{
    position: relative;
    text-decoration: none;
    color: var(--clr2);
    z-index: 10;
    font-size: 2em;
    transition: 0.5s;
}
.sunset .ul_menu .li_menu .a_menu
{
    position: relative;
    text-decoration: none;
    color: var(--clr4);
    z-index: 10;
    font-size: 2em;
    transition: 0.5s;
}
.ul_menu .li_menu:hover .a_menu
{
    font-size: 2.1em;
    /* filter: drop-shadow(0 0 20px var(--clr)) drop-shadow(0 0 30px var(--clr)) drop-shadow(0 0 30px var(--clr)); */
}

/* animasi */
.scene
{
    position: relative;
    height: 100vh;
    overflow-x: hidden;
    background: linear-gradient(#8ed3ee,#fff,#fff);
}
.dark .scene
{
    background: #222833;
}
.sunrise .scene
{
    background: linear-gradient(#aad3d6,rgb(226, 177, 72),rgb(153, 94, 4));
}
.siang .scene
{
    background: linear-gradient(#8ed3ee,#fff,#fff);
}
.sunset .scene
{
    background: linear-gradient(rgb(250, 122, 48),rgb(248, 176, 21),rgb(148, 231, 252));
}
.sun
{
    position: fixed;
    top: 20px;
    left: 85%;
    transform: translateX(-50%);
    width: 80px;
    height: 80px;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 0 50px #fff;
    /* cursor: pointer; */
    transition: 0.2s;
}
.dark .sun
{
    left: 88%;
    box-shadow: 0 0 0 #fff;
}
.sunrise .sun
{
    position: fixed;
    top: 20px;
    left: 85%;
    transform: translateX(-50%);
    width: 80px;
    height: 80px;
    background: #f3f197;
    border-radius: 50%;
    box-shadow: 0 0 50px rgb(178, 246, 248);
    /* cursor: pointer; */
    transition: 0.2s;
}
.siang .sun
{
    position: fixed;
    top: 20px;
    left: 85%;
    transform: translateX(-50%);
    width: 80px;
    height: 80px;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 0 50px #fff;
    /* cursor: pointer; */
    transition: 0.2s;
}
.sunset .sun
{
    position: fixed;
    top: 20px;
    left: 85%;
    transform: translateX(-50%);
    width: 80px;
    height: 80px;
    background: rgb(240, 218, 22);
    border-radius: 50%;
    box-shadow: 0 0 50px rgb(218, 87, 87);
    /* cursor: pointer; */
    transition: 0.2s;
}
.dark .sun::before
{
    content: &#39;&#39;;
    position: fixed;
    top: -10px;
    left: 20px;
    width: 100%;
    height: 100%;
    background: #222833;
    border-radius: 50%;
    
}
/* .sunrise .sun::before
{
    content: &#39;&#39;;
    position: fixed;
    top: -10px;
    left: 20px;
    width: 100%;
    height: 100%;
    background: rgb(245, 128, 50);
    border-radius: 50%;
    
}
.siang .sun::before
{
    content: &#39;&#39;;
    position: fixed;
    top: -10px;
    left: 20px;
    width: 100%;
    height: 100%;
    background: #8ed3ee;
    border-radius: 50%;
    
}
.sunset .sun::before
{
    content: &#39;&#39;;
    position: fixed;
    top: -10px;
    left: 20px;
    width: 100%;
    height: 100%;
    background:  rgb(218, 87, 87);
    border-radius: 50%;
    
} */

.bg
{

    position: fixed;
    z-index: 50;
    bottom: 0;
    width: 100%;
    height: 480px;
    background: url(https://lh3.googleusercontent.com/-n7re0awGivk/Y9qElVkVHcI/AAAAAAAAAFw/PpFwlex17ro2_Mx5JDm-CDCwsCfYs6hoQCNcBGAsYHQ/s3600/kopper2.png);
    animation: animateBg 200s linear infinite;
    background-size: 3100px;
    background-repeat: repeat-x;
}
.dark .bg
{

    position: fixed;
    z-index: 50;
    bottom: 0;
    width: 100%;
    height: 480px;
    background: url(https://banjarbarukota.go.id/css/images/header2019.png);
    animation: animateBg 200s linear infinite;
    background-size: 3100px;
    background-repeat: repeat-x;
}
@keyframes animateBg
{
    0%
    {
        background-position-x: 0px;
    }
    100%
    {
        background-position-x: -3100px;
    }
}
.car1
{
    /* position: fixed;
    left: -200px;
    bottom: 15px;
    max-width: 85px;
    z-index: 40;
    animation: car1 18s linear infinite; */

    position: fixed;
    left: -200px;
    z-index: 40;
    bottom: 15px;
    width: 120px;
    height: 33px;
    background: url(https://kulonprogokab.go.id/v3/image/Car1.png);
    animation: car1 18s linear infinite;
    background-size: cover;
    background-repeat: repeat-x;
}
.dark .car1
{
    /* position: fixed;
    left: -200px;
    bottom: 15px;
    max-width: 85px;
    z-index: 40;
    animation: car1 18s linear infinite; */

    position: fixed;
    left: -200px;
    z-index: 10;
    bottom: 15px;
    width: 120px;
    height: 33px;
    background: url(https://kulonprogokab.go.id/v3/image/Car1_nyala.png);
    animation: car1 18s linear infinite;
    background-size: cover;
    background-repeat: repeat-x;
}
@keyframes car1
{
    0%
    {
        transform: translateX(0px);
    }
    90%,100%
    {
        transform: translateX(calc(100vw + 200px));
    }
}
.car2
{
    /* position: fixed;
    right: -200px;
    bottom: 42px;
    max-width: 65px;
    z-index: 10;
    animation: car2 10s linear infinite; */

    position: fixed;
    right: -200px;
    z-index: 10;
    bottom: 42px;
    width: 97px;
    height: 33px;
    background: url(https://kulonprogokab.go.id/v3/image/Car2.png);
    animation: car2 10s linear infinite;
    background-size: cover;
    background-repeat: repeat-x;
}
.dark .car2
{
    /* position: fixed;
    right: -200px;
    bottom: 42px;
    max-width: 65px;
    z-index: 10;
    animation: car2 10s linear infinite; */

    position: fixed;
    right: -200px;
    z-index: 10;
    bottom: 42px;
    width: 97px;
    height: 33px;
    background: url(https://kulonprogokab.go.id/v3/image/Car2_nyala.png);
    animation: car2 10s linear infinite;
    background-size: cover;
    background-repeat: repeat-x;
}
@keyframes car2
{
    0%
    {
        /* transform: translateX(0px) rotateY(180deg); */
        transform: translateX(0px);
    }
    90%,100%
    {
        /* transform: translateX(calc(-100vw - 200px)) rotateY(180deg); */
        transform: translateX(calc(-100vw - 200px));
    }
}
.car3
{
    /* position: fixed;
    left: -300px;
    bottom: 15px;
    max-width: 85px;
    z-index: 41;
    animation: car3 12s linear infinite; */

    position: fixed;
    left: -300px;
    z-index: 41;
    bottom: 15px;
    width: 120px;
    height: 33px;
    background: url(.https://kulonprogokab.go.id/v3/image/Car4.png);
    animation: car3 12s linear infinite;
    background-size: cover;
    background-repeat: repeat-x;
}
.dark .car3
{
    /* position: fixed;
    left: -300px;
    bottom: 15px;
    max-width: 85px;
    z-index: 41;
    animation: car3 12s linear infinite; */

    position: fixed;
    left: -300px;
    z-index: 41;
    bottom: 15px;
    width: 120px;
    height: 33px;
    background: url(https://kulonprogokab.go.id/v3/image/Car4_nyala.png);
    animation: car3 12s linear infinite;
    background-size: cover;
    background-repeat: repeat-x;
}
@keyframes car3
{
    0%
    {
        transform: translateX(0px);
    }
    90%,100%
    {
        transform: translateX(calc(100vw + 300px));
    }
}
.car4
{
    /* position: fixed;
    right: -400px;
    bottom: 42px;
    max-width: 85px;
    z-index: 20;
    animation: car4 12s linear infinite; */

    position: fixed;
    right: -400px;
    z-index: 41;
    bottom: 42px;
    width: 120px;
    height: 33px;
    background: url(https://kulonprogokab.go.id/v3/image/Car3.png);
    animation: car4 12s linear infinite;
    background-size: cover;
    background-repeat: repeat-x;
}
.dark .car4
{
    /* position: fixed;
    right: -400px;
    bottom: 42px;
    max-width: 85px;
    z-index: 20;
    animation: car4 12s linear infinite; */

    position: fixed;
    right: -400px;
    z-index: 41;
    bottom: 42px;
    width: 120px;
    height: 33px;
    background: url(https://kulonprogokab.go.id/v3/image/Car3_nyala.png);
    animation: car4 12s linear infinite;
    background-size: cover;
    background-repeat: repeat-x;
}
@keyframes car4
{
    0%
    {
        /* transform: translateX(0px) rotateY(180deg); */
        transform: translateX(0px);
    }
    90%,100%
    {
        /* transform: translateX(calc(-100vw - 200px)) rotateY(180deg); */
        transform: translateX(calc(-100vw - 400px));
    }
}
.kereta
{
    /* position: fixed;
    left: -400px;
    bottom: 224px;
    max-width: 400px;
    z-index: 40;
    animation: kereta 18s linear infinite; */

    position: fixed;
    left: -800px;
    z-index: 40;
    bottom: 225px;
    width: 480px;
    height: 45px;
    background: url(https://kulonprogokab.go.id/v3/image/kereta.png);
    animation: kereta 18s linear infinite;
    background-size: cover;
    background-repeat: repeat-x;
}
.dark .kereta
{
    /* position: fixed;
    left: -400px;
    bottom: 224px;
    max-width: 400px;
    z-index: 40;
    animation: kereta 18s linear infinite; */

    position: fixed;
    left: -800px;
    z-index: 40;
    bottom: 225px;
    width: 480px;
    height: 45px;
    background: url(https://kulonprogokab.go.id/v3/image/kereta_nyala.png);
    animation: kereta 18s linear infinite;
    background-size: cover;
    background-repeat: repeat-x;
}
@keyframes kereta
{
    0%
    {
        transform: translateX(0px);
    }
    90%,100%
    {
        transform: translateX(calc(100vw + 800px));
    }
}
.plane
{
    /* position: fixed;
    right: -400px;
    bottom: 400px;
    max-width: 80px;
    z-index: 40;
    animation: plane 40s linear infinite; */

    position: fixed;
    right: -400px;
    z-index: 40;
    bottom: 400px;
    width: 100px;
    height: 36px;
    background: url(https://kulonprogokab.go.id/v3/image/pesawat_OFF.png);
    animation: plane 40s linear infinite;
    background-size: cover;
    background-repeat: repeat-x;
}
.dark .plane
{
    /* position: fixed;
    right: -400px;
    bottom: 400px;
    max-width: 80px;
    z-index: 40;
    animation: plane 40s linear infinite; */

    position: fixed;
    right: -400px;
    z-index: 40;
    bottom: 400px;
    width: 100px;
    height: 36px;
    background: url(https://kulonprogokab.go.id/v3/image/pesawat.png);
    animation: plane 40s linear infinite;
    background-size: cover;
    background-repeat: repeat-x;
}
@keyframes plane
{
    0%
    {
        transform: translateX(0px);
    }
    90%,100%
    {
        transform: translateX(calc(-100vw - 400px));
    }
}
.tombol_rata_tengah
{
    display: grid;
    justify-items: center;
    align-items: center;
}


/* tombol pada Modal */
.semua_tombol
{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: &#39;Poppies&#39;, sans-serif;
}
.body_tombol
{
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    flex-direction: column;
    padding-top: 15px;
    padding-bottom: 15px;
    gap: 17px;
}
.a_tombol
{
    position: relative;
    background: rgb(216, 211, 211);
    color: #00BA7C;
    text-decoration: none;
    /* text-transform: uppercase; */
    font-size: 0.9em;
    letter-spacing: 0.1em;
    padding: 10px 30px;
    transition: 0.5s;
    width: 90%;
    border-radius: 0.3em;
    font-weight: bold;
}
.dark .a_tombol
{
    position: relative;
    background: rgba(34,40,51,0.6);
    /* color: var(--clr); */
    text-decoration: none;
    /* text-transform: uppercase; */
    font-size: 0.9em;
    letter-spacing: 0.1em;
    padding: 10px 30px;
    transition: 0.5s;
    width: 90%;
    border-radius: 0.3em;
    font-weight: bold;
}
.sunrise .a_tombol
{
    position: relative;
    background: rgba(40, 98, 207, 0.6);
    /* color: var(--clr); */
    text-decoration: none;
    /* text-transform: uppercase; */
    font-size: 0.9em;
    letter-spacing: 0.1em;
    padding: 10px 30px;
    transition: 0.5s;
    width: 90%;
    border-radius: 0.3em;
    font-weight: bold;
}
.sunset .a_tombol
{
    position: relative;
    background:rgb(249,152,34);
    /* color: var(--clr); */
    text-decoration: none;
    /* text-transform: uppercase; */
    font-size: 0.9em;
    letter-spacing: 0.1em;
    padding: 10px 30px;
    transition: 0.5s;
    width: 90%;
    border-radius: 0.3em;
    font-weight: bold;
}
.a_tombol:hover
{
    /* letter-spacing: 0.25em; */
    background: #fff;
    color: #00BA7C;
    font-weight: bold;
    /* box-shadow: 0 0 35px var(--clr); */
}
.dark .a_tombol:hover
{
    /* letter-spacing: 0.25em; */
    background: rgba(99, 104, 114, 0.6);
    /* color: var(--clr); */
    color: #00BA7C;
    font-weight: bold;
    /* box-shadow: 0 0 35px var(--clr); */
}
.a_tombol::before
{
    /* content: &#39;&#39;;
    position: absolute;
    inset: 2px;
    background: #d5e4ee;
    border: 1px solid #C4E8FF;
    border-radius: 0.3em; */

    content: &#39;&#39;;
    position: absolute;
    inset: 2px;
    background: rgba(255,255,255,0.1);
    backdrop-filter: blur(10px);
    box-shadow: 0 25px 25px rgba(0,0,0,0.1);
    border-top: 2px solid rgba(255,255,255,0.5);
    border-radius: 0.3em;

    /* position: relative;
    width: 500px;
    height: 300px;
    background: rgba(255,255,255,0.1);
    backdrop-filter: blur(10px);
    box-shadow: 0 25px 25px rgba(0,0,0,0.1);
    border-radius: 20px;
    overflow: hidden;
    border-top: 1px solid rgba(255,255,255,0.5);
    transition: 1s;
    display: flex;
    justify-content: center;
    align-items: center; */
}
.a_tombol .span_tombol
{
    position: relative;
    z-index: 1;
}
.a_tombol .i_tombol
{
    position: absolute;
    inset: 0;
    display: block;
}
.a_tombol .i_tombol::before
{
    /* content: &#39;&#39;;
    position: absolute;
    top: -3.5px;
    left: 80%;
    width: 10px;
    height: 5px;
    border: 2px solid var(--clr);
    font-weight: 100;
    background: #27282c;
    transform: translateX(-50%);
    transition: 0.5s; */
}
.a_tombol:hover .i_tombol::before
{
    /* width: 20px;
    left: 20%; */
}
.a_tombol .i_tombol::after
{
    /* content: &#39;&#39;;
    position: absolute;
    bottom: -3.5px;
    left: 20%;
    width: 10px;
    height: 5px;
    border: 2px solid var(--clr);
    background: #27282c;
    transform: translateX(-50%);
    transition: 0.5s; */
}
.a_tombol:hover .i_tombol::after
{
    /* width: 20px;
    left: 80%; */
}


/* tombol warna */
.body_tombol_warna
{
    /* display: flex; */
    justify-content: center;
    align-items: center;
    /* min-height: 100vh; */
    background: transparent;
}
/* .container_tombol
{
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 30px;
} */
.container_tombol .box_tombol
{
    position: relative;
    width: 100%;
    height: 100%;
    background: transparent;
    /* background: #66CCF5; */
    cursor: pointer;
    transition: 0.5s ease-in-out;
    box-shadow: 10px 10px 15px rgba(0,0,0,0.025);
    background-color: rgba(75, 169, 231, 0.2);
    border-radius: 0.3em;
    z-index: 100;
}
.dark .container_tombol .box_tombol
{
    position: relative;
    width: 100%;
    height: 100%;
    background: transparent;
    /* background: #66CCF5; */
    cursor: pointer;
    transition: 0.5s ease-in-out;
    box-shadow: 10px 10px 15px rgba(0,0,0,0.025);
    background-color: rgba(18, 110, 167, 0.2);
    border-radius: 0.3em;
    z-index: 100;
}
.sunrise .container_tombol .box_tombol
{
    position: relative;
    width: 100%;
    height: 100%;
    background: transparent;
    /* background: #66CCF5; */
    cursor: pointer;
    transition: 0.5s ease-in-out;
    box-shadow: 10px 10px 15px rgba(0,0,0,0.025);
    background-color:  rgba(233, 235, 151, 0.685);
    border-radius: 0.3em;
    z-index: 100;
}
.sunset .container_tombol .box_tombol
{
    position: relative;
    width: 100%;
    height: 100%;
    background: transparent;
    /* background: #66CCF5; */
    cursor: pointer;
    transition: 0.5s ease-in-out;
    box-shadow: 10px 10px 15px rgba(206, 34, 34, 0.025);
    background-color: rgba(241, 244, 247, 0.2);
    border-radius: 0.3em;
    z-index: 100;
}
.container_tombol .box_tombol::before
{
    content: &#39;&#39;;
    position: absolute;
    width: 6px;
    height: 100%;
    background: var(--clr2);
    transition: 0.5s ease-in-out;
}
.dark .container_tombol .box_tombol::before
{
    content: &#39;&#39;;
    position: absolute;
    width: 6px;
    height: 100%;
    background: var(--clr);
    transition: 0.5s ease-in-out;
}
.sunrise .container_tombol .box_tombol::before
{
    content: &#39;&#39;;
    position: absolute;
    width: 6px;
    height: 100%;
    background: var(--clr3);
    transition: 0.5s ease-in-out;
}
.sunset .container_tombol .box_tombol::before
{
    content: &#39;&#39;;
    position: absolute;
    width: 6px;
    height: 100%;
    background: var(--clr4);
    transition: 0.5s ease-in-out;
}
.container_tombol .box_tombol:hover::before
{
    width: 100%;
}
.container_tombol .box_tombol .content_tombol
{
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
}
.container_tombol .box_tombol .content_tombol .icon_tombol
{
    position: relative;
    min-width: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.container_tombol .box_tombol .content_tombol .icon_tombol ion-icon
{
    font-size: 2.5em;
    color: var(--clr2);
    transition: 0.5s ease-in-out;
}
.dark .container_tombol .box_tombol .content_tombol .icon_tombol ion-icon
{
    font-size: 2.5em;
    color: var(--clr);
    transition: 0.5s ease-in-out;
}
.sunrise .container_tombol .box_tombol .content_tombol .icon_tombol ion-icon
{
    font-size: 2.5em;
    color: var(--clr3);
    transition: 0.5s ease-in-out;
}
.sunset .container_tombol .box_tombol .content_tombol .icon_tombol ion-icon
{
    font-size: 2.5em;
    color: var(--clr4);
    transition: 0.5s ease-in-out;
}
.container_tombol .box_tombol:hover .content_tombol .icon_tombol ion-icon
{
    color: #fff;
}
.container_tombol .box_tombol .content_tombol .text_tombol h5
{
    font-weight: 600;
    color: var(--clr2);
    transition: 0.5s ease-in-out;
}
.dark .container_tombol .box_tombol .content_tombol .text_tombol h5
{
    font-weight: 600;
    color: var(--clr);
    transition: 0.5s ease-in-out;
}
.sunrise .container_tombol .box_tombol .content_tombol .text_tombol h5
{
    font-weight: 600;
    color: var(--clr3);
    transition: 0.5s ease-in-out;
}
.sunset .container_tombol .box_tombol .content_tombol .text_tombol h5
{
    font-weight: 600;
    color: var(--clr4);
    transition: 0.5s ease-in-out;
}
.container_tombol .box_tombol .content_tombol .text_tombol p
{
    font-size: 0.9em;
    color: rgb(153, 153, 153);
    transition: 0.5s ease-in-out;
}
.container_tombol .box_tombol:hover .content_tombol .text_tombol h5,
.container_tombol .box_tombol:hover .content_tombol .text_tombol p
{
    color: #fff;
}



/* sub_menu */

.all_sub_menu
{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: &#39;Poppins&#39;, sans-serif;
}
.body_sub_menu
{
    display: flex;
    justify-content: center;
    align-items: center;
    /* min-height: 100vh; */
    /* background: #C9EDFB; */
}
.accordion_sub_menu
{
    width: 800px;
}
.accordion_sub_menu .contentBx_sub_menu
{
    position: relative;
    margin-top: 7px;
}
.accordion_sub_menu .contentBx_sub_menu .label_sub_menu
{
    position: relative;
    padding: 10px;
    background: var(--clr);
    color: var(--clr2);
    cursor: pointer;
    border-radius: 0.3em;
}
.accordion_sub_menu .contentBx_sub_menu .label_sub_menu::before
{
    content: &#39;+&#39;;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    font-size: 1.5em;
}
.accordion_sub_menu .contentBx_sub_menu.contentBx_sub_menu.active .label_sub_menu::before
{
    content: &#39;-&#39;;
}
.accordion_sub_menu .contentBx_sub_menu .content_sub_menu
{
    position: relative;
    background: #fff;
    height: 0;
    overflow: hidden;
    transition: 0.5s ;
    overflow-y: auto;
}
.accordion_sub_menu .contentBx_sub_menu.active .content_sub_menu
{
    height: var(--hg);
}



/* accordion pada MODAL*/

.body_accordion
{
    display: flex;
    justify-content: center;
    align-items: center;
    /* min-height: 100vh; */
}
.container_accordion
{
    margin: 0 40px;
    /* max-width: 600px; */
    display: flex;
    flex-direction: column;
    gap: 15px;
}
.container_accordion .tab_accordion
{
    position: relative;
    background: #CFEFFB;
    backdrop-filter: blur(3px);
    padding: 0 10px 10px;
    border-radius: 5px;
    overflow: hidden;
    border-top: 1px solid rgba(255,255,255,0.5);
    align-items: center;
}
.dark .container_accordion .tab_accordion
{
    position: relative;
    background: #000a0e;
    backdrop-filter: blur(3px);
    padding: 0 10px 10px;
    border-radius: 5px;
    overflow: hidden;
    border-top: 1px solid rgba(255,255,255,0.5);
    align-items: center;
}
.sunrise .container_accordion .tab_accordion
{
    position: relative;
    background: #d3b928;
    backdrop-filter: blur(3px);
    padding: 0 10px 10px;
    border-radius: 5px;
    overflow: hidden;
    border-top: 1px solid rgba(255,255,255,0.5);
    align-items: center;
}
.sunset .container_accordion .tab_accordion
{
    position: relative;
    background: rgb(245,174,111);
    backdrop-filter: blur(3px);
    padding: 0 10px 10px;
    border-radius: 5px;
    overflow: hidden;
    border-top: 1px solid rgba(255,255,255,0.5);
    align-items: center;
}
.container_accordion .tab_accordion input
{
    appearance: none;
}
.container_accordion .tab_accordion label
{
    display: flex;
    align-items: center;
    cursor: pointer;
}
.container_accordion .tab_accordion label::after
{
    content: &#39;+&#39;;
    position: absolute;
    right: 20px;
    font-size: 2em;
    color: rgba(0,0,0,0.1);
    transition: transform 1s;
    align-items: center;
}
.container_accordion .tab_accordion:hover label::after
{
    color: #333;
    align-items: center;
}
.container_accordion .tab_accordion input:checked ~ label::after
{
    transform: rotate(135deg);
    /* color: #fff; */
}
.container_accordion .tab_accordion label h2
{
    width: 25px;
    height: 25px;
    background: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 1em;
    border-radius: 5px;
    margin-right: 10px;
}
.container_accordion .tab_accordion label h2
{
    align-items: center;
    justify-content: center;
    /* background: var(--clr); */
    background: #00BA7C;
}

.container_accordion .tab_accordion label h3
{
    position: relative;
    font-weight: 500;
    font-size: 1.2em;
    /* color: var(--clr); */
    z-index: 10;
    align-items: center;
    justify-content: center;
}
.tab_accordion h2,h3{
    color: #00BA7C;
}
/* .container_accordion.tab_accordion input:checked ~ label h3
{
    background: #fff;
    padding: 2px 10px;
    color: #333;
    border-radius: 2px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
} */
.container_accordion .tab_accordion .content_accordion
{
    height: 0;
    transition: 1s;
    overflow: hidden;
    overflow-y: auto;
    position: relative;
    /* background: #fff; */
    
}
.container_accordion .tab_accordion input:checked ~ .content_accordion
{
    height: var(--hg);
}
.container_accordion .tab_accordion .content_accordion p
{
    position: relative;
    padding: 10px 0;
    color: #333;
    z-index: 10;
}
/* .container_accordion .tab_accordion input:checked ~ .content_accordion p
{
    color: #fff;
} */
.dark .star {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	pointer-events: none;
}
.star.star1 {
	background: url(https://kulonprogokab.go.id/v3/image/star.png);
}
