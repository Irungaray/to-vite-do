import './SearchButton.css'

const SearchButton = (props) => {
    return (
        <button onClick={props.onClick} className="SearchButton">
            <svg width="67" height="79" viewBox="0 0 67 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_20_5)">
                <path d="M33.5 67L62.5118 16.75H4.48815L33.5 67Z" fill="#35E7DC"/>
                <path d="M7.95225 18.75L33.5 63L59.0477 18.75H7.95225Z" stroke="black" stroke-width="4"/>
                </g>
                <path d="M36.9531 36.9531L40.1406 40.1406" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M32.9688 38.0156C35.7561 38.0156 38.0156 35.7561 38.0156 32.9688C38.0156 30.1814 35.7561 27.9219 32.9688 27.9219C30.1814 27.9219 27.9219 30.1814 27.9219 32.9688C27.9219 35.7561 30.1814 38.0156 32.9688 38.0156Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <defs>
                <filter id="filter0_d_20_5" x="0.488281" y="16.75" width="66.0234" height="62.25" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="8"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.636029 0 0 0 0 0.4375 0 0 0 0 1 0 0 0 1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_5"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_20_5" result="shape"/>
                </filter>
                </defs>
            </svg>
        </button>
    )
}

export { SearchButton }
