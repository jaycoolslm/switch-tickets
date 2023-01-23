
<section>
    <div>
        <h2>WHY JOIN RESELLERS ACADEMY?</h2>
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
        <a class="btn" href="https://resellersacademy.switch-tickets.com/">JOIN NOW</a>
        <img src="/ticket2.png" alt="Switch Tickets">
    </div>
</section>

<style lang="scss">
    section {
        position: relative;
        z-index: 2;
        background-color: var(--dark);
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
                  
                    img {
                       
                        display: none;
                       
                    }
                } 
            }
    }
</style>