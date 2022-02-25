import './AddButton.css'

const AddButton = (props) => {
    return (
        <button onClick={props.onClick} className="AddButton">
            <svg width="67" height="79" viewBox="0 0 67 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_20_2)">
                <path d="M33.5 67L62.5118 16.75H4.48815L33.5 67Z" fill="#35E7DC"/>
                <path d="M7.95225 18.75L33.5 63L59.0477 18.75H7.95225Z" stroke="black" stroke-width="4"/>
                </g>
                <path d="M33.4951 29.4756C33.8776 29.4756 34.1665 29.5041 34.3618 29.561C34.5571 29.6099 34.6873 29.6872 34.7524 29.793C34.8257 29.8988 34.8623 30.0493 34.8623 30.2446V33.5161H38.146C38.3413 33.5161 38.4919 33.5527 38.5977 33.626C38.7035 33.6992 38.7808 33.8335 38.8296 34.0288C38.8866 34.2241 38.915 34.513 38.915 34.8955C38.915 35.278 38.8866 35.5669 38.8296 35.7622C38.7808 35.9575 38.7035 36.0918 38.5977 36.165C38.4919 36.2301 38.3413 36.2627 38.146 36.2627H34.8623V39.5464C34.8623 39.7417 34.8257 39.8923 34.7524 39.998C34.6873 40.1038 34.5571 40.1852 34.3618 40.2422C34.1665 40.291 33.8776 40.3154 33.4951 40.3154C33.1126 40.3154 32.8237 40.291 32.6284 40.2422C32.4331 40.1852 32.2988 40.1038 32.2256 39.998C32.1523 39.8923 32.1157 39.7417 32.1157 39.5464V36.2627H28.8442C28.6489 36.2627 28.4984 36.2301 28.3926 36.165C28.2868 36.0918 28.2054 35.9575 28.1484 35.7622C28.0996 35.5669 28.0752 35.278 28.0752 34.8955C28.0752 34.513 28.0996 34.2241 28.1484 34.0288C28.2054 33.8335 28.2868 33.6992 28.3926 33.626C28.4984 33.5527 28.6489 33.5161 28.8442 33.5161H32.1157V30.2446C32.1157 30.0493 32.1523 29.8988 32.2256 29.793C32.2988 29.6872 32.4331 29.6099 32.6284 29.561C32.8237 29.5041 33.1126 29.4756 33.4951 29.4756Z" fill="black"/>
                <defs>
                <filter id="filter0_d_20_2" x="0.488281" y="16.75" width="66.0234" height="62.25" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="8"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.636029 0 0 0 0 0.4375 0 0 0 0 1 0 0 0 1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_2"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_20_2" result="shape"/>
                </filter>
                </defs>
            </svg>
        </button>
    )
}

export { AddButton }
