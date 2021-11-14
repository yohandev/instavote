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
                Hello!
            </section>
            <section class="content" style={{backgroundColor: 'violet'}}>
                World!
            </section>
        </section>
        <section class="child" style={{ backgroundColor: 'red' }}> Hi! </section>
        <section class="child" style={{ backgroundColor: 'violet' }}> Hi! </section>
    </Border>
)

m.render(document.body, View)