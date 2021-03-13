import React, { Component } from 'react'

import Link from 'next/link'
import { init } from 'ityped'

export default class TextBox extends Component {
    componentDidMount() {
        const textWriting = document.querySelector('#textWriting')
        init(textWriting, { showCursor: true, typeSpeed: 80, backDelay: 2500, strings: [' desenvolvedor front-end', ' ux/ui designer'] })
    }

    render() {
        return (
            <>
                <div className="h-full flex">
                    <div className="items-center">
                        <div className="pl-10 pt-4 relative lg:top-1/12 -translate-y-1/2">
                            <div className="pb-9">
                                <p className="text-2xl 2xl:text-4xl text-white">Olá, meu nome é</p>
                            </div>
                            <div className="pb-1 text-white">
                                <h1 className="text-6xl 2xl:text-8xl signature">Uriel Guimarães</h1>
                            </div>
                            <div>
                                <p className="pb-9 text-2xl text-white 2xl:text-4xl">E eu sou
                        <span id="textWriting" className="bg-black sm:bg-transparent text-uriel-blue-light"></span>
                                </p>
                            </div>
                            <div>
                                <Link href="/posts/first-post">
                                    <button className="bg-white py-2 px-4 text-3xl rounded-xl uppercase font-medium hover:bg-green-700 hover:text-white focus:outline-none">
                                        <a>Download CV</a>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}