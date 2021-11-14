import m from 'mithril'

import { getLocation } from '../../backend/geolocation'

// An iPhone X like border component
export default class Border
{
    view(vnode)
    {
        return <div style={this.style()} class={vnode.attrs.class}>{vnode.children}</div>
    }

    style()
    {
        return {
            borderRadius: '4vh',
            boxShadow: '0px 0px 0px 11px #1f1f1f, 0px 0px 0px 13px #191919, 0px 0px 0px 20px #111',

            position: 'absolute',
            height: '90vh',
            width: 'calc(min(90vh * 0.46182, 90vh))',

            top: '5vh',
            bottom: '5vh',
            left: '5vh',
            right: '5vh',

            overflow: 'scroll',

            fontSize: '0',

            backgroundColor: '#1f242b'
        }
    }
    oncreate(vnode)
    {
        getLocation()
    }
}