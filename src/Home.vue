<template>
    <div> 

        <b-jumbotron header="" text-variant="light" bg-variant="dark" >
   
        </b-jumbotron>

        <div class="info">
            <b-container class="bv-example-row">
                <div class="box-group">
                    <b-row>
                        <b-col class="box">
                            <img src="../src/assets/img/clock.png" class="icon-prop1">
                            <p><b>DATE</b><p>
                            <p>5th May 2018</p> 
                        </b-col>
                        <b-col class="box">
                            <img src="../src/assets/img/location.png" class="icon-prop2">
                            <p><b>LOCATION</b><p>
                            <p>Bells University, Ota</p>
                        </b-col>
                        <b-col class="box">
                            <img src="../src/assets/img/bookW.png" class="icon-prop3">
                            <p><b>SEATS</b><p>
                            <p>150 People</p>
                        </b-col>
                        <b-col class="box">
                            <img src="../src/assets/img/speaker.png" class="icon-prop4">
                            <p><b>SPEAKERS</b><p>
                            <p>12 Experts</p>
                        </b-col>
                    </b-row>
                </div>
            </b-container>
        </div>

        <section class="about">
            <b-container class="bv-example-row">
            
                    <b-row>
                        <b-col cols="6" class="left">
                            <p>--ABOUT THE EVENT--<p>
                            <h5 class="p-h5">EXEUTE . AWAKEN . INSPIRE</h5>
                            <p class="paragraph">Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium</p>
                            <button class="red-btn" style="margin-top: 1.9rem;">More</button>
                        </b-col>
                        <b-col C>
                            <p class="image"></p>
                        </b-col>
                    </b-row>
            
            </b-container>
        </section>

<hr/>
        <div class="slider">
             <b-container class="bv-example-row">
                <p>--MEET THE SPEAKERS--<p>
                <h5 class="p2-h5">SPEAKERS</h5>           
                <carousel-3d :controls-visible="true">
                    <slide :index="0">
                    
                    </slide>
                    <slide :index="1">
                    
                    </slide>
                    <slide :index="2">
                    
                    </slide>
                    <slide :index="3">
                    
                    </slide>
                    <slide :index="4">
                    
                    </slide>
                    <slide :index="5">
                    
                    </slide>
                </carousel-3d>
            </b-container>
        </div>

        <div class="book">
            <b-container class="bv-example-row">
                 <b-row>
                    <b-col>
                         <h5> Book A Seat To This Event </h5> 
                    </b-col>
                    <b-col>
                        <button class="white-btn" style="float:right;">Click Here</button>
                    </b-col>
                 </b-row>
            </b-container>
        </div>

         <div class="wit">
            <b-container class="bv-example-row">
                <b-row>
                    <b-col cols="8">
                    <h5 style="padding-bottom:1rem;"> What is TEDx ? </h5>
                    <p class="paragraph">In the spirit of ideas worth spreading, TED has created a program called TEDx. TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called TEDx[name], where x = independently organized TED event. At our TEDx[name] event, TED Talks video and live speakers will combine to spark deep discussion and connection in a small group. The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized.</p>
                    </b-col>
                    <b-col></b-col>
                </b-row>
            </b-container>
        </div>

    </div>
</template>

<style>
    .jumbotron{
        border-radius: 0 !important;
        text-align: center;
        background-color: #000 !important;
        height: 400px;
    }
    .jumbotron img{
        margin-top: 80px;
    }
    .navbar-expand-md .navbar-nav .nav-link {
        padding-right: 2.0rem;
    }

    .info .box{
        background-color: #E62B1E;
        text-align: left;
        margin: 0 20px;
        padding-top: 15px;
        box-shadow: 1px 3px 20px rgba(17, 17, 17, 0.2);
    }
    .info .box p{
        color: white;
        line-height: 0.8rem;
        font-size: 15px;
    }
    .info .box-group{
        position: absolute;
        top: 430px;
        width: 1100px;
        z-index: 2;
    }
    .icon-prop1{
        width: 25%;
        float: left; 
        margin-right: 10px;
    }
    .icon-prop2{
        width: 24%;
        float: left; 
        margin-right: 10px;
    }
    .icon-prop3{
        width: 19%;
        float: left; 
        margin: 5px 20px 0 10px;
    }
    .icon-prop4{
        width: 19%;
        float: left; 
        margin: 4px 20px 0 5px;
    }

    .about .left{
        text-align: right;
        padding-top: 10px;
    }
    .about .image{
        border: 1px solid black;
        background-color: black;
        height: 320px;
        width: 400px;
        margin-left: 30px;
    }

    .slider, .wit{
        padding: 80px 0;
    }
    .carousel-3d-slide {
        width: 400px !important;
        border:1px solid white !important;
        background-color: black !important;;
    }
     .carousel-3d-slider{
        width: 400px !important;
        height: 280px !important;
    }
    .slider a{
        background-color: #E62B1E;
        color: white !important;
        text-align: center !important;
        width: 30px!important;
        height: 30px!important;
        line-height: 20px!important;
        font-size: 40px !important;
         box-shadow: 1px 3px 20px rgba(17, 17, 17, 0.1);
    }

    .wit{
        background-image: url('../src/assets/img/wit.png');
        background-size: cover; 
        background-position: center;
    }

    .book h5{
        color: white;
    }
    .book{
        padding: 50px;
        background: rgba(224,72,61,1);
        background: -moz-linear-gradient(left, rgba(224,72,61,1) 0%, rgba(235,43,30,1) 100%);
        background: -webkit-gradient(left top, right top, color-stop(0%, rgba(224,72,61,1)), color-stop(100%,rgba(235,43,30,1)));
        background: -webkit-linear-gradient(left, rgba(224,72,61,1) 0%, rgba(235,43,30,1) 100%);
        background: -o-linear-gradient(left, rgba(224,72,61,1) 0%,rgba(235,43,30,1) 100%);
        background: -ms-linear-gradient(left, rgba(224,72,61,1) 0%, rgba(235,43,30,1) 100%);
        background: linear-gradient(to right, rgba(224,72,61,1) 0%,rgba(235,43,30,1) 100%);
    }

</style>