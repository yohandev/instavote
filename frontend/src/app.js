import m from 'mithril'

import Border from './border'

const View = (
    <Border class="container">
        <section class="child" style={{ backgroundColor: 'blue' }}>
            <img src="res/donkey.png" class="party-animal"></img>
            <img src="res/joe.png" class="candidate-bust"></img>
        </section>
        <section class="child" style={{ backgroundColor: 'red' }}> Hi! </section>
        <section class="child" style={{ backgroundColor: 'violet' }}> Hi! </section>
    </Border>
)

m.render(document.body, View)