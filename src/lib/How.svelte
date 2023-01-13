
<section>
    <div>
        <h2>WHY JOIN?</h2>
        <p>We have found that certain ticket releases can be very profitable when resold. 
            This is because the demand for certain events massively outweighs the supply.
            <br>
            <br>
            As this market is not very saturated, it is easy to make money flipping these tickets; 
            all you need to know is which events are profitable.
            <br>
            <br>
            We have made that simple by creating Resellers Academy!
        </p>
        <a>GO TO COURSE</a>
        <img src="/ticket2.png" alt="Switch Tickets">
    </div>
</section>

<style lang="scss">
    section {
        position: relative;
        z-index: 2;
        background-color: #333232;
        padding: 4rem 2rem;
        div {
            background-color: white;
            max-width: 600px;
            padding: 2rem;
            border-radius: 1rem;
            position: relative;
            h2, p {
                text-align: center;
            }
            h2 {
                font-family: 'Archivo Black', sans-serif;  
            }
            p {
                font-family: 'Archivo', sans-serif;
                margin: 2rem 0;
            }
            a {
                background-color: black;
                color: white;
                text-decoration: none;
                padding: 1rem 3rem;
                border-radius: 1rem;
                display: block;
                text-align: center;
                max-width: 400px;
                margin: 0 auto;
                font-family: 'Archivo Black', sans-serif;
                margin-bottom: 2rem;
                cursor: pointer;
                transition: 0.3s all ease;
                &:hover {
                    background-color: var(--gold);
                }
            }

            img {
                position: absolute;
                bottom: -50px;
                right: -300px;
            }
        }
        @media screen and (min-width: 1200px) {
            div {
                margin: 0 auto;

            }
        }
        @media screen and (max-width: 904px) {
                div {
                    margin: 0 auto;
                    a {
                        position: relative;
                        z-index: 5;
                    }
                    img {
                        z-index: 1;
                        // display: none;
                        max-width: 100vw;
                        right: 50%;
                        transform: translateX(50%);
                        bottom: -120px;
                    }
                } 
            }
    }
</style>