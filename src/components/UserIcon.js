import "../styles/usericon.css";

export default function UserIcon(props) {

const { iconSize, borderStyle, image} = props;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1))+ min;
}

const SIZES = ['icon-default', 'icon-small', 'icon-tiny'];

const STYLES = ['no-border', 'story-border'];

const checkIconSize = SIZES.includes(iconSize) ? iconSize : SIZES[0];

const checkBorderStyle = STYLES.includes(borderStyle) ? borderStyle : STYLES[0];

let randomId = getRandomInt(1, 70);

let iconImage = image ? image : `https://i.pravatar.cc/150?img=${randomId}`;

    return (
      <>
      <div className={`borderStyle ${checkBorderStyle} `}>
        <img className={`iconSize ${checkIconSize}`} src={iconImage} alt="user icon" />
      </div>
      </>
    )
    
}