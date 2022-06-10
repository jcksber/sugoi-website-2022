
import { config } from "@fortawesome/fontawesome-svg-core";
import { useEffect } from 'react';

config.autoAddCss = false;

export default function Home() {

    useEffect(() => {
        // on-render we want to trigger the "welcome animation"
    });

    return (
        <div id="sugoi" className="max-w-full">

            <h1>Hello World</h1>

        </div>
    )
}
















