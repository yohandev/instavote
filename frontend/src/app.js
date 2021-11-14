import m from 'mithril'

import Border from './border'

const View = (
    <Border class="container">
        <section class="child" style={{ backgroundColor: '#3c5791' }}>
            {/* <img src="res/donkey.png" class="party-animal"></img>
            <img src="res/joe.png" class="candidate-bust"></img> */}
            {/* <div class="content">
                Hey!
            </div> */}
            <section class="content" style={{backgroundColor: 'green'}}>
                <div>
                <video autoplay muted loop id='vid'>
                    <source src="res/cop26-480p.mp4" type="video/mp4"></source>
                </video>
                <section class="shadow" onclick={() => document.getElementById('vid').muted = false}>
                    <br/>
                    <h1>🌍 COP26 CONCLUDES</h1>
                    <h2>CLIMATE CHANGE</h2>
                </section>
                </div>
            </section>
            <section class="content" style={{backgroundColor: 'violet'}}>
                World!
            </section>
        </section>
        <section class="child" style={{ backgroundColor: 'red' }}>
        <section class="content" style={{backgroundColor: 'green'}}>
                <video autoplay muted loop id='vid'>
                    <source src="res/infra_bill.mp4" type="video/mp4"></source>
                </video>
                <section class="shadow" onclick={() => document.getElementById('vid').muted = false}>
                    <br/>
                    <h1>💰 $1.2 TRILLION BILL</h1>
                    <h2>INFRASTRUCTURE</h2>
                </section>
            </section>
            <section class="content" style={{backgroundColor: 'violet'}}>
                World!
            </section>
        </section>
        <section class="child" style={{ backgroundColor: 'violet' }}> Hi! </section>
    </Border>
)

m.render(document.body, View)