import m from 'mithril'

const IPhone = (
    <div id='iphone-border'>
        {/* <div id='page1'>
            <img src='res/joe.png' id='joe'></img>
            <div id='flag'>JOE MAMA</div>
        </div> */}
        <svg viewBox='0 0 1 1' xmlns='http://www.w3.org/2000/svg' class='candidate-page'>
            <image href='res/joe.png' width='100%' height='auto'></image>
        </svg>
    </div>
)

m.render(document.body, IPhone)