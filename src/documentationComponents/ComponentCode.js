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
    jsx: `<div className="form">
    <label>Label</label>
    <input 
        placeholder="Placeholder"
        type="text" 
        name="user_name" 
    />
</div>`,
    sass: `@import '../globals.scss';

.form {
    display: flex;
    flex-direction: column;
    label {
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
}

::placeholder {
    color: $Color-Grayscale-4;
}`
}

export const SwitchString = {
    jsx: `const Switch = () => {
    const turnSwitch = () => {
        const switchBox = document.getElementById('switchBox')
        switchBox.classList.toggle('switch__box--active')
    }

    return(
        <div className="switch__box" id="switchBox">
            <div 
                className="switch__circle"
                onClick={ turnSwitch }
            ></div>
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
        width: $Spacing-Normal + 4;
        height: $Spacing-Large - 7;
        border-radius: 100%;
        background-color: $Color-Grayscale-1;
    }
}

.switch__box--active {
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
