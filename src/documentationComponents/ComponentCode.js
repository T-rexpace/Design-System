export const FooterString = {
    jsx: `<div className="footer">
    <p>
        Datos de fuentes oficiales de la NASA
    </p>
    <p>
        Hecho con ❤️ por T-<span>REX</span>PACE
    </p>
</div>`,
    sass: `@import '../globals.scss';
.footer {
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: $Font-Paragraph;
    color: $Color-Grayscale-1;
    background-color: $Color-Primary;
}
.footer p {
    margin: $Spacing-Normal $Spacing-ExtraLarge;
    & span {
        color: $Color-Marca;
    }
}`
}

export const HeaderString = {
    jsx: `<header className="header">
    <div className="header__menu header-margin">
        <ButtonLogo />
        <NavBar />
    </div>
    <div className="header-margin">
        <ButtonSuscribe />
    </div>
</header>`,
    sass: `@import '../globals.scss';

.header {
    position: relative;
    display: flex;
    justify-content: space-between;
    color: $Color-Grayscale-1;
    align-items: center;
    background-color: $Color-Primary;
}

.header-margin {
    margin: 0 $Spacing-Normal;
}

.header__menu {
    display: flex;
    color: $Color-Grayscale-1;
    align-items: center;
    background-color: $Color-Primary;
}`
}

export const ButtonSuscribeString = {
    jsx: `const ButtonSuscribe = () => {
    const handleClick = () => {
        const $btnSuscribe = document.getElementById('btnSuscribe')
        $btnSuscribe.classList.add('active')
        setTimeout(() => $btnSuscribe.classList.remove('active'), 200)
    }
    return (
        <button 
        className="btn btn__normal"
        id="btnSuscribe"
        onClick={ handleClick }> 
            Suscribirme
        </button>    
    )
}`,
    sass: `@import '../globals.scss';

%btn {
    padding: $Spacing-ExtraSmall $Spacing-Normal;
    border: none;
    border-radius: 70px;
    font-family: $Font;
    font-size: $Font-Paragraph;
    font-weight: $Bold;
    outline: none;
    &:hover {
        cursor: pointer;
    }
}

.btn__normal {
    @extend %btn;
    color: $Color-Grayscale-1;
    background: $Gradient;
    transition: 200ms;
}

.active {
    transform: scale(.8);
}`
}

export const InputString = {
    jsx: `
<div className="form">
    <label>{ props.label || "Label"}</label>
    <input 
        placeholder={ props.label || "Placeholder" }
        type="text" 
        name={ props.label } 
    />
</div>`,
    sass: `
@import '../globals.scss';

.form {
    label {
        display: block;
        margin-bottom: $Spacing-ExtraSmall;
        font-size: $Font-Small;
    }
    input {
        padding: $Spacing-ExtraSmall;
        border-radius: $Spacing-ExtraSmall;
        border: 2px solid $Color-Grayscale-6;
        font-size: $Font-Paragraph;
        color: $Color-Grayscale-6;
        outline: none;
    }
    input:focus {
        border: 2px solid $Color-Secondary;
        box-shadow: 0 0 5px $Color-Secondary;
    }
    ::placeholder {
        color: $Color-Grayscale-4;
    }
}`
}

export const SwitchString = {
    jsx: `const Switch = (props) => {
    const turnSwitch = () => {
        const switchBox = document.getElementById('switchBox')
        switchBox.classList.toggle('switch__box--active')
    }

    return(
        <div className="switch__box" id="switchBox">
            <div 
                className="switch__circle" 
                onClick={ turnSwitch } 
            />
        </div>
    )
}`,
    sass: `@import '../globals.scss';

.switch__box {
    width: 95px;
    height: $Spacing-Large;
    padding: $Spacing-ExtraSmall/3;
    border-radius: $Spacing-ExtraLarge;
    background-color: $Color-Grayscale-4;
    & .switch__circle {
        width: $Spacing-Normal;
        height: $Spacing-Large - 7;
        border-radius: 100%;
        background-color: $Color-Grayscale-1;
    }
}

.switch__box--active {
    @extend .switch__box;
        background-color: $Color-Secondary;
    .switch__circle {
        margin: 0 0 0 auto;
    }
}`
}

export const CheckboxString = {
    jsx: `<div className="checkbox">
    <input type="checkbox" id="check1" />
    <label htmlFor="check1">Check me!</label>
</div>`,
    sass: `@import '../globals.scss';

.checkbox {
    display: flex;
    align-items: center;
    input[type="checkbox"] + label:before {
        content: "";
        width: $Spacing-Small;
        height: $Spacing-Small;
        float: left;
        margin: .8em.5em 0 0;
        border: 2px solid $Color-Grayscale-4;
        border-radius: $Spacing-ExtraSmall/2;
        background: $Color-Grayscale-1;
    }
    input[type="checkbox"]:checked + label:before {
        border-color: $Color-Secondary;
    }
    input[type="checkbox"]:checked + label:after {
        content: "";
        width: 12px;
        height: 6px;
        float: left;
        margin-left: -1.5em;
        margin-top: 1.2em;
        border: 3px solid $Color-Secondary;
        border-right: 0;
        border-top: 0;
        transform: rotate(-55deg);
    }
    input[type="checkbox"] {
        display: none;
    }
    input[type="checkbox"] + label {
        font-weight: bold;
        line-height: 3em;
        color: $Color-Grayscale-4;
    }
    input[type="checkbox"]:checked + label {
        color: $Color-Secondary;
    }
}`
}

export const AsteroidCardString = {
    jsx: `<div className="asteroidCard">
    <div className="asteroidCard__picture">
        <div className="asteroidCard__picture-asteroid">
            <figure>
                <img src={ props.data.image } alt={ props.data.name } />
            </figure>
        </div>
        <div className="asteroidCard__picture-indicator">
            { props.data.potentially_hazardous 
                ? <img src={ Peligroso } alt={ props.data.name } />
                : <img src={ Inofensivo } alt={ props.data.name } />
            }
        </div>
        <div className="asteroidCard__picture-velocity">
            <p>
                <small>
                    { props.data.velocity }
                    <br />
                    km/s
                </small>
            </p>
        </div>
    </div>
    
    <div className="asteroidCard__details">
        <h3>{ props.data.name }</h3>
        <p>Fecha de avistamiento</p>
        <div className="asteroidCard__details-date">
            <p><small>
                Primera
                <br />
                { props.data.first_observation }
            </small></p>
            <p><small>
                Última
                <br />
                { props.data.last_observation }
            </small></p>
        </div>
        <p>Diametro</p>
        <div className="asteroidCard__details-diameter">
            <p><small>{ props.data.diameter_min } mínimo</small></p>
            <p><small>{ props.data.diameter_max } máximo</small></p>
        </div>
        <Checkbox 
            // check="checked"
            label="Comparar"
            />
    </div>
</div>`,
    sass: `@import '../globals.scss';

.asteroidCard {
    max-width: 320px;
    height: 460px;
    border-radius: $Border-Radius * 2;
    color: $Color-Grayscale-1;
    background-color: $Color-Primary-Light-1;
    &__picture {
        position: relative;
        height: 160px;
        &-asteroid img {
            width: 100%;
            height: 160px !important;
            border-top-left-radius: $Border-Radius * 2;
            border-top-right-radius: $Border-Radius * 2;
        }
        &-indicator {
            position: absolute;
            top: 0;
        }
        &-indicator img {
            width: 60px;
            height: 60px;
            margin: $Spacing-Small;
        }
        &-velocity {
            position: absolute;
            right: 10px;
            top: 120px;
            width: 65px;
            height: 65px;
            border-radius: 100%;
            background: $Gradient;
        }
        &-velocity p {
            text-align: center;
            line-height: .8;
        }
    }
    &__details {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: $Spacing-Small;
        height: 300px;
        p {
            line-height: .6;
            flex: 1;
        }
        &-date {
            display: flex;
        }
        &-diameter {
            @extend .asteroidCard__details-date
        }
    }
}`
}

export const FormBirthdayString = {
    jsx: `<div className="formBirday">
    <Input 
        label="Fecha"
        placeholder="07/05/1946"
    />
    <ButtonSuscribe title="Consultar" />
</div>`,
    sass: `@import '../globals.scss';

.formBirday {
    & Input {
        margin-bottom: $Spacing-Small;
    }
}`
}

export const HazardousIndicatorString = {
    jsx: `<div className="HazardousCard">
    <div className="HazardousCard__indicator">
        <figure>
            { props.peligroso 
                ? <img src={ Peligroso } alt="HazardousIndicatorImg" />
                : <img src={ Inofensivo } alt="HazardousIndicatorImg" />
            }
        </figure>
    </div>
    <div className="HazardousCard__list">
        { props.data.map( item => (
            <p><span>🟣</span> { item.name }</p>
            ))
        }
    </div>
</div>`,
    sass: `@import '../../scss/globals.scss';

.HazardousCard {
    width: 320px;
    color: $Color-Grayscale-1;
    &__indicator {
        border: 2px solid $Color-Secondary;
        border-top-left-radius: $Border-Radius * 2;
        border-top-right-radius: $Border-Radius * 2;
        border-bottom: none;
        padding: $Spacing-Normal;
    }
    &__list {
        background-color: $Color-Primary-Light-1;
        padding: $Spacing-Normal;
        border-bottom-left-radius: $Border-Radius * 2;
        border-bottom-right-radius: $Border-Radius * 2;
    }
}`
}