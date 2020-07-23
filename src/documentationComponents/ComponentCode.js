export const FooterString = {
    jsx: `
<div className="footer">
    <p>
        Datos de fuentes oficiales de la NASA
    </p>
    <p>
        Hecho con ❤️ por T-<span>REX</span>PACE
    </p>
</div>`,
    sass: `
@import '../globals.scss';

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
    jsx: `
<header className="header">
    <div className="header__menu header-margin">
        <ButtonLogo />
        <NavBar />
    </div>
    <div className="header-margin">
        <ButtonSuscribe />
    </div>
</header>`,
    sass: `
@import '../globals.scss';

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

export const ButtonString = {
    jsx: `
<button 
    className={ btn__{ props.type } }
> 
    { props.title || "Suscribirme"}
</button>`,
    sass: `
@import '../globals.scss';

//-------------------------------  general button properties
%btn {
    padding: $Spacing-ExtraSmall $Spacing-Normal;
    border: none;
    border-radius: 70px;
    font-family: $Font;
    font-size: $Font-Paragraph;
    font-weight: $Bold;
    text-transform: uppercase;
    outline: none;
    transition: transform 200ms;
    will-change: transform;
    &:hover {
        cursor: pointer;
    }
    &:active {
        transform: scale(.8);
    }
}
//-------------------------------  normal-button
.btn__normal {
    @extend %btn;
    color: $Color-Grayscale-1;
    background: $Gradient;
}
//-------------------------------  outline-button
.btn__outline {
    @extend %btn;
    color: $Gradient;
    border: 2px solid $Gradient;
    background: transparent;
}
//-------------------------------  disabled-normal-button
.btn__normal--disabled {
    @extend %btn;
    color: $Color-Grayscale-1;
    background: $Color-Grayscale-4;
    &:active {
        transform: none;
    }
}
//-------------------------------  disabled-outline-button
.btn__outline--disabled {
    @extend %btn;
    color: $Color-Grayscale-4;
    border: 2px solid;
    background: transparent;
    &:active {
        transform: none;
    }
}
//-------------------------------  facebook-button
.btn__facebook {
    @extend %btn;
    color: $Color-Grayscale-1;
    background: $Color-Facebook;
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
    jsx: `
const Switch = (props) => {

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
    sass: `
@import '../globals.scss';

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
    jsx: `
<div className="checkbox">
    <input type="checkbox" id="check1" />
    <label htmlFor="check1">Check me!</label>
</div>`,
    sass: `
@import '../globals.scss';

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
    jsx: `
<div className="asteroidCard">
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
    sass: `
@import '../globals.scss';

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
    jsx: `
<div className="formBirday">
    <Input 
        label="Fecha"
        placeholder="07/05/1946"
    />
    <ButtonSuscribe title="Consultar" />
</div>`,
    sass: `
@import '../globals.scss';

.formBirday {
    & Input {
        margin-bottom: $Spacing-Small;
    }
}`
}

export const HazardousIndicatorString = {
    jsx: `
<div className="HazardousCard">
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
    sass: `
@import '../../scss/globals.scss';

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

export const PlayerDataString = {
    jsx: `
<div className="playerData">
    <div className="playerData__position">
        <p>
            <span>⭐ </span>
            { props.position || 1 }
        </p>
    </div>
    <div className="playerData__nikname">
        <p>
            { props.nickname || "NickName_1"}
        </p>
    </div>
    <div className="playerData__score">
        <p>
            { props.score || "00:12:47" }
        </p>
    </div>
</div>`,
    sass: `
@import '../globals.scss';

.playerData {
    display: flex;
    justify-content: space-between;
    width: 500px;
    border-radius: $Border-Radius;
    border: 1px solid $Color-Primary;
    padding: $Spacing-ExtraSmall $Spacing-Small;
}`
}

export const RowGraphDataString = {
    jsx: `
<div className="rowGraphData">
    <div className="rowGraphData__position">
        <p>
            <span>🟣‣ </span>
            { props.position || 1 }
        </p>
    </div>
    <div className="rowGraphData__name">
        <p>
            { props.name || "Asteroide_1"}
        </p>
    </div>
    <div className="rowGraphData__unit">
        <p>
            { props.diameter_max || "245849.53" }
        </p>
    </div>
</div>`,
    sass: `
@import '../globals.scss';

.rowGraphData {
    display: flex;
    justify-content: space-between;
    width: 500px;
    border-radius: $Border-Radius;
    padding: $Spacing-ExtraSmall $Spacing-Small;
    color: $Color-Grayscale-1;
    background-color: $Color-Primary;
}`
}

export const OrderDropdownString = {
    jsx: `
const moreVelocity = () => alert('moreVelocity')
const lessVelocity = () => alert('lessVelocity')
const moreSighting = () => alert('moreSighting')
const lessSighting = () => alert('lessSighting')
const moreDiameter = () => alert('moreDiameter')
const lessDiameter = () => alert('lessDiameter')

return(
    <div className="dropDown">
        <p className="dropDown__order">Ordenar por »</p>
        <div className="dropDown__menu">
            <p className="dropDown__menu-velocity h2--bb">
                Velocidad
            </p>
            <p className="dropDown__menu-sighting h2--bb">
                Avistamiento
            </p>
            <p className="dropDown__menu-diameter">
                Diametro
            </p>

            <div className="dropDown__velocity">
                <p className="h2--bb" onClick={ moreVelocity }>Más rápido</p>
                <p onClick={ lessVelocity }>Más lento</p>
            </div>

            <div className="dropDown__sighting">
                <p className="h2--bb" onClick={ moreSighting }>Más reciente</p>
                <p onClick={ lessSighting }>Más remoto</p>
            </div>

            <div className="dropDown__diameter">
                <p className="h2--bb" onClick={ moreDiameter }>Máximo</p>
                <p onClick={ lessDiameter }>Mínimo</p>
            </div>
        </div>
    </div>
)`,
    sass: `
@import '../globals.scss';

%dropDown-menu {
    display: none;
    position: absolute;
    width: 320px;
    border: 1px solid $Color-Primary;
    border-radius: $Border-Radius;
    background-color: $Color-Grayscale-1;
    &:hover {
        display: block;
    }
    & p {
        margin: 0;
        padding: $Spacing-Small 0;
        text-align: center;
    }
    & p:hover {
        box-shadow: inset 10px 0 $Color-Secondary;
    }
}

.dropDown {
    position: relative;
    padding-bottom: $Spacing-Normal;
    background-color: $Color-Primary;
    &__order {
        display: inline-block;
        position: absolute;
        top: 0;
        right: 0;
        margin: 0;
        color: $Color-Grayscale-1;
    }
    &__order:hover ~ .dropDown__menu {
        display: block;
    }
    &__menu {
        @extend %dropDown-menu;
        right: 0;
        top: $Spacing-Normal - 2;
        &-velocity:hover ~ .dropDown__velocity {
            display: block;
        }
        &-sighting:hover ~ .dropDown__sighting {
            display: block;
        }
        &-diameter:hover ~ .dropDown__diameter {
            display: block;
        }
    }
    &__velocity {
        @extend %dropDown-menu;
        top: 0;
        right: 319px;
    }
    &__sighting {
        @extend %dropDown-menu;
        top: $Spacing-ExtraLarge + $Spacing-Small;
        right: 319px;
    }
    &__diameter {
        @extend %dropDown-menu;
        top: ($Spacing-ExtraLarge + $Spacing-Small) * 2;
        right: 319px;
    }
}`
}

export const ComparativeContainerString = {
    jsx: `const [ counter, setCounter ] = useState(0)
    const handleCancelClick = () => setCounter(0)
    const handleCompareClick = () => alert( {counter} Elementos seleccionados. Vamonos a las gráficas)

    return(
        <Fragment>
            <div className="comparative">
                <h3>Asteroides a comparar ({ counter }), máximo 5.</h3>
                { counter == 0 &&
                    <Fragment>
                        <Button type="normal--disabled" title="Comparar" />
                        <Button type="normal--disabled"><span>Cancelar</span></Button>
                    </Fragment>
                }
                { counter == 1 &&
                    <Fragment>
                        <Button type="normal--disabled" title="Comparar" />
                        <Button type="normal"><span onClick={ handleCancelClick } >Cancelar</span></Button>
                    </Fragment>
                }
                { counter > 1 &&
                    <Fragment>
                        <Button type="normal"><span onClick={ handleCompareClick }>Comparar</span></Button>
                        <Button type="normal"><span onClick={ handleCancelClick } >Cancelar</span></Button>
                    </Fragment>
                }
            </div>
            { counter < 5 &&
                <button onClick={ () => setCounter(counter + 1) } >seleccionar</button>
            }
        </Fragment>
    )`,
    sass: `
@import '../globals.scss';

.comparative {
    button {
        margin: $Spacing-Small $Spacing-ExtraLarge;
    }
}`
}

export const ModalSuscribeString = {
    jsx: `
<div className="modalSuscribe">
    <Button type="outline" title="Logotipo" />
    <p>
        Descubre cada mes los asteroides más impresionantes
    </p>
    <Input label="Nombre completo" />
    <Input label="Correo electronico" />
    <Button type="normal" />
</div>`,
    sass: `
@import '../globals.scss';

.modalSuscribe {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 540px;
    height: 600px;
    border: 1px solid $Color-Primary;
    border-radius: $Border-Radius * 2;
    padding: $Spacing-Large;
    & p {
        text-align: center;
    }
    & input {
        width: 100%;
    }
}`
}

export const ModalBirthdayString = {
    jsx: 'jsx',
    sass: 'sass'
}