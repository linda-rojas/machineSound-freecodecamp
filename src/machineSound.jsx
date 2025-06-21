import "./machineSound.scss"

export function MachineSound({
        songName,
        textButton,
        onSelect,
        volume
}) {

    function handeClick() {
        const audio = new Audio(`../public/${songName}.wav`);
            audio.play();
            audio.volume = volume;
            onSelect();
    }

    return(
        <div className="div-machine-sound">
                <button
                    className="button-machine-sound"
                    onClick={handeClick}
                >
                    {textButton}
                </button>
        </div>
    )
}